# SOQL (Salesforce Object Query Language):

<!--
```apex
SELECT fieldList [subquery][...]
[TYPEOF typeOfField whenExpression[...] elseExpression END][...]
FROM objectType[,...] 
    [USING SCOPE filterScope]
[WHERE conditionExpression]
[WITH [DATA CATEGORY] filteringExpression]
[GROUP BY {fieldGroupByList|ROLLUP (fieldSubtotalGroupByList)|CUBE (fieldSubtotalGroupByList)} 
    [HAVING havingConditionExpression] ] 
[ORDER BY fieldOrderByList {ASC|DESC} [NULLS {FIRST|LAST}] ]
[LIMIT numberOfRowsToReturn]
[OFFSET numberOfRowsToSkip]
[FOR {VIEW  | REFERENCE}[,...] ]
      [ UPDATE {TRACKING|VIEWSTAT}[,...] ]
```
-->

***syntax:***

![example](https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/soql-for-admins/get-started-with-soql-queries/images/fc9bebc4207d1441a27d8cdaa11b4d6d_d-65-da-8-e-4-5253-4-bdf-a-23-c-917601911-ec-2.png)


<table>
<tr> 
<td width="400vw">
    
***clause:***    
</td>
<td>

***example:***
</td>
</tr>  
<tr> 
<td>
    
<details>
<summary><b><em> SELECT </em></b></summary>
<p>
    
```apex
// what fields of record   
```
![](https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/soql-for-admins/get-started-with-soql-queries/images/1ca7c9ee7641f4de3fc5de330ed8349c_754-b-81-a-2-4-e-40-475-f-adf-3-dc-1-ab-93464-ca.png)
</p>    
</details>  
    
<details>
<summary><b><em> FROM </em></b></summary>
<p>
    
```apex
// records FROM which object    
```
![](https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/soql-for-admins/get-started-with-soql-queries/images/a9cf39cadaa634c9454285de17e7d33f_9-e-4-f-96-ca-ff-2-c-49-f-0-902-c-50072-cb-58067.png)
</p>    
</details> 
    
<details>
<summary><b><em> WHERE </em></b></summary>
<p>
    
```apex
// what condition  
```
- The WHERE clause sets the conditions that a record must match to be selected and returned. 
- You can also define the WHERE clause to filter using more than one condition. 
- ***There are multiple ways to do this using three operators:*** 
    - <b>``AND``</b> : 
    ```
    WHERE FirstName = 'Stella' AND LastName = 'Pavlova'
    ```  
    - <b>``OR``</b> : 
    ```
    WHERE LastName = 'James' OR LastName = 'Barr'
    ```
    - <b>``IN``</b> :
    ```
    WHERE LastName IN ('James', 'Barr', 'Nedaerk', 'Forbes')
    ```
    ```
    WHERE Id IN (SELECT AccountId FROM Opportunity)
    ```
</p>    
</details> 

<details>
<summary><b><em> ORDER BY</em></b></summary>
<p>
    
```apex
// get in what ORDER
```
- **ASC** Returns results in ascending order
```
    ORDER BY Name ASC
```
- **DESC** Returns results in descending order
```
    ORDER BY Email DESC
```    
- Returns null records at the beginning (NULLS FIRST) or end (NULLS LAST)
```
   ORDER BY Email NULLS LAST 
```    
    
</p>    
</details> 
    
<details>
<summary><b><em> LIMIT </em></b></summary>
<p>
    
```apex
// how many records to get
```
example:
    
```
    SELECT Email, Name FROM Contact LIMIT 5
```    
</p>    
</details> 
    

   
</td>
<td>
    
```apex
SELECT Name,Phone 
FROM Account 
WHERE (Name = 'SFDC Computing' AND NumberOfEmployees>25)
ORDER BY Name
LIMIT 10
```
</td>
</tr>  
</table>    
    
    
- **The SELECT clause and the FROM clause are required.**    
- Other Clauses are Optional.
    
    
<br/>

# Create SOQL Queries in method in Apex Classes

### Soql to fetch record in a varible
```apex
Account oneAccountOnly = [SELECT Name,Phone FROM Account LIMIT 1];
```

<br/>

### Soql to make a list of records
```apex
Account[] accts = [SELECT Name,Phone FROM Account 
                   WHERE (Name='SFDC Computing' AND NumberOfEmployees>25)
                   ORDER BY Name
                   LIMIT 10];
```

<br/>

### soql with for loop
```apex
for (variable : [soql_query]) {
    code_block
}
```

<br/>


# Create Relationship Queries with Standard Objects:
***To get records for a:***
- **Child object**, and include fields from a related parent object, use a **child-to-parent** query.
- **Parent object**, and include fields from a related child object, use a **parent-to-child** query.

Note: ***Before we can decide which type of query to use, we need to know how our two objects, Contact and Account, are related. Which is the parent and which is the child?***

### ***Master Detail Relationship***
> ***A master-detail relationship is a one-to-many relationship. The master object (the parent) can have many detail objects (children), but each detail object (child) has only one master object (parent).***

<br/>

<br/>

## Important

***``Account is Parent Object and Contact is child Object``***

### Query related child object of parent object 
**``query id and name of contacts that are related to account``**
```soql
SELECT Id , Name , (SELECT Id, Name FROM Contacts)  FROM Account
```

### Query related Parent object of child object
**``query id and name of contact along with id of account they are related to``**

```soql
SELECT Id , Name , Account.Id  FROM Contact
```
```soql
SELECT Id , Name , AccountId  FROM Contact
```

<details>
<summary><b><em>Question: Why do we run sub query to get related contacts of an account ? </em></b></summary>
<p>
    
because a Parent can have many children, but a child can't have many parents. 
    
wait, what if a contact is related to more than one account? how to query all the related accounts of a contact??????????

<br/>

</p>
</details>

<br/>

### Query only those Account which have related contact
???

***``???``***

### Query records of a custom object
???

### Query records of a custom object that are related to another standard object
???

### Query records of a standard object that are related to another custom object
???

### query account that does not have related opportunity
```
[SELECT Id,Name FROM Account
                     WHERE Id NOT IN (SELECT AccountId FROM Opportunity)]
```




### get List of Related opportunities of current Account
```apex
for(Account acc: accList){
    if(acc.Phone != oldAccountMap.get(acc.Id).Phone){                
    // get List of Related opportunities of current Account
    List<Opportunity> relatedOppList = [SELECT Id , Phone__c FROM Opportunity Where AccountId=acc.Id];
    }
}

```





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
***resources:***

1. [soql-for-admins](https://trailhead.salesforce.com/en/content/learn/modules/soql-for-admins)
2. [SOQL & SOSL](https://developer.salesforce.com/docs/atlas.en-us.224.0.soql_sosl.meta/soql_sosl/)

---

