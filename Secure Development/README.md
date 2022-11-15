
# Apex Security and Sharing
- By default Apex classes have the ability to read and update all data within an organization.
- It’s important to enforce sharing rules, set object and field permissions, and protect against CRUD and FLS.
- Apex sharing rules determines the “execution context” under which your code executes.
  - **system mode** : i.e, with access privileges to many resources
  - **user mode** : in which the permissions, field-level security, and sharing rules of the current user are enforced.

<br/>

## Enforcing Sharing Rules
- Apex Developer need to ensure they don’t expose sensitive data that would be hidden from users by ``user permissions``, ``field-level security``, or ``organization-wide defaults``.

> Apex generally runs in system context. In system context, Apex code has access to all objects and fields—object permissions, field-level security, and sharing rules aren’t applied for the current user.

- The class must be declared with the ``without sharing`` keyword in order to ensure that sharing rules are not enforced.
- it can be specified that particular Apex class should enforce the sharing rules that apply to the current user. 

***There are three keywords for sharing rules.*** 

### With Sharing
- The ``with sharing`` keyword lets you specify that the sharing rules for the current user are considered for the class. 
- You have to explicitly set this keyword for the class because Apex code runs in system context. 

### Without Sharing
- The ``without sharing`` keywords ensures in a class that the sharing rules for the current user are not enforced. 
- For example, it can be used to explicitly turn off sharing rule enforcement when a class is called from another class that is declared using with sharing.

### Inherited Sharing
- use the ``inherited sharing`` keyword on an Apex class to run the class in the sharing mode of the class that called it.
- ``inherited sharing`` enables to pass AppExchange Security Review and ensure that your privileged Apex code is not used in unexpected or insecure ways.

> The only exception to the way Apex runs in system context, is Apex code executed with the ``executeAnonymous`` call and Chatter in Apex. 
> <br/> The ``executeAnonymous`` call always executes using the full permissions of the current user. 

***An Apex class with ``inherited sharing`` runs as ``with sharing`` when used as:***
  - An Aura component controller
  - A Visualforce controller
  - An Apex REST service
  - Any other entry point to an Apex transaction

> **Note:** In an APEX transaction, an omitted sharing declaration runs as ``without sharing``. 
> <br/> However, ``inherited sharing`` ensures that the default is to run as ``with sharing``.
> <br/> A class declared as ``inherited sharing`` runs as ``without sharing`` only when explicitly called from a ``without sharing`` context.

> **Note:** sharing setting of the class where the method is defined is applied, not of the class where the method is called. 
> <br/> _example:_ if a method is defined in a class declared with with sharing is called by a class declared with without sharing, the method executes with sharing rules enforced.


<br/>


<br/>


## Enforcing Object and Field Permissions
- Apex doesn't enforce object-level and field-level permissions by default, they can be enforced in **SOQL queries** by using the ``WITH SECURITY_ENFORCED`` clause.
- Schema object can be used to check if the current user has access to:
  - **isUpdateable()**: ``if (Schema.sObjectType.Contact.fields.Email.isUpdateable()) { // Update contact email address }``
  - **isCreateable()**: ``if (Schema.sObjectType.Contact.fields.Email.isCreateable()) {  // Create new contact }``
  - **isAccessible()**: ``if (Schema.sObjectType.Contact.fields.Email.isAccessible()) {  Contact c = [SELECT Email FROM Contact WHERE Id= :Id]; }``
  - **isDeletable()**: ``if (Schema.sObjectType.Contact.isDeletable()) {  // Delete contact }``

> Sharing rules are distinct from object-level and field-level permissions and they can coexist.
> <br/> the verification of object and field-level permissions is performed in addition to the sharing rules that are in effect.
> <br/> Sometimes, the access level granted by a sharing rule could conflict with an object-level or field-level permission.

<br/>

### Field-Level Security ????
Field-level security (FLS) is configured similarly to CRUD but lets administrators define the profiles that can see and write to most fields of standard and custom objects.

- ``stripInaccessible`` method is used to enforce field- and object-level data protection. It strips the fields and relationship fields from query and subquery results that the user can’t access.
-  The [stripInaccessible](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_class_System_Security.htm?&_ga=2.33828961.1591605527.1668333327-1022251765.1662354198#topic-title) method checks the source records for fields that don’t meet field-level security checks for the current user.
- The method creates a return list of sObjects that is identical to the source records, except that the fields that are inaccessible to the current user are removed. 

> **Note:** The ID field is never stripped by the stripInaccessible method to avoid issues when performing DML on the result.


<br/>


<br/>


## Prevention from SOQL injection 
- SOQL injection occurs when an attacker modifies the structure of the query. 
- Queries that use variable in WHERE clouse are prone to this vulnerablity.

***example:***
```apex
String query = 'SELECT Id, Name, Title__c FROM Books';
String whereClause = 'Title__c like \'%'+textualTitle+'%\' ';
List<Books> whereclause_records = database.query(query+' where '+whereClause);
```
> The reason why this works is because the user input is concatenated into the SOQL query without any validation

### Solution 1: Static Query and Bind Variables

<table>
<tr>
<td>

Wrong  
</td>
<td>  

Right  
</td>  
</tr>
<tr>
<td>

```SOQL
String query = ‘select id from contact where firstname =\’’+var+’\’’;
queryResult = Database.execute(query);  
```  
</td>
<td>  

```SOQL
queryResult = [select id from contact where firstname =:var]
```  
</td>  
</tr>  
</table>  

> make sure the user input values are valid and never escape boundary values that your usecase has for a functionality.

  

### Solution 2: Typecasting User Input
- By casting all variables as strings, user input can drift outside of expectation.
- By typecasting variables as integers or Booleans, when applicable, erroneous user input is not permitted.

<table>
<tr>
<td>
  
Wrong Code  
</td>
<td>  

Right Code  
</td>  
</tr>  
<tr>
<td>

***example:***  
  
```apex
whereClause+='Age__c >'+textualAge+'';
whereclause_records = database.query(query+' where '+whereClause);
```
  
***If user Inputs:***
  
- ``1 limit 1`` instead of interger value for age.
  
***result:***
  
```apex  
‘Select Name, Role__c, Title__c, Age__c from Personnel__c where Age__c > 1 limit 1’
```  
</td>
<td>

***example:***  
  
```apex
whereClause+='Age__c >'+string.valueOf(textualAge)+'';
whereclause_records = database.query(query+' where '+whereClause);
```
  
***If user Inputs:***
  
- ``1 limit 1``
  
***result:***
  
- **``ERROR:``** since “1 limit 1” is not considered an integer, so the SOQL injection is prevented.
  
</td>  
</tr>
</table>



### Solution 3: Escaping Single Quotes
<table>
<tr>
<td>
  
Wrong Code  
</td>
<td>  

Right Code  
</td>  
</tr>  
<tr>
<td>

***example:***  
  
```apex
String query = 'SELECT Id, Name, Title__c FROM Books';
String whereClause = 'Title__c like \'%'+textualTitle+'%\' ';
List<Books> whereclause_records = database.query(query+' where '+whereClause);
```
  
***If user Inputs:***
  
- ``%' and Performance_rating__c<2 and name like'%`` 
  
***result:***

- He will be able to midify query according to him. 
  
  
</td>
<td>

***example:***  
  
```apex
String query = 'SELECT Id, Name, Title__c FROM Books';
String whereClause = 'Title__c like \'%'+String.escapeSingleQuotes(textualTitle)+'%\' ';
List<Books> whereclause_records = database.query(query+' where '+whereClause);
```
  
***If user Inputs:***
  
- ``%' and Performance_rating__c<2 and name like'%`` 
  
***result:***
  
- user-provided single quote will be treated as data rather than code.
  
</td>  
</tr>
</table>


### Solution 4: Allowlisting
- Create a list of all values that the user is allowed to supply. If the user enters anything else, you reject the response. 

### Solution 5: Replace Unwanted Characters

***example:***

```apex
String query = 'select id from user where isActive='+var.replaceAll('[^\\w]','');
```



<br/>


<br/>


## Mitigate Cross-Site Request Forgery
- CSRF is a common web application vulnerability where a malicious application causes a client system to perform an unwanted action on a trusted site for which the client system is currently authenticated. 
- It requires the targeted user to visit the attack page while authenticated with the targeted service, which often requires coordinated deception on the part of the attacker (this is most commonly seen in phishing campaigns).
- For this attack to succeed, the attacker had to know the parameters name and their associated values.

### Prevention (use random tokens)
- Consider a slightly version of the page that has two required URL parameters: userId and token.
- for attack to work, the attacker again has to correctly guess values for both parameters.
- what if you made the token parameter value a random, unique value that changed on every request? This would make it impossible for an attacker to guess the current value, hence preventing the attack.

***Note:(required implementation in server)***
- All sensitive state-changing requests (anything performing database operations) must include the token.
- The token must be unique to the request or user’s session.
- The token must be difficult to predict (long and random).
- The token must be validated by the server to ensure the request originated from the intended user.


<br/>


<br/>


<br/>


<br/>


<br/>


<br/>


---

***references:***
- [Secure Server-Side Development | Write Secure Apex Controllers](https://trailhead.salesforce.com/content/learn/modules/secure-serverside-development/write-secure-apex-controllers?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-platform-developer-i-credential) ????

- [Secure Server-Side Development | Mitigate SOQL Injection](https://trailhead.salesforce.com/content/learn/modules/secure-serverside-development/mitigate-soql-injection?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-platform-developer-i-credential)

- [Secure Server-Side Development | Mitigate Cross-Site Request Forgery](https://trailhead.salesforce.com/content/learn/modules/secure-serverside-development/mitigate-crosssite-request-forgery?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-platform-developer-i-credential)
