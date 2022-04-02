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
</p>    
</details>  
    
<details>
<summary><b><em> FROM </em></b></summary>
<p>
    
```apex
// records FROM which object    
```
</p>    
</details> 
    
<details>
<summary><b><em> WHERE </em></b></summary>
<p>
    
```apex
// what condition  
```
</p>    
</details> 

<details>
<summary><b><em> ORDER </em></b></summary>
<p>
    
```apex
// get in what ORDER
```
</p>    
</details> 
    
<details>
<summary><b><em> LIMIT </em></b></summary>
<p>
    
```apex
// how many records to get
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
    

<br/>

## Soql with a varible
```apex
Account oneAccountOnly = [SELECT Name,Phone FROM Account LIMIT 1];
```

<br/>

## Soql with a list
```apex
Account[] accts = [SELECT Name,Phone FROM Account 
                   WHERE (Name='SFDC Computing' AND NumberOfEmployees>25)
                   ORDER BY Name
                   LIMIT 10];
```

<br/>

## soql with for loop
```apex
for (variable : [soql_query]) {
    code_block
}
```

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

### 

