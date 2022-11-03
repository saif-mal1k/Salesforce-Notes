- open developer console, from setup
- click file, create new

<br/>

***example:***
```vlf
<apex:page showHeader="false">
    
    <apex:image url="https://developer.salesforce.com/files/salesforce-developer-network-logo.png"/>
    
</apex:page>
```

### Attributes of ``<apex:page>``
- **sidebar** - this attribute specify if sidebar should be visible or not.
- **showHeader** - to add or remove header, default value is true.
- **standardStylesheets** - to apply or block salesforce style. ex:``standardStylesheets="false"``

> **Note:** that both the sidebar and showHeader attribute have no effect in Lightning Experience, and that there’s no way to suppress the Lightning Experience header. Although the default value of showHeader is true, it has no effect in Lightning Experience.



