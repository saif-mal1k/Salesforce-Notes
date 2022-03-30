# SOQL (Salesforce Object Query Language):

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

<table>
<tr> 
<td width="400vw">
    
***Structure:***    
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





