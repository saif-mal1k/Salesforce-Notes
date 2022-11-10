# Attributes and Expressions


## what is an attribute ?
- a component’s attribute is defined using ``<aura:attribute/>`` tag. 
    - it **requires values for the ``name`` and ``type`` attributes**, and accepts these optional attributes: default, description, required
- they can be read and their values can be used in different ways using expressions.
- they can be changed over the course of component’s lifecycle, in response to actions the user takes, or events that happen elsewhere, and so on. 


<b>example:</b>

```aura
<aura:component>
    <aura:attribute name="message" type="String"/>
    <p>Hello! {!v.message}</p>
</aura:component>
```


><b>explanation:</b> We’re outputting the contents of message using the expression ``{!v.message}``. 
> <br/> That is, this expression references the message attribute. 
> <br/> The expression is evaluated, and resolves to the text string that’s currently stored in message. 
> <br/> And that’s what the expression outputs into the body of the component.



<br/>


### what is “expression”?
An expression is basically a formula, or a calculation, which you place within expression delimiters ``“ {! ” and “ } ”``. So, expressions look like the following:
```
{!<expression>}
```

<b><em>An expression is any set of [literal values](# "they’re things like the number ``42``, or the string ``Hello``."), [variables](# "Variables are things like the ``message`` attribute."), [sub-expressions](# " sub-expressions means you can use parenthesis to group things together."), or [operators](# " Operators are things like +, -, and so on.") that can be resolved to a single value.</em></b>
```
{!'Hello! ' + v.message}
```

- You can pass the expressions to another component to set the value on that component. 
- Passing the value to the other component overrides the value on that component.
- Here’s a new component that passes in a custom value to the helloMessage component. 

```
<aura:component>
    <aura:attribute name="customMessage" type="String"/>
    <p> <c:helloMessage message="{!v.customMessage}"/> </p>
</aura:component>
```

> **Note:** In Aura, Expressions are case sensitive. ????
> <br/> **example**, if you have a custom field myNamespace__Amount__c, you must refer to it as ``{!v.myObject.myNamespace__Amount__c}``.

<br/>


### Value Providers
- ``v`` is something called a value provider.
- In a component, v is a value provider for the view, which is the component itself.
- ``v`` provides a “hook” to access the component’s attributes (such as message).

<br/>

When an attribute of a component is an object or other structured data (that is, not a primitive value), the values on that attribute are accessed using the same dot notation. 

**example**, ``{!v.account.Id}`` accesses the Id field of an account record. 


<br/>


### Attribute Data Types
in above example message is a string, but there are a number of different attribute types.

- <b>Primitives data types</b>, such as Date, DateTime, Boolean, Integer, Long, Double, Decimal, or String. The usual suspects in any programming language.
- <b>Standard and custom Salesforce objects</b>, such as Account or MyCustomObject__c.
- <b>Collections</b>, such as List, Map, and Set.
- <b>Custom Apex classes</b>.
- Framework-specific types, such as ``Aura.Component``, or ``Aura.Component[]``.



<br/>


### default value for attributes
```
<aura:attribute name="messages" type="List"
                default="['You look nice today.',
                          'Great weather we\'re having.',
                          'How are you?']"/>
```

```
    <aura:attribute name="newExpense" type="Expense__c"
         default="{ 'sobjectType': 'Expense__c',
                        'Name': '',
                        'Amount__c': 0,
                        'Client__c': '',
                        'Date__c': '',
                        'Reimbursed__c': false }"/>
```


<br/>


<br/>


<br/>


---

### note:

- The <aura:iteration> component repeats its body once per item in its items attribute, so the list shrinks or grows as we have fewer or more messages.
```
    <aura:iteration items="{!v.messages}" var="msg">
        <p><c:helloMessage message="{!msg}"/></p>
    </aura:iteration>
```

- In object-oriented programming, there’s a difference between a class and an instance of that class. Components have a similar concept. When you create a .cmp resource, you are providing the definition (class) of that component. When you put a component tag in a .cmp, you are creating a reference to (instance of) that component.

- we can add multiple instances of the same component with different attributes. 


<br/>


### example:

> <b>Create a packing list item component:</b>
> <br/><em>Create a component to display a single item for your packing list.</em>
> - Create a component called campingListItem
> - Add an attribute named item of type Camping_Item__c that is required
> - Use an expression to display Name, Price__c, Quantity__c, and Packed__c
> - Use appropriately formatted number fields to display Price__c and Quantity__c
> - Use a toggle to display Packed__c status

```
<aura:component implements="force:appHostable,flexipage:availableForAllPageTypes,flexipage:availableForRecordHome,force:hasRecordId,force:lightningQuickAction" access="global" >
    <aura:attribute name="item" type="Camping_Item__c" default="Name: nishant, Price__c: 1909, Quantity__c: 50, Packed__c: true" required="true"/>
    <p>{!v.item.Name}</p>
    <lightning:formattedNumber value="{!v.item.Price__c}" style="currency"/>
    <lightning:formattedNumber value="{!v.item.Quantity__c}" style="number"/>
    
    <lightning:input type="toggle"
                     label="Packed?"
                     name="Packed"
                     checked="{!v.item.Packed__c}" />
</aura:component>
```







<br/>
  
  
<br/>
  
  
<br/>


<br/>
  
  
<br/>


---

***references:***

1. [ Aura Components Basics | Attributes and Expressions](https://trailhead.salesforce.com/content/learn/modules/lex_dev_lc_basics/lex_dev_lc_basics_attributes_expressions)
2. [Attributes](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_attributes.htm?_ga=2.124171267.865651692.1667559514-1022251765.1662354198) ????
3. [Using Expressions](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/expr_overview.htm?_ga=2.83320735.865651692.1667559514-1022251765.1662354198) ????
4. [Value Providers](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/expr_source.htm?_ga=2.15767359.865651692.1667559514-1022251765.1662354198) ????



