## SOSL
- **Salesforce Object Search Language (SOSL)** is a Salesforce search language that is used to perform text searches in records. 
- Use SOSL to search fields across multiple standard and custom object records in Salesforce. 
- SOSL is similar to Apache Lucene.
- When SOSL is embedded in Apex, it is referred to as inline SOSL

***example:***
```apex
List<List<SObject>> searchList = [FIND 'SFDC' IN ALL FIELDS 
                                      RETURNING Account(Name), Contact(FirstName,LastName)];
```

<br/>

## Differences and Similarities Between SOQL and SOSL
- Like SOQL, SOSL allows you to search your organization’s records for specific information. 
- Unlike SOQL, which can only query one standard or custom object at a time, a single SOSL query can search all objects.

**SOQL and SOSL are two separate languages with different syntax. Each language has a distinct use case:**
- Use SOQL to retrieve records for a single object.
- Use SOSL to search fields across multiple objects. SOSL queries can search most text fields on an object.

<br/>


## executing SOSL in Query Editor
```
FIND {Wingo} IN ALL FIELDS RETURNING Account(Name), Contact(FirstName,LastName,Department)
```

> ***Note 💡:*** _The search query in the Query Editor and the API must be enclosed within curly brackets ({Wingo}). In contrast, in Apex the search query is enclosed within single quotes ('Wingo')._


<br/>

## SOSL Syntax
**SOSL allows you to specify the following search criteria:**
- Text expression (single word or a phrase) to search for
- Scope of fields to search
- List of objects and fields to retrieve
- Conditions for selecting rows in the source objects

<br/>

***This is the syntax of a basic SOSL query:***
```
  FIND 'SearchQuery' [IN SearchGroup] [RETURNING ObjectsAndFields]
```

- SearchQuery is the text to search for (a single word or a phrase). 
- **Text searches are case-insensitive.** For example, searching for ``Customer, customer, or CUSTOMER`` all return the same results.





??????????????? completed from below reference


<br/>

<br/>

<br/>

<br/>

<br/>

<br/>


---
***references:***

1. [apex database SOSL](https://trailhead.salesforce.com/en/content/learn/modules/apex_database/apex_database_sosl)
2. [SOQL & SOSL](https://developer.salesforce.com/docs/atlas.en-us.224.0.soql_sosl.meta/soql_sosl/)


---
