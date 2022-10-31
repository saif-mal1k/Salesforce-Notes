## What Is the Lightning Component Framework?
The Lightning Component framework is a UI framework for developing web apps for mobile and desktop devices. 
It’s a modern framework for building single-page applications with dynamic, responsive user interfaces for Lightning Platform apps. 
It uses JavaScript on the client side and Apex on the server side.

<img src="https://user-images.githubusercontent.com/63545175/169451424-0cd16f30-cdb9-4432-949e-ce43174c33a3.png" width="640px">


<br/>


## Where You Can Use Lightning Components

- Add Apps to the Lightning Experience App Launcher
- Add Apps to Lightning Experience and Salesforce App Navigation
- Add Lightning Components to Lightning Pages
- Add Lightning Components to Lightning Experience Record Pages
- Launch a Lightning Component as a Quick Action
- Create Stand-Alone Apps


<br/>
  

<br/>
  
## Aura component  
**an aura component is represented by multiple files(**_cmpName.auradoc, cmpName.cmp, cmpName.cmp-meta.xml, cmpName.css, cmpName.design, cmpName.svg, cmpNameController.js, cmpNameHelper.js, cmpNameRenderer.js_**). an individual component is stored as a bundle(folder) that includes all resource without dependencies.**

![image](https://user-images.githubusercontent.com/63545175/198946787-7f6f72c1-317c-4cbc-9fe5-d958be77b9a4.png)  
  
![image](https://user-images.githubusercontent.com/63545175/198949983-b93bb74f-7e98-4ad5-8040-19fdb754b3f8.png)
  
  
  
  
<br/>


### <b><em>Example:</em></b>  
<table>
<tr>
<td colspan="2">

</td>
</tr>

<tr>
<td>

<b>aura component</b>
</td>  
<td>

<b>JS code</b>
</td>  
</tr>    
  
<tr>
<td align="center">

![image](https://user-images.githubusercontent.com/63545175/169453564-580b49f8-44a6-479f-89b8-4619c15519fe.png)
  
</td>
<td>

```js
({
    clickReimbursed: function(component, event, helper) {
        let expense = component.get("v.expense");
        let updateEvent = component.getEvent("updateExpense");
        updateEvent.setParams({ "expense": expense });
        updateEvent.fire();
    }
})  
```

- This is the component’s client-side controller, written in JavaScript. 
- The clickReimbursed function in the component’s controller 
  <br/> corresponds to the ``onchange="{!c.clickReimbursed}"`` attribute 
  <br/> on the checkbox in the component’s markup.  
  
</td>   
  
</tr>

<tr>
<td colspan="2">

<b>aura component code</b>  
</td>  
</tr>  
  
<tr>
<td colspan="2">

```aura
<aura:component>
    <aura:attribute name="expense" type="Expense__c"/>
    <aura:registerEvent name="updateExpense" type="c:expensesItemUpdate"/>
    <!-- Color the item green if the expense is reimbursed -->
    <lightning:card title="{!v.expense.Name}" iconName="standard:scan_card"
                    class="{!v.expense.Reimbursed__c ?
                           'slds-theme_success' : ''}">
        <aura:set attribute="footer">
            <p>Date: <lightning:formattedDateTime value="{!v.formatdate}"/></p>
            <p class="slds-text-title"><lightning:relativeDateTime value="{!v.formatdate}"/></p>
        </aura:set>
        <p class="slds-text-heading_medium slds-p-horizontal_small">
            Amount: <lightning:formattedNumber value="{!v.expense.Amount__c}" style="currency"/>
        </p>
        <p class="slds-p-horizontal_small">
           Client: {!v.expense.Client__c}
        </p>
        <p>
            <lightning:input type="toggle"
                             label="Reimbursed?"
                             name="reimbursed"
                             class="slds-p-around_small"
                             checked="{!v.expense.Reimbursed__c}"
                             messageToggleActive="Yes"
                             messageToggleInactive="No"
                             onchange="{!c.clickReimbursed}"/>
        </p>
    </lightning:card>
</aura:component>  
``` 
</td>  
 
</tr>
  
<tr>
<td colspan="2">
  
- it’s XML markup, and mixes both static HTML tags with custom Aura component tags, such as the ``<aura:component>`` tag.
- there are components like  ``<lightning:card>`` creates a container around a group of information.
- ``<lightning:input>`` and ``<lightning:formattedNumber>``,  you use the input component to collect user input, and the other components to display read-only values. 
 

> <b>Tip: 💡</b>The lightning namespace provides many UI components that use Salesforce Lightning Design System, or SLDS, out-of-the-box. We recommend that you use components in the lightning namespace where possible. For example, use ``<lightning:input>`` 
</td>    
</tr>
</table>
  
<br/>

  
> <b>Note:</b> In the Aura Component programming model, a component is a bundle of code. 
> <br/>It can include markup in the “.cmp resource,” and it can also include JavaScript code, in a number of associated resources. 
> <br/>Related resources are “auto-wired” to each other, and together they make up the component bundle.  
  
  
  
  
<br/>
  
  
<br/>
  
  
<br/>
  
  
<br/>
  
  
<br/>
  
  
<br/>
  
  
<br/>
  
  
---
  
<b><em>references:</em></b>
  
1. [Aura Components Basics | Get Started with Aura Components](https://trailhead.salesforce.com/en/content/learn/modules/lex_dev_lc_basics/lex_dev_lc_basics_intro)  
  
  
---  
  
  
