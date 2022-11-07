
  
## Aura component  
- **an aura component is represented by multiple files(**_cmpName.auradoc, cmpName.cmp, cmpName.cmp-meta.xml, cmpName.css, cmpName.design, cmpName.svg, cmpNameController.js, cmpNameHelper.js, cmpNameRenderer.js_**).**  
- **an individual component is stored as a bundle(folder) that includes all resource without dependencies.** 
- **aura components are (intended to be) loosely coupled. The mechanism for this loose coupling is [Events](# "Events are fired from JavaScript controller actions that are typically triggered by a user interacting with the user interface.").**


<table>
<tr>
<td> 

![image](https://user-images.githubusercontent.com/63545175/198946787-7f6f72c1-317c-4cbc-9fe5-d958be77b9a4.png)  
</td>
<td>

- an aura component is (_intended to be_):
  - **highly cohesive**: complete in itself.
  - **loosely coupled**: less dependencies. (_mechanism is [Events](# "Events are fired from JavaScript controller actions that are typically triggered by a user interacting with the user interface.")_)
  - **useful in composition**: multiple components complete an app.
  
</td>
</table>

<br/>  
  
<!-------------------------------- table start ----------------------------------->  

<table class="featureTable sort_table" summary="">
<thead class="thead sorted" align="left">
<tr>
<th class="featureTableHeader  " id="d14835e39">Resource</th>

<th class="featureTableHeader  " id="d14835e42">Resource Name</th>

<th class="featureTableHeader  " id="d14835e45">Usage</th>

<th class="featureTableHeader  " id="d14835e48">See Also</th>

</tr>

</thead>

<tbody class="tbody">
<tr>
<td class="entry" headers="d14835e39" data-title="Resource">Component or Application</td>

<td class="entry" headers="d14835e42" data-title="Resource Name">
<span class="ph filepath">sample.cmp</span> or <span class="ph filepath">sample.app</span>
</td>

<td class="entry" headers="d14835e45" data-title="Usage">The only required resource in a bundle. Contains markup for the component or
                app. Each bundle contains only one component or app resource.</td>

<td class="entry" headers="d14835e48" data-title="See Also">
<a class="xref" href="/docs/atlas.en-us.lightning.meta/lightning/components_overview.htm" title="Components are the functional units of the Lightning Component framework." data-id="docs/atlas.en-us.lightning.meta/lightning/components_overview.htm">Creating
                  Components</a><p class="p"><a class="xref" href="/docs/atlas.en-us.lightning.meta/lightning/ref_aura_application.htm" title="An app is a special top-level component whose markup is in a .app resource." data-id="docs/atlas.en-us.lightning.meta/lightning/ref_aura_application.htm">aura:application</a></p>
</td>

</tr>

<tr>
<td class="entry" headers="d14835e39" data-title="Resource">CSS Styles</td>

<td class="entry" headers="d14835e42" data-title="Resource Name"><span class="ph filepath">sample.css</span></td>

<td class="entry" headers="d14835e45" data-title="Usage">Contains styles for the component. </td>

<td class="entry" headers="d14835e48" data-title="See Also"><a class="xref" href="/docs/atlas.en-us.lightning.meta/lightning/components_css.htm" title="Style your components with CSS." data-id="docs/atlas.en-us.lightning.meta/lightning/components_css.htm">CSS in
                  Components</a></td>

</tr>
<tr>
<td class="entry" headers="d14835e39" data-title="Resource">Controller</td>

<td class="entry" headers="d14835e42" data-title="Resource Name"><span class="ph filepath">sampleController.js</span></td>

<td class="entry" headers="d14835e45" data-title="Usage">Contains client-side controller methods to handle events in the
                component.</td>

<td class="entry" headers="d14835e48" data-title="See Also"><a class="xref" href="/docs/atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm" title="A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions." data-id="docs/atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm">Handling Events with Client-Side Controllers</a></td>
</tr>

<tr>
<td class="entry" headers="d14835e39" data-title="Resource">Design</td>

<td class="entry" headers="d14835e42" data-title="Resource Name"><span class="ph filepath">sample.design</span></td>

<td class="entry" headers="d14835e45" data-title="Usage">File required for components used in Lightning App Builder, Lightning pages,
                Experience Builder, or Flow Builder.</td>

<td class="entry" headers="d14835e48" data-title="See Also"><a class="xref" href="/docs/atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_design_files.htm" title="Use a design resource to control which attributes are exposed to builder tools like the Lightning App Builder, Experience Builder, or Flow Builder. A design resource lives in the same folder as your .cmp resource, and describes the design-time behavior of the Aura component—information that visual tools need to display the component in a page or app." data-id="docs/atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_design_files.htm">Aura Component Bundle Design Resources</a></td>

</tr>

<tr>
<td class="entry" headers="d14835e39" data-title="Resource">Documentation</td>

<td class="entry" headers="d14835e42" data-title="Resource Name"><span class="ph filepath">sample.auradoc</span></td>

<td class="entry" headers="d14835e45" data-title="Usage">A description, sample code, and one or multiple references to example
                components</td>

<td class="entry" headers="d14835e48" data-title="See Also"><a class="xref" href="/docs/atlas.en-us.lightning.meta/lightning/docs_intro.htm" title="Documentation helps developers use your components to develop their apps more effectively. You can provide interactive examples, documentation, and specification descriptions for a component, event, or interface." data-id="docs/atlas.en-us.lightning.meta/lightning/docs_intro.htm">Writing Documentation for the Component Library</a></td>

</tr>

<tr>
<td class="entry" headers="d14835e39" data-title="Resource">Renderer</td>

<td class="entry" headers="d14835e42" data-title="Resource Name"><span class="ph filepath">sampleRenderer.js</span></td>

<td class="entry" headers="d14835e45" data-title="Usage">Client-side renderer to override default rendering for a component.</td>

<td class="entry" headers="d14835e48" data-title="See Also"><a class="xref" href="/docs/atlas.en-us.lightning.meta/lightning/js_renderers.htm" title="The framework’s rendering service takes in-memory component state and creates and manages the DOM elements owned by the component. If you want to modify DOM elements created by the framework for a component, you can modify the DOM elements in the component’s renderer. Otherwise, the framework will override your changes when the component is rerendered." data-id="docs/atlas.en-us.lightning.meta/lightning/js_renderers.htm">Create a Custom
                  Renderer</a></td>

</tr>

<tr>
<td class="entry" headers="d14835e39" data-title="Resource">Helper</td>

<td class="entry" headers="d14835e42" data-title="Resource Name"><span class="ph filepath">sampleHelper.js</span></td>

<td class="entry" headers="d14835e45" data-title="Usage">JavaScript functions that can be called from any JavaScript code in a
                component’s bundle</td>

<td class="entry" headers="d14835e48" data-title="See Also"><a class="xref" href="/docs/atlas.en-us.lightning.meta/lightning/js_helper.htm" title="Put functions that you want to reuse in the component’s helper. Helper functions also enable specialization of tasks, such as processing data and queueing server-side actions. Helper functions are local to a component, improve code reuse, and move the heavy lifting of JavaScript logic away from the client-side controller, where possible." data-id="docs/atlas.en-us.lightning.meta/lightning/js_helper.htm">Sharing JavaScript
                  Code in a Component Bundle</a></td>

</tr>

<tr>
<td class="entry" headers="d14835e39" data-title="Resource">SVG File</td>

<td class="entry" headers="d14835e42" data-title="Resource Name">sample.svg</td>

<td class="entry" headers="d14835e45" data-title="Usage">Custom icon resource for components used in the Lightning App Builder or
                Experience Builder.</td>

<td class="entry" headers="d14835e48" data-title="See Also"><a class="xref" href="/docs/atlas.en-us.lightning.meta/lightning/components_config_for_app_builder.htm" title="There are a few steps to take before you can use your custom Aura components in either Lightning pages or the Lightning App Builder." data-id="docs/atlas.en-us.lightning.meta/lightning/components_config_for_app_builder.htm">Configure Components for Lightning Pages and the Lightning App
                Builder</a></td>

</tr>

</tbody>

</table>


<!--------------------------------------------------------------- table complete ---------------------------------------------------------->
  
  
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
  
  
