
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

### Field-Level Security
Field-level security (FLS) is configured similarly to CRUD but lets administrators define the profiles that can see and write to most fields of standard and custom objects.

- ``stripInaccessible`` method is used to enforce field- and object-level data protection. It strips the fields and relationship fields from query and subquery results that the user can’t access.

> **Note:** The ID field is never stripped by the stripInaccessible method to avoid issues when performing DML on the result.

<br/>


<br/>


<br/>


<br/>


<br/>


<br/>


---

***references:***
- [Secure Server-Side Development | Write Secure Apex Controllers](https://trailhead.salesforce.com/content/learn/modules/secure-serverside-development/write-secure-apex-controllers?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-platform-developer-i-credential) ????



