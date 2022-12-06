# types of objects
  - ***standard objects*** : _provided by salesforce._
      - Account - are the companies you’re doing business with.
      - Contacts - are the people who work at an Account.
      - Leads - are potential prospects.
      - Opportunities - are qualified leads that you’ve converted.
  - ***custom objects*** : _created by admin._

<br/>

***Every standard and custom object has fields attached to it.***

<table class="featureTable sort_table">
          <thead align="left" class="thead sorted">
            <tr>
              <th id="d590424e294" scope="col">Field Type</th>
              <th id="d590424e297" scope="col">What is it?</th>
              <th id="d590424e300" scope="col">Can I get an example?</th>
            </tr>
          </thead>
          <tbody class="tbody">
            <tr>
              <td>Identity</td>
              <td>A 15-character, case-sensitive field that’s automatically generated for every record. You can find a record’s ID in its URL.</td>
              <td>An account ID looks like <span>0015000000Gv7qJ</span>.</td>
            </tr>
            <tr>
              <td>System</td>
              <td>Read-only fields that provide information about a record from the system, like when the record was created or when it was last changed.</td>
              <td>
<span>CreatedDate</span>, <span>LastModifiedById</span>, and <span>LastModifiedDate</span>.</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>All records need names so you can distinguish between them. You can use text names or auto-numbered names that automatically increment every time you create a record.</td>
              <td>A contact’s name can be Julie Bean. A support case’s name can be CA-1024.</td>
            </tr>
            <tr>
              <td>Custom</td>
              <td>Fields you create on standard or custom objects are called custom fields.</td>
              <td>You can create a custom field on the Contact object to store your contacts’ birthdays.</td>
            </tr>
          </tbody>
        </table>
        
        

<details>
<summary>  <b> limitations on object </b>  </summary>
<p>
  
---
  
![image](https://user-images.githubusercontent.com/63545175/193260103-49f0daae-6431-4a0c-8703-e2e81122092e.png)

---  
  
</p>  
</details>

<br/>

# types of fields
***standard fields***
  - when we create an object some fields (such as Name, CreatedById, OwnerId, LastModifiedById) are already created by salesforce those fields are known as standard fields.

***custom fields***
  - those fields that are created by admin are called custom fields.
  - these fields have ``__c`` in their field name.

***there are ``24`` data types for custom fields***

---

  - ``Auto Number``	A system-generated sequence number that uses a display format you define. The number is automatically incremented for each new record.
  - ``Formula``	A read-only field that derives its value from a formula expression you define. The formula field is updated when any of the source fields change.
  - ``Roll-Up Summary`` A read-only field that displays the sum, minimum, or maximum value of a field in a related list or the record count of all records listed in a related list. ***only available to master in a master-detail relationship.***

---

  - ``Lookup Relationship``	Creates a relationship that links this object to another object. The relationship field allows users to click on a lookup icon to select a value from a popup list. The other object is the source of the values in the list.
  - ``Master-Detail Relationship``	Creates a special type of parent-child relationship between this object (the child, or "detail") and another object (the parent, or "master") where:
    - The relationship field is required on all detail records.
    - The ownership and sharing of a detail record are determined by the master record.
    - When a user deletes the master record, all detail records are deleted.
    - You can create rollup summary fields on the master record to summarize the detail records.
    - The relationship field allows users to click on a lookup icon to select a value from a popup list. The master object is the source of the values in the list.
  - ``External Lookup Relationship``	Creates a relationship that links this object to an external object whose data is stored outside the Salesforce org.
 
---

  - ``Checkbox``	Allows users to select a True (checked) or False (unchecked) value.
  - ``Currency``	Allows users to enter a dollar or other currency amount and automatically formats the field as a currency amount. This can be useful if you export data to Excel or another spreadsheet.
  - ``Date``	Allows users to enter a date or pick a date from a popup calendar.
  - ``Date/Time``	Allows users to enter a date and time, or pick a date from a popup calendar. When users click a date in the pop-up, that date and the current time are entered into the Date/Time field.
  - ``Email``	Allows users to enter an email address, which is validated to ensure proper format. If this field is specified for a contact or lead, users can choose the address when clicking Send an Email. Note that custom email addresses cannot be used for mass emails.
  - ``Geolocation``	Allows users to define locations. Includes latitude and longitude components, and can be used to calculate distance.
  - ``Number``	Allows users to enter any number. Leading zeros are removed.
  - ``Percent``	Allows users to enter a percentage number, for example, '10' and automatically adds the percent sign to the number.
  - ``Phone``	Allows users to enter any phone number. Automatically formats it as a phone number.
  - ``Picklist``	Allows users to select a value from a list you define.
  - ``Picklist`` (Multi-Select)	Allows users to select multiple values from a list you define.
  - ``Text``	Allows users to enter any combination of letters and numbers.
  - ``Text Area``	Allows users to enter up to 255 characters on separate lines.
  - ``Text Area (Long)``	Allows users to enter up to 131,072 characters on separate lines.
  - ``Text Area (Rich)``	Allows users to enter formatted text, add images and links. Up to 131,072 characters on separate lines.
  - ``Text (Encrypted)`` 
Allows users to enter any combination of letters and numbers and store them in encrypted form.
  - ``Time``	Allows users to enter a local time. For example, "2:40 PM", "14:40", "14:40:00", and "14:40:50.600" are all valid times for this field.
  - ``URL``	Allows users to enter any valid website address. When users click on the field, the URL will open in a separate browser window.



<br/>


## field dependencies
**💡 tip:** **when we have to create dependent fields values in picklist**(_ex: state depend on country_) **we can create ``field dependencies``.**

<details>
  <summary> <b>example</b> </summary>
<p>
  
![image](https://user-images.githubusercontent.com/63545175/192217480-905bf50c-7067-475b-a223-3eaa3ca94dfb.png)
</p>
</details>


<br/>


## picklist value set
**💡 tip:** **when we have to use same picklist values more than once we can create ``picklist value set``.**

<details>
  <summary> <b>example</b> </summary>
<p>
  
![image](https://user-images.githubusercontent.com/63545175/188811016-9fce4b52-0e55-4969-9e25-b4f476c8a92c.png)  
</p>
</details>


<br/>


## changing field types ????
https://help.salesforce.com/s/articleView?id=sf.notes_on_changing_custom_field_types.htm&type=5 ????


<br/>


## Validation rules
- validation rules fires on both insertion & updation also.
- if we wan't validation rule to throw error only for new records or updated records we can use IsNew() or IsChanged() functions in formula respectively.

> **Note:** When writing a validation rule, your condition formula should return “true” for your error condition. 
> <br/> ex: ``Trip_End_Date__c < Trip_Start_Date__c``

<br/>


## Duplicate rules using Matching rules
- A duplicate rule **defines what happens when a user views a record with duplicates** or **starts creating a duplicate record.**

<details> 
<summary> <b> IMPLEMENTATION ???? </b>  </summary>  
<p>
  
---
  
https://trailhead.salesforce.com/content/learn/modules/sales_admin_duplicate_management?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-administrator-credential  
  
---
  
</p>
</details>

<br/>


## Feed tracking vs feed history tracking
<table>
<tr>
<td> 

Feed tracking
</td> 
<td> 

Feed History tracking
</td>
</tr>
<tr>
<td> 

![image](https://user-images.githubusercontent.com/63545175/189525655-01ba4931-3d1b-4fbc-b892-8685183e5bb8.png)

</td> 
<td> 

![image](https://user-images.githubusercontent.com/63545175/189525692-262679db-c952-465a-b929-7d11c5a31556.png)

</td>
</tr>
<tr>
<td> 

- Using Feed Tracking, users can see updates for records they follow in their Chatter feed. We can track only up to 20 fields per object.
- Auto-number, formula, and roll-up summary fields, Encrypted and read-only system fields can't be tracked.

> **note:** In lightning app builder, chatter components are available only to objects that have their feed tracking enabled.
  
</td> 
<td> 

- You can select certain fields to track and display the field history in the History related list of an object. 
- The field history data is retained for up to 18 months.
  
</td>
</tr>

</table>




<br/>


--- 



# types of object relationships

### 1. ***look up relationship***
  - child declares lookup to parent object
  - 0,1 to many
  - SOQL 
    - ***child to parent*** : SELECT id,name, parent__r.id FROM Child__c
    - ***parent to child*** : SELECT id, name, (SELECT id,name FROM Childs__r) FROM parent__c  
  - ex: in Account > Contact 
    - Contact is child
    - Contact has a look up to Account
    - Contact can exist without Account
    - Contact can access properties of parent Account

<br/>

### 2. ***master detail relationship***
  - child can not exist without parent
  - 1 to many
  - _important_
    - one object can have max 2 master detail relationships
    - parent account(master) can have roll up summary
    - ownership and sharing of detail record is determined by master record.
    - When a user deletes the master record, all detail records are deleted.
  - _SOQL_
    - ***child to parent*** : SELECT id,name, parent__r.id FROM Child__c
    - ***parent to child*** : SELECT id, name, (SELECT id,name FROM Childs__r) FROM parent__c
  - ex: in Debit Card > transactions
    - transaction is child
    - transaction has a master-detail to debit-card
    - transaction can not exist without debit-card

<br/>

### 3. ***many-to-many ``junction object``***
  - many to many relationship
  - _SOQL_
    - ***child to parent*** : ????
    - ***parent to child*** : ????
  - ex: customer > C_D < Dish | Opportunity > Account < Contact
    - 1 customer can have many dish and vice-versa.
    - 1 opp can be related to many customer and vice-versa.

<details>
<summary> <b> more examples: </b> </summary>  
<p>  
  
---
  
#### customer > Order < product  
  - 1 ---> many,many <--- 0,1
  - every time an order is created the product will show up in customer related list and customer will show up in product related list.
  - if customer is deleted all orders will get deleted, if product is deleted no order will be deleted
  - ❌ junction
                          
#### teacher > course < student
  - many ---> 1,1 <--- many
  - if course is deleted records of both students and teachers will be deleted.
  - ❌ not junction

#### Correct junction
  - 1 ---> many,many <--- 1
  - only master detail relationship
  - ✅ junction
                      
                       
---
                       
</p>  
</details>

<br/>

### 4. ***Hierarchical Relationship***
  - 1:1 relationship, available only on user object
  - one user is linked to another user, through Manager related list


<br/>
  
### 5. ***External lookup relationship***  
  - ????
  
### relationship limit, relationship conversion, self relationship ????
https://help.salesforce.com/s/articleView?id=sf.relationships_considerations.htm&type=5 ????  
  
  
<br/>

---

# Schema builder
![image](https://user-images.githubusercontent.com/63545175/188438845-725fc2c3-d0a8-4c56-a8ef-8a58e0926a7c.png)

![image](https://user-images.githubusercontent.com/63545175/188577290-c8692424-083c-4394-a675-0e47743dc97d.png)

<table>
<tr>
<td>
creating new object and adding fields  
</td>
<td>
viewing and editing existing objects  
</td>
</tr>
<tr>
<td>

![image](https://user-images.githubusercontent.com/63545175/188579281-99e0529e-57e9-46ad-b8e6-5b0346217b94.png)
</td>
<td>

![image](https://user-images.githubusercontent.com/63545175/188579466-08547633-3779-469e-aa79-0749343d0b2b.png)
</td>
</tr>
</table>








