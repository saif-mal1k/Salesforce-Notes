## creating a new file, editing & preview in browser
- click gear icon, open developer console
- click file, create new

***example code:***
```vlf
<apex:page showHeader="false">
    
    <apex:image url="https://developer.salesforce.com/files/salesforce-developer-network-logo.png"/>
    
</apex:page>
```

- click preview button, available at top of line numbers.

<img src="https://user-images.githubusercontent.com/63545175/199899194-4445d8f7-91c6-426d-b4b5-7a9026395b34.png" width="360px">



<br/>


## Attributes of ``<apex:page>`` tag
- **sidebar** - this attribute specify if sidebar should be visible or not.
- **showHeader** - to add or remove header, default value is true.
- **standardStylesheets** - to apply or block salesforce style. ex:``standardStylesheets="false"``

> **Note:** that both the sidebar and showHeader attribute have no effect in Lightning Experience, and that there’s no way to suppress the Lightning Experience header. Although the default value of showHeader is true, it has no effect in Lightning Experience.


<br/>

## Adding functionality( Standard Controller vs Custom Controller )
<table>
<tr>
<td>

Standard Controller
</td>
<td>

Custom Controller
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
</table>


> **tip:** 
- You might use custom controllers to run in system mode and bypass all securities. When that happens, you're opting not to enforce permissions or field-level security.
- You can choose whether the class respects a user's organization-wide defaults, role hierarchy, and sharing rules are followed, by using the with sharing keywords in the class definition. 
- For example, if you are using a custom controller and want to honor sharing rules, you define your class in the first line as follows.

```apex
public with sharing class ContactPagination{
}
```





