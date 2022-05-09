
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


## Future method

### Future methods are typically used for:
- ***Callouts to external Web services.*** If you are making callouts from a trigger or after performing a DML operation, you must use a future or queueable method. A callout in a trigger would hold the database connection open for the lifetime of the callout and that is a "no-no" in a multitenant environment.
- ***Operations you want to run in their own thread,*** when time permits such as some sort of resource-intensive calculation or processing of records.
- ***Isolating DML operations on different sObject types to prevent the mixed DML error.*** This is somewhat of an edge-case but you may occasionally run across this issue. See sObjects That Cannot Be Used Together in DML Operations for more details.


<br/>


### future method syntax
```apex
public class SomeClass {
  @future
  public static void someFutureMethod(List<Id> recordIds) {
    List<Account> accounts = [Select Id, Name from Account Where Id IN :recordIds];
    // process account records to do awesome stuff
  }
}
```

<br/>

> ***💡 Tip:*** The reason why objects can’t be passed as arguments to future methods is because the object can change between the time you call the method and the time that it actually executes. Remember, future methods are executed when system resources become available. In this case, the future method may have an old object value when it actually executes, which can cause all sorts of bad things to happen.


<br/>


### Best Practices
Since every future method invocation adds one request to the asynchronous queue, avoid design patterns that add large numbers of future requests over a short period of time. If your design has the potential to add 2000 or more requests at a time, requests could get delayed due to flow control. Here are some best practices you want to keep in mind:
- Ensure that future methods execute as fast as possible.
- If using Web service callouts, try to bundle all callouts together from the same future method, rather than using a separate future method for each callout.
- Conduct thorough testing at scale. Test that a trigger enqueuing the @future calls is able to handle a trigger collection of 200 records. This helps determine if delays - may occur given the design at current and future volumes.
- Consider using Batch Apex instead of future methods to process large number of records asynchronously. This is more efficient than creating a future request for each record.


<br/>


### Things to Remember
Future methods are a great tool, but with great power comes great responsibility. Here are some things to keep in mind when using them:
- Methods with the future annotation must be static methods, and can only return a void type.
- The specified parameters must be primitive data types, arrays of primitive data types, or collections of primitive data types; future methods can’t take objects as arguments.
- Future methods won’t necessarily execute in the same order they are called. In addition, it’s possible that two future methods could run concurrently, which could result in record locking if the two methods were updating the same record.
- Future methods can’t be used in Visualforce controllers in getMethodName(), setMethodName(), nor in the constructor.
- You can’t call a future method from a future method. Nor can you invoke a trigger that calls a future method while running a future method. See the link in the Resources for preventing recursive future method calls.
- The getContent() and getContentAsPDF() methods can’t be used in methods with the future annotation.
- You’re limited to 50 future calls per Apex invocation, and there’s an additional limit on the number of calls in a 24-hour period. For more information on limits, see the link below.


<br/>


<br/>



## Batch Apex
Batch Apex is used to run large jobs (think thousands or millions of records!) that would exceed normal processing limits. Using Batch Apex, you can process records asynchronously in batches (hence the name, “Batch Apex”) to stay within platform limits. If you have a lot of records to process, for example, data cleansing or archiving, Batch Apex is probably your best solution.

> **💡 Tip:** Here’s how Batch Apex works under the hood. Let’s say you want to process 1 million records using Batch Apex. The execution logic of the batch class is called once for each batch of records you are processing. Each time you invoke a batch class, the job is placed on the Apex job queue and is executed as a discrete transaction. 

***This functionality has two awesome advantages:***
- Every transaction starts with a new set of governor limits, making it easier to ensure that your code stays within the governor execution limits.
- If one batch fails to process successfully, all other successful batch transactions aren’t rolled back.





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



<br/>


---
