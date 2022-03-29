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

***example:***
```apex
SELECT Name,Phone 
FROM Account 
WHERE (Name = 'SFDC Computing' AND NumberOfEmployees>25)
ORDER BY Name
LIMIT 10
```


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





