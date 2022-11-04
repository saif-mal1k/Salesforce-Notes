## creating a new file, editing & preview in browser
- click gear icon, open developer console
- click file, create new

***example code:***
```html
<apex:page showHeader="false">
    
    <apex:image url="https://developer.salesforce.com/files/salesforce-developer-network-logo.png"/>
    
</apex:page>
```

- click preview button, available at top of line numbers.

<table>
<tr>
<td>

![image](https://user-images.githubusercontent.com/63545175/199955642-82411bd6-76c8-4bc7-afac-7bd35bc47929.png)    
</td>
<td>    

![image](https://user-images.githubusercontent.com/63545175/199955189-1cebd8d9-57a1-4fb6-b0bb-3c1dcf9410b8.png)
</td>
</tr>    
</table>    

    
<br/>


## Attributes of ``<apex:page>`` tag
- **sidebar** - this attribute specify if sidebar should be visible or not.
- **showHeader** - to add or remove header, default value is true.
- **standardStylesheets** - to apply or block salesforce style. ex:``standardStylesheets="false"``

> **Note:** that both the sidebar and showHeader attribute have no effect in Lightning Experience, and that there’s no way to suppress the Lightning Experience header. Although the default value of showHeader is true, it has no effect in Lightning Experience.


***to give lightning look to visualforce*** add the **``<apex:slds/>``** into the header section. this will apply CSS styles defined in Lightning Design System.


<br/>


### example
<table>
<tr>
<td>
    
```html
<apex:page>
    <head>
        <apex:slds/>
    </head>
    <body>
        <h1>Hello World</h1>
        <apex:pageBlock title="A Block Title"> 
            <apex:pageBlockSection title="A Section Title">
                I'm three components deep!
            </apex:pageBlockSection>
        </apex:pageBlock>
    </body>
</apex:page>
```
</td>
<td>    
    
![image](https://user-images.githubusercontent.com/63545175/199952125-ad1232e5-6bfb-4323-9402-301ccedea8b0.png)
</td>
</tr>
</table>    
  
  
  
