# DML Statements

<details>
  <summary><b><em>insert</em></b>
</summary>
<p>

```apex
// Create the account sObject 
Account acct = new Account(Name='Acme', Phone='(415)555-1212', NumberOfEmployees=100);
// Insert the account by using DML
insert acct;  
``` 
</p>
</details> 

<details>
  <summary><b><em>update</em></b>
</summary>
<p>

```apex
// List to hold the new contacts to update
List<Contact> listToUpdate = new List<Contact>();
// Iterate through the list and add a title only
//   if the department is Finance
for(Contact con : conList) {
    if (con.Department == 'Finance') {
        con.Title = 'Financial analyst';
        // Add updated contact sObject to the list.
        listToUpdate.add(con);
    }
}
// Bulk update all contacts with one DML call
update listToUpdate;  
``` 
</p>
</details> 

<details>
  <summary><b><em>upsert</em></b>
</summary>
<p>

```apex
// Insert the Josh contact
Contact josh = new Contact(FirstName='Josh',LastName='Kaplan',Department='Finance');       
insert josh;
// Josh's record has been inserted
//   so the variable josh has now an ID
//   which will be used to match the records by upsert
josh.Description = 'Josh\'s record has been updated by the upsert operation.';
// Create the Kathy contact, but don't persist it in the database
Contact kathy = new Contact(FirstName='Kathy',LastName='Brown',Department='Technology');
// List to hold the new contacts to upsert
List<Contact> contacts = new List<Contact> { josh, kathy };
// Call upsert
upsert contacts;
// Result: Josh is updated and Kathy is created.  
``` 
</p>
</details> 

<details>
  <summary><b><em>delete</em></b>
</summary>
<p>

```apex
Contact[] contactsDel = [SELECT Id FROM Contact WHERE LastName='Smith']; 
delete contactsDel;  
``` 
</p>
</details>

<details>
  <summary><b><em>undelete</em></b>
</summary>
<p>

```apex
//Delete account records where Phone =’654321’. Also try undeleting records. [Anonymous Window]

public class point103 {
    public static void method(){
        List<account> accList = [select id,name from account where phone='654321'];
        
        delete accList;
    }
    public static void method2(){
        List<account> accList = [SELECT Id, Name FROM Account WHERE phone='654321' ALL ROWS]; 
        
        undelete accList;
    }
}

``` 
```apex
// undelete employees that were deleted	
List <employee__c> lst = [SELECT id,Account__c FROM Employee__c where IsDeleted=true ALL ROWS];
undelete lst;	
```	
	
</p>
</details>

<details>
  <summary><b><em>merge</em></b>
</summary>
<p>

```apex

/* Use merge when duplicate leads, contacts and accounts are there into one record, 
   others are deleted and related records are reparented. */
   
/* it can merge up to three records of the same object type into one of the records.
   It will then delete the other records and reparent any related records. */   

// add example 


``` 
</p>
</details>
  
  
<br/>

- Each DML statement accepts either a single sObject or a list (or array) of sObjects.
- List must not contain duplicate sObjects.
- always perform DML in bulk.
- Operating on a list of sObjects is a more efficient way for processing records.

<br/>

## what are governer limits in DML?
	
**In one execution of a program. there is a limit on &nbsp; *allowed.***
	
<b>	
	
```
	Number of SOQL queries: 100

	Number of query rows: 50000

	Number of SOSL queries: 20

	Number of DML statements: 150

	Number of Publish Immediate DML: 150

	Number of DML rows: 10000

	Maximum CPU time: 10000

	Maximum heap size: 6000000

	Number of callouts: 100

	Number of Email Invocations: 10

	Number of future calls: 50

	Number of queueable jobs added to the queue: 50

	Number of Mobile Apex push calls: 10
```

</b>
	
***we can check them at the end in logs:***
	
![image](https://user-images.githubusercontent.com/63545175/164376057-f411de1d-07a3-4781-a55d-3cad48f0c4f3.png)

	
***Tip 💡 : best Practice*** 
- **_Never Use DML inside a loop_.**
- **_Never Use SOQL inside a loop_.**

	
<br/>
	
<br/>
	
<br/>
	
	
# Methods of ``Database Class``

Apex contains the built-in Database class, which provides methods that perform DML operations.

- Database.insert()
- Database.update()
- Database.upsert()
- Database.delete()
- Database.undelete()
- Database.merge()
	
<br/>

<b> <em>
	
> Unlike DML statements, Database methods have an optional allOrNone parameter that allows you to specify whether the operation should partially succeed. 
> <br> When this parameter is set to false, if errors occur on a partial set of records, the successful records will be committed and errors will be returned for the failed records. Also, no exceptions are thrown with the partial success option.
> <br/> every method return list containing success or failure information of each record.

</em> </b>	

- **example**
	- ``Database.SaveResult results[] = Database.insert(recordList, false);``
	- ``Database.UpsertResult results [ ] = Database.upsert(recordList, false);``
	- ``Database.DeleteResult results [ ] = Database.delete(recordList, false);``
	

<br/>

Note: by default **allOrNone** parameter is true, hence these all are same:
```apex

  insert contactList; 
	// OR
	
  Database.insert(contactList) 
	// OR
	
  Database.insert(contactList, true);

```

all will throw an exceptions if a failure occurs.


<br/>

<br/>
  
<br/>
	
<br/>

<br/>
  
<br/>
  
---
***references:***
	
1.**apex database:** https://trailhead.salesforce.com/content/learn/modules/apex_database/apex_database_dml  
	
2.**governer limits:** https://developer.salesforce.com/docs/atlas.en-us.234.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_apexgov.htm

---
  
