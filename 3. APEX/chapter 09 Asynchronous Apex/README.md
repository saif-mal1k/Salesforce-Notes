
**Note:** Apex Triggers and Asynchronous apex are two different things.

**tip:** when we have to query existing records and apply bulk process on them, we use asynchronous apex. 


<br/>


<br/>


# Asynchronous Apex

| Type |	Overview |	Common Scenarios |
|------|-----------|-------------------|
| Future Methods |	Run in their own thread, and do not start until resources are available. | Web service callout. |
| Batch Apex |	Run large jobs that would exceed normal processing limits. |	Data cleansing or archiving of records. |
| Queueable Apex |	Similar to future methods, but provide additional job chaining and allow more complex data types to be used. |	Performing sequential processing operations with external Web services. | 
| Scheduled Apex |	Schedule Apex to run at a specified time.	| Daily or weekly tasks. |


<br/>


<br/>


## Future methods

### are used for:

<details>
<summary> <b> <em> &nbsp; &nbsp; Callouts to external Web services.</em> </b> from triggers </summary> 
<p>

---

If you are making callouts from a trigger or after performing a DML operation, you must use a future or queueable method. A callout in a trigger would hold the database connection open for the lifetime of the callout and that is a "no-no" in a multitenant environment.

---

</p>
</details>

<details>
<summary> <b> <em> &nbsp; &nbsp; Operations you want to run in their own thread, </em> </b> </summary> 
<p>

---

when time permits such as some sort of resource-intensive calculation or processing of records.

---

</p>
</details>

<details>
<summary> <b> <em> &nbsp; &nbsp; Isolating DML operations on different sObject types to prevent the mixed DML error. </em> </b> </summary> 
<p>

---

This is somewhat of an edge-case but you may occasionally run across this issue. See [sObjects That Cannot Be Used Together in DML Operations](https://developer.salesforce.com/docs/atlas.en-us.224.0.apexcode.meta/apexcode/apex_dml_non_mix_sobjects.htm?_ga=2.211739987.738253428.1664772222-1022251765.1662354198) for more details.

---

</p>
</details>


<br/>


### future method example
```apex

public class SMSUtils {
    // Call async from triggers, etc, where callouts are not permitted.
    @future(callout=true)
    public static void sendSMSAsync(String fromNbr, String toNbr, String m) {
        String results = sendSMS(fromNbr, toNbr, m);
        System.debug(results);
    }
    // Call from controllers, etc, for immediate processing
    public static String sendSMS(String fromNbr, String toNbr, String m) {
        // Calling 'send' will result in a callout
        String results = SmsMessage.send(fromNbr, toNbr, m);
        insert new SMS_Log__c(to__c=toNbr, from__c=fromNbr, msg__c=results);
        return results;
    }
}

```

<br/>

> ***💡 Tip:*** The reason why **objects can’t be passed as arguments to future methods** is because the object can change between the time you call the method and the time that it actually executes. Remember, future methods are executed when system resources become available. In this case, the future method may have an old object value when it actually executes, which can cause all sorts of bad things to happen.


<br/>


### Best Practices
<details> 
<summary> <b> &nbsp; &nbsp; avoid design patterns that add large numbers of future requests over a short period of time.   </b> </summary>
<p>

---

- Since every future method invocation adds one request to the asynchronous queue, avoid design patterns that add large numbers of future requests over a short period of time. If your design has the potential to add 2000 or more requests at a time, requests could get delayed due to flow control. Here are some best practices you want to keep in mind:
- If more than 2,000 unprocessed requests from a single organization are in the queue, any additional requests from the same organization will be delayed while the queue handles requests from other organizations.

---

</p>
</details>

- **Ensure that future methods execute as fast as possible.**
- If using Web service callouts, try to bundle all callouts together from the same future method, rather than using a separate future method for each callout.

<details> 
<summary> <b> &nbsp; &nbsp; Consider using Batch Apex instead of future methods to process large number of records asynchronously. </b> </summary>
<p>

---

This is more efficient than creating a future request for each record.

---

</p>
</details>

<br/>


### Things to Remember
- **Methods with the future annotation must be static methods, and can only return a void type.**
- **objects can’t be passed as arguments to future methods.** The specified parameters must be primitive data types, arrays of primitive data types, or collections of primitive data types; 
- Future methods won’t necessarily execute in the same order they are called. In addition, it’s possible that two future methods could run concurrently, which could result in **record locking** if the two methods were updating the same record.
- Future methods can’t be used in Visualforce controllers in getMethodName(), setMethodName(), nor in the constructor.
- You can’t call a future method from a future method. Nor can you invoke a trigger that calls a future method while running a future method. See the link in the Resources for preventing recursive future method calls.
- The getContent() and getContentAsPDF() methods can’t be used in methods with the future annotation.
- there is a limit of **50 future calls per Apex invocation.**
- The maximum number of **future method invocations per a 24-hour period is 250,000** or the number of ``salesforce user licenses`` or ``App Subscription user licences`` in your org multiplied by 200, whichever is greater. 


<br/>


<br/>

<div align="center">

``----``

</div>

<br/>


<br/>



## Batch Apex
Batch Apex is used to run large jobs (think thousands or millions of records!) that would exceed normal processing limits. Using Batch Apex, you can process records asynchronously in batches (hence the name, “Batch Apex”) to stay within platform limits. If you have a lot of records to process, for example, data cleansing or archiving, Batch Apex is probably your best solution.

> **💡 Tip:** Here’s how Batch Apex works under the hood. Let’s say you want to process 1 million records using Batch Apex. The execution logic of the batch class is called once for each batch of records you are processing. Each time you invoke a batch class, the job is placed on the Apex job queue and is executed as a discrete transaction. 

***This functionality has two awesome advantages:***
- Every transaction starts with a new set of governor limits, making it easier to ensure that your code stays within the governor execution limits.
- If one batch fails to process successfully, all other successful batch transactions aren’t rolled back.


<br/>


### Batch Apex Syntax
To write a Batch Apex class, your class must implement the ``Database.Batchable`` interface and include the following three methods:

**1. start**
- Used to collect the records or objects to be passed to the interface method execute for processing. 
- This method is called once at the beginning of a Batch Apex job and returns either a Database.QueryLocator object or an Iterable that contains the records or objects passed to the job.

- Most of the time a QueryLocator does the trick with a simple SOQL query to generate the scope of objects in the batch job. But if you need to do something crazy like loop through the results of an API call or pre-process records before being passed to the execute method, you might want to check out the Custom Iterators link in the Resources section.

- With the QueryLocator object, the governor limit for the total number of records retrieved by SOQL queries is bypassed and you can query up to 50 million records. However, with an Iterable, the governor limit for the total number of records retrieved by SOQL queries is still enforced.


**2. execute**
- Performs the actual processing for each chunk or “batch” of data passed to the method. 
- ***The default batch size is 200 records. Batches of records are not guaranteed to execute in the order they are received from the start method.***

- ***This method takes the following:***
  - A reference to the Database.BatchableContext object.  
  - A list of sObjects, such as ``List<sObject>``, or a list of parameterized types. If you are using a ``Database.QueryLocator``, use the returned list.


**3. finish**
- Used to execute post-processing operations (for example, sending an email) and is called once after all batches are processed.


***syntax:***
```apex
public class MyBatchClass implements Database.Batchable<sObject> {
    public (Database.QueryLocator | Iterable<sObject>) start(Database.BatchableContext bc) {
        // collect the batches of records or objects to be passed to execute
    }
    public void execute(Database.BatchableContext bc, List<P> records){
        // process each batch of records
    }
    public void finish(Database.BatchableContext bc){
        // execute any post-processing operations
    }
}
```

### Invoking a Batch Apex
```apex
  MyBatchClass myBatchObject = new MyBatchClass();
  Id batchId = Database.executeBatch(myBatchObject);
```


<br/>

### Best Practices
As with future methods, there are a few things you want to keep in mind when using Batch Apex. To ensure fast execution of batch jobs, minimize Web service callout times and tune queries used in your batch Apex code. The longer the batch job executes, the more likely other queued jobs are delayed when many jobs are in the queue. Best practices include:
- Only use Batch Apex if you have more than one batch of records. If you don't have enough records to run more than one batch, you are probably better off using Queueable Apex.
- Tune any SOQL query to gather the records to execute as quickly as possible.
- Minimize the number of asynchronous requests created to minimize the chance of delays.
- Use extreme care if you are planning to invoke a batch job from a trigger. You must be able to guarantee that the trigger won’t add more batch jobs than the limit.


<br/>


<br/>


## Queable Apex:

***Queueable Apex is a great new tool but there are a few things to watch out for:***

- The execution of a queued job counts once against the shared limit for asynchronous Apex method executions.
- You can add up to 50 jobs to the queue with System.enqueueJob in a single transaction.
- When chaining jobs, you can add only one job from an executing job with System.enqueueJob, which means that only one child job can exist for each parent queueable job. Starting multiple child jobs from the same queueable job is a no-no.
- No limit is enforced on the depth of chained jobs, which means that you can chain one job to another job and repeat this process with each new child job to link it to a new child job. However, for Developer Edition and Trial orgs, the maximum stack depth for chained jobs is 5, which means that you can chain jobs four times and the maximum number of jobs in the chain is 5, including the initial parent queueable job.





<br/>


<br/>


## Scheduled Apex:
***Scheduled Apex has a number of items you need to be aware of, but in general:***
- You can only have 100 scheduled Apex jobs at one time and there are maximum number of scheduled Apex executions per a 24-hour period. See Execution Governors and Limits in the Resources section for details.
- Use extreme care if you’re planning to schedule a class from a trigger. You must be able to guarantee that the trigger won’t add more scheduled jobs than the limit.
- Synchronous Web service callouts are not supported from scheduled Apex. To be able to make callouts, make an asynchronous callout by placing the callout in a method annotated with @future(callout=true) and call this method from scheduled Apex. However, if your scheduled Apex executes a batch job, callouts are supported from the batch class.










<br/>


<br/>


<br/>


<br/>


<br/>


<br/>


<br/>


<br/>


<br/>


--- 
***references:***

1. Asynchronous apex : https://trailhead.salesforce.com/content/learn/modules/asynchronous_apex/
2. custom iterators : https://developer.salesforce.com/docs/atlas.en-us.224.0.apexcode.meta/apexcode/apex_classes_iterable.htm
3. Queuable]Apex : https://trailhead.salesforce.com/content/learn/modules/asynchronous_apex/async_apex_queueable
4. Schedulable Apex : https://trailhead.salesforce.com/content/learn/modules/asynchronous_apex/async_apex_scheduled


<br/>


---
