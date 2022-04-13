# Apex Triggers
- Triggers can be defined for standard objects, custom objects, and some standard child objects. 
- Triggers are active by default when created. 
- Salesforce automatically fires active triggers when the specified database events occur.

- ***The events you can specify are:***
  - ``before insert``
  - ``before update``
  - ``before delete``
  - ``after insert``
  - ``after update``
  - ``after delete``
  - ``after undelete``

<br/>

<details>
<summary><b><em> Tip 💡: When to use Triggers ? </em></b></summary>
<p>

---
- Use triggers to perform tasks that can’t be done by using the point-and-click tools in the Salesforce user interface. 
- For example, if validating a field value or updating a field on a record, use validation rules and workflow rules instead.

---  
  
<br/>  
  
</p>
</details>

<br/>


## Trigger Syntax
```apex
trigger TriggerName on ObjectName (trigger_events) {
   //code_block
}
```

## Types of Triggers 

***There are two types of triggers.***

- ***Before triggers*** are used to update or validate record values before they’re saved to the database.
  - ``before insert``
  - ``before update``
  - ``before delete``
- ***After triggers*** are used to access field values that are set by the system (such as a record's Id or LastModifiedDate field), and to affect changes in other records. ***``The records that fire the after trigger are read-only.``***
  - ``after insert``
  - ``after update``
  - ``after delete``
  - ``after undelete``


<details>
<summary><b><em> example: </em></b></summary>  
<p>

---  
```apex
trigger ContextExampleTrigger on Account (before insert, after insert, after delete) {
    if (Trigger.isInsert) {
        if (Trigger.isBefore) {
            // Process before insert
        } else if (Trigger.isAfter) {
            // Process after insert
        }        
    }
    else if (Trigger.isDelete) {
        // Process after delete
    }
}
```
---
</p>
</details>


<br/>


## Context Variables
***To access the records that caused the trigger to fire, use context variables.*** 
- For example, **``Trigger.New``** contains all the records that were inserted in insert or update triggers. 
- **``Trigger.Old``** provides the old version of sObjects before they were updated in update triggers, or a list of deleted sObjects in delete triggers. 


- Triggers can fire when one record is inserted, or when many records are inserted in bulk via the API or Apex. 
- Therefore, context variables, such as Trigger.New, can contain only one record or multiple records. 
- You can iterate over Trigger.New to get each individual sObject.

<details>
<summary><b><em> example: </em></b></summary>  
<p>
  
---  
```apex
trigger HelloWorldTrigger on Account (before insert) {
    for(Account a : Trigger.New) {
        a.Description = 'New description';
    }   
}  
```
---
</p>
</details>

<br/>

### List of Context Variables
<table>
<thead>
<tr>
<th>Variable</th>
<th>Usage</th>
</tr>
</thead>
<tbody>
<tr>
<td>isExecuting</td>
<td>Returns true if the current context for the Apex code is a trigger, not a Visualforce page, a Web service, or an executeanonymous() API call.</td>
</tr>
<tr>
<td>isInsert</td>
<td>Returns true if this trigger was fired due to an insert operation, from the Salesforce user interface, Apex, or the API.</td>
</tr>
<tr>
<td>isUpdate</td>
<td>Returns true if this trigger was fired due to an update operation, from the Salesforce user interface, Apex, or the API.</td>
</tr>
<tr>
<td>isDelete</td>
<td>Returns true if this trigger was fired due to a delete operation, from the Salesforce user interface, Apex, or the API.</td>
</tr>
<tr>
<td>isBefore</td>
<td>Returns true if this trigger was fired before any record was saved.</td>
</tr>
<tr>
<td>isAfter</td>
<td>Returns true if this trigger was fired after all records were saved.</td>
</tr>
<tr>
<td>isUndelete</td>
<td>Returns true if this trigger was fired after a record is recovered from the Recycle Bin. This recovery can occur after an undelete operation from the Salesforce user interface, Apex, or the API.</td>
</tr>
<tr>
<td>new</td>
<td>Returns a list of the new versions of the sObject records. This sObject list is only available in <b>insert, update, and undelete triggers, and the records can only be modified in before triggers.</b></td>
</tr>
<tr>
<td>newMap</td>
<td>A map of IDs to the new versions of the sObject records.This map is only available in <b>before update, after insert, after update, and after undelete triggers.</b></td>
</tr>
<tr>
<td>old</td>
<td>Returns a list of the old versions of the sObject records.This sObject list is only available in <b>update and delete triggers.</b></td>
</tr>
<tr>
<td>oldMap</td>
<td>A map of IDs to the old versions of the sObject records.This map is only available in <b>update and delete triggers.</b></td>
</tr>
<tr>
<td>operationType</td>
<td>Returns an enum of type System.TriggerOperation corresponding to the current operation. Possible values of the System.TriggerOperation enum are: BEFORE_INSERT, BEFORE_UPDATE, BEFORE_DELETE,AFTER_INSERT, AFTER_UPDATE, AFTER_DELETE, and AFTER_UNDELETE. If you vary your programming logic based on different trigger types, consider using the switch statement with different permutations of unique trigger execution enum states.</td>
</tr>
<tr>
<td>size</td>
<td>The total number of records in a trigger invocation, both old and new.</td>
</tr>
</tbody>
</table>

<br/>


## Handler class for Trigger
<details>
<summary><b><em>Tip: 💡 : it is recommended to Organise code into ``2 separate files`` ``1 for Trigger`` and ``1 HandlerClass for Trigger``</b></em>.
</summary>
<p>
  
--- 
  
***example:***
  
<table>
<tr>
<td>
  
***Trigger***  
</td>
<td>
  
***Handler Class***
</td>  
</tr>  

<tr>
<td>

<b><em>
```apex
trigger EmployeeTrigger on Employee__c (before delete) {
	
    if(Trigger.isDelete){
        if(Trigger.isBefore){
            EmployeeTriggerHandler.deleteEmployee(Trigger.Old);
        }
    }
}  
```  
</em></b>
  
</td>
<td>

<b><em>  
```apex  
public class EmployeeTriggerHandler {
    // Employee record cannot be deleted if active is true.
    public static void deleteEmployee(List<Employee__c> empList){
        List<employee__c> emp2Delete = new List<employee__c>();
        for(Employee__c emp: empList){
            if(emp.Active__c == true){
                emp.addError('This Employee is Active. Hence, can\'t be deleted.');
            }
        }
    }
}  
```  
</em></b>
  
</td>  
</tr>  
  
</table>

---  
  
</p>
</details>


<br/>


## Using Trigger Exceptions
- You sometimes need to add restrictions on certain database operations, such as preventing records from being saved when certain conditions are met. 
- To prevent saving records in a trigger, call the ``addError()`` method on the sObject in question. 
- The ``addError()`` method throws a fatal error inside a trigger. 
- The error message is displayed in the user interface and is logged.

<details>
<summary><b><em> example: </em></b></summary>  
<p>
  
---  
```apex
trigger AccountDeletion on Account (before delete) {
   
    // Prevent the deletion of accounts if they have related opportunities.
    for (Account a : [SELECT Id FROM Account
                     WHERE Id IN (SELECT AccountId FROM Opportunity) AND
                     Id IN :Trigger.old]) {
        Trigger.oldMap.get(a.Id).addError(
            'Cannot delete account with related opportunities.');
    }
    
} 
```
---
</p>
</details>

- Calling ``addError()`` in a trigger causes the entire set of operations to roll back, except when bulk DML is called with partial success.
- If a DML statement in Apex spawned the trigger, any error rolls back the entire operation. However, the runtime engine still processes every record in the operation to compile a comprehensive list of errors.
- If a bulk DML call in the Lightning Platform API spawned the trigger, the runtime engine sets the bad records aside. The runtime engine then attempts a partial save of the records that did not generate errors.


<br/>


## Triggers and Callouts

- Apex calls to external Web services are referred to as callouts. 
- For example, you can make a callout to a stock quote service to get the latest quotes. When making a callout from a trigger, the callout must be done asynchronously so that the trigger process doesn’t block you from working while waiting for the external service's response.
- The asynchronous callout is made in a background process, and the response is received when the external service returns it.
- To make a callout from a trigger, call a class method that executes asynchronously. Such a method is called a future method and is annotated with **``@future(callout=true)``**.

<details>
<summary><b><em> example: </em></b></summary>  
<p>
  
---  
```apex
public class CalloutClass {
    @future(callout=true)
    public static void makeCallout() {
        HttpRequest request = new HttpRequest();
        // Set the endpoint URL.
        String endpoint = 'http://yourHost/yourService';
        request.setEndPoint(endpoint);
        // Set the HTTP verb to GET.
        request.setMethod('GET');
        // Send the HTTP request and get the response.
        HttpResponse response = new HTTP().send(request);
    }
}
```
```apex  
trigger CalloutTrigger on Account (before insert, before update) {
    CalloutClass.makeCallout();
}
```  
---
</p>
</details>














<br/>

<br/>

<br/>

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
1. [Apex Triggers](https://trailhead.salesforce.com/content/learn/modules/apex_triggers)



---
