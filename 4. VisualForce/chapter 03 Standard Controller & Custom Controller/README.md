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
- these classes are written to access other objects and fields to create a list of records from multiple objects or update fields across multiple objects.
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


</td>
</tr>    
</table>


<br/>
    
### example visualforce page, using standard controller

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
    
  
<br/>  


> **Note:**
> - If you want to use the standard controller to reference a specific record, it needs to know the record identifier, or ID, of the record to work with. It uses the ID to retrieve the data, and to save it back to the database when the record’s data is changed.
    
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


### all standard components ????
https://developer.salesforce.com/docs/atlas.en-us.224.0.pages.meta/pages/pages_compref.htm?_ga=2.78623645.865651692.1667559514-1022251765.1662354198






<br/>


<br/>


<br/>


<br/>


<br/>


<br/>

---
***references:***
- [Visualforce Basics | Use Standard Controllers](https://trailhead.salesforce.com/content/learn/modules/visualforce_fundamentals/visualforce_standard_controllers?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-platform-developer-i-credential)



