# Adding functionality using Controller
- the controller contains the logic to be executed when a button is clicked. 
- A controller also typically interacts with the model (the database)—making available data that the view might want to display, or pushing changes back to the database.
- Most standard and all custom objects have standard controllers that can be used to interact with the data associated with the object,
- standard controllers can be extended to add new functionality, custom controllers can be created from scratch. 

<br/>



## Standard Controller vs Custom Controller 
<table>
<tr>
<td>

**Standard Controller**
</td>
<td>

**Custom Controller**
</td>
</tr>
<tr>
<td>

- Standard controllers are powerful prewritten classes atleast one exists for every Salesforce standard object.
- these classes gives basic record operation functionality such as create, read, update, and delete. 
</td>
<td>

- A custom controller is a custom Apex class written by developer to add logic to a page.
- these classes are written to access other objects and fields to create a list of records from multiple objects or update fields across multiple objects or to make a callout to an external web service.
</td>
</tr>

<tr>
<td>

***to use standard controller***
- add ``standardController="standardObjectApiName"`` as attribute in ``<apex:page>`` tag.
    
**example:**    
```html
<apex:page standardController="Contact">
```
</td>
<td>

***to use custom controller***
- reference the name of the controller class in the ``<apex:page>``  ``controller`` attribute.

**example:**    
```html
<apex:page Controller="ContactControllerApexVfpCls">
```
</td>
</tr>    
</table>


<br/>
 
<details>
<summary> <h3> Example visualforce page, using standard controller </h3> </summary>
<p>

```html
<apex:page standardController="Contact">
    <!--this page has a form to create a contact-->
    <head>
        <!--icon not working dont know why-->
        <link rel="icon" href="https://raw.githubusercontent.com/saif-mal1k/saif-mal1k/main/folder/image.png" type="image/icon type"/>
        <title>Quick Start: Visualforce</title>
        
        <!-- Import the Design System style sheet -->
        <apex:slds />
        
    </head>
    <body>
        
        <apex:form>
            <apex:pageBlock title="New Contact">
                <!--Buttons -->
                <apex:pageBlockButtons>
                    <apex:commandButton action="{!save}" value="Save"/>
                </apex:pageBlockButtons>
                <!--Input form -->
                <apex:pageBlockSection columns="1">
                    <apex:inputField value="{!Contact.Firstname}"/>
                    <apex:inputField value="{!Contact.Lastname}"/>
                    <apex:inputField value="{!Contact.Email}"/>
                </apex:pageBlockSection>
            </apex:pageBlock>
        </apex:form>
        
    </body>
</apex:page>    
```

***Output:***
![image](https://user-images.githubusercontent.com/63545175/200169200-dfd010aa-7bd9-43de-b43c-86a6066f3f94.png)

---

</p>
</details>


<details>
<summary> <h3> Example visualforce page, using custom controller </h3> </summary>
<p>

<table>
<tr>
<td>

***visualforce page***
```html
<apex:page controller="contactsControllerApexVfpCls">
  <apex:form>
    <apex:pageBlock title="Contacts List" id="contacts_list">
      <!-- Contacts List -->
      <apex:pageBlockTable value="{! contacts }" var="ct">
        <apex:column>
          <apex:outputLink 
            value="{! URLFOR($Action.Contact.View, ct.Id) }">
              {! ct.Id }
          </apex:outputLink>
        </apex:column>
        <apex:column value="{! ct.FirstName }"/>
        <apex:column value="{! ct.LastName }"/>
        <apex:column value="{! ct.Title }"/>
        <apex:column value="{! ct.Email }"/>
      </apex:pageBlockTable>
    </apex:pageBlock>
  </apex:form>
</apex:page>    
```
</td>
<td>

***Apex Custom Controller Class***
```apex
public class contactsControllerApexVfpCls {
   private String sortOrder = 'LastName';
   public List<Contact> getContacts() {
      List<Contact> results = Database.query(
         'SELECT Id, FirstName, LastName, Title, Email ' +
         'FROM Contact ' +
         'ORDER BY ' + sortOrder + ' ASC ' +
         'LIMIT 10'
      );
      return results;
   }    
}
```
</td>
<tr>
<td colspan="2">

***Output:***
![image](https://user-images.githubusercontent.com/63545175/200169114-41835052-f96e-4faf-af6e-c28931b2604c.png)
</td>
</tr>
</table>

---

</p>
</details>

  
<br/>  


> **Note:**
> - If you want to use the standard controller to reference a specific record, it needs to know the record identifier, or ID, of the record to work with. It uses the ID to retrieve the data, and to save it back to the database when the record’s data is changed.
> - ***example:*** ``https://MyDomainName.lightning.force.com/apex/AccountSummary?core.apexpages.request.devconsole=1``**``&id=001D000000JRBes``**

    
<br/>    
    
> **Note:** 
> - custom controllers can be defined to run in system mode and bypass all securities. so that no permissions or field-level security is applied.
> - it can be defined, whether the class respects a user's org-wide defaults, role hierarchy, and sharing rules, by using the ``with sharing`` keywords in the class definition.
    
For example, if you are using a custom controller and want to honor sharing rules, you define your class in the first line as follows.
```apex
public with sharing class ContactPagination{
}
```


<br/>








<br/>


<br/>


<br/>


<br/>


<br/>


<br/>

---
***references:***
- [Visualforce Basics | Use Standard Controllers](https://trailhead.salesforce.com/content/learn/modules/visualforce_fundamentals/visualforce_standard_controllers?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-platform-developer-i-credential)
- [Visualforce Basics | Create & Use Custom Controllers](https://trailhead.salesforce.com/content/learn/modules/visualforce_fundamentals/visualforce_custom_controllers?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-platform-developer-i-credential)
- [Creating Custom Controller](https://developer.salesforce.com/docs/atlas.en-us.224.0.pages.meta/pages/pages_quick_start_controller.htm?_ga=2.41000875.865651692.1667559514-1022251765.1662354198)



