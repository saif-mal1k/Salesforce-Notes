
- DML operations can be performed on max 10,000 records in a single transaction.
- there can be 150 DML statements per apex transaction.
- there can be 100 SOQL statements per synchrornous apex transaction, & 200 for asynchronous transcation.
- there can be max 20 SOSL statements per apex transaction.
- there can be max 50000 records retrieved using a single SOQL query.
- there can be max 2000 records retrieved using a single SOSL query. 

- in case of batch apex:
	- the apex governer limits are reset for each iteration of the execute() method
	- the apex governer limits might be higher due to the asynchronous nature of the transaction
  
  
  
  
  

<br/>

<br/>

<br/>

<br/>

<br/>



---
***references:***
- [Apex Transactions and Governor Limits](https://developer.salesforce.com/docs/atlas.en-us.210.0.apexcode.meta/apexcode/apex_limits_intro.htm) ????





