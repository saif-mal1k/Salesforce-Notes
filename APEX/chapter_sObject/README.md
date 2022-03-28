# sObjects
- Because Apex is tightly integrated with the database, you can access Salesforce records and their fields directly from Apex. 
- Every record in Salesforce is natively represented as an sObject in Apex. 
- For example, the Acme account record corresponds to an Account sObject in Apex. 
- The fields of the Acme record that you can view and modify in the user interface can be read and modified directly on the sObject as well.


***The following table lists some populated fields of the Acme account example record.***

| Account Field |	Value |
|---------------|-------|
| Id |	001D000000JlfXe |
| Name |	Acme |
| Phone |	(415)555-1212 |
| NumberOfEmployees |	100 |

- The Account sObject is an abstraction of the account record and holds the account field information in memory as an object.
- Standard and custom object records in Salesforce map to their sObject types in Apex. example:
  - Account
  - Contact
  - Lead
  - Opportunity
- If you’ve added custom objects in your organization, use the API names of the custom objects in Apex. 
- For example, a custom object called Merchandise corresponds to the Merchandise__c sObject in Apex.


<br/> 

***Create sObject Variables:***
```apex
  Account acct = new Account();
  
  // the fasttest way to add fields is to specify.
  Account acct = new Account(Name='Acme', Phone='(415)555-1212', NumberOfEmployees=100);
  
  // another way to add fields
  Account acct = new Account();
  acct.Name = 'Acme';
  acct.Phone = '(415)555-1212';
  acct.NumberOfEmployees = 100;
```


***Find Object and Field Names:***
- For custom objects, look up the object and field API names in your org. 
- From Setup, click the Object Manager tab to the right of the Home tab, and then click your object’s name.


<br/>

<br/>

# Generic sObject Data Type
- Typically, you use the specific sObject data type, such as Account for a standard object or Book__c for a custom object called Book, when working with sObjects. 
- However, when you don’t know the type of sObject your method is handling, you can use the generic sObject data type.
- In contrast, variables that are declared with the specific sObject data type can reference only the Salesforce records of the same type.
- Variables that are declared with the generic sObject data type can reference any Salesforce record, whether it is a standard or custom object record.

***example:***
```apex
  sObject sobj1 = new Account(Name='Trailhead');
  sObject sobj2 = new Book__c(Name='Workbook 1');
```

```apex
  // Cast a generic sObject to an Account
  Account acct = (Account)myGenericSObject;
  // Now, you can use the dot notation to access fields on Account
  String name = acct.Name;
  String phone = acct.Phone;
```

***Note: The fields of a generic sObject can be accessed only through the ``put()`` and ``get()`` methods.***


<br/>

<br/>

<br/>

---
***references:***
1. apex basics and database https://trailhead.salesforce.com/content/learn/modules/apex_database

---
