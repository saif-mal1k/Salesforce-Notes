
![image](https://user-images.githubusercontent.com/63545175/201098855-56b3a8fe-d86e-43df-8204-d180240ce458.png)


### example(Component Architecture):

![image](https://user-images.githubusercontent.com/63545175/201099595-2c4c07f8-d722-4427-9fec-c55d386c9abb.png)


- Nobody wants apps to hang while waiting for responses from server.
- for staying responsive server responses are handled asynchronously using callback functions. 
- client-side controller sends a [server request](# "packaged up with a code called callback function") and then keeps processing further. it doesn’t wait for response from the server.
- when the response comes back from the server, the [callback function](# "code that was packaged up with the request") runs and handles the response, including updating client-side data and the user interface.


<br/>

## Querying for Data from Salesforce
- Apex controllers contain remote methods that can be called by Lightning components. 
- generally these controllers ``Handle Request & Sends Response``.

### example(apex controller):
```apex
public with sharing class ExpensesController {

    @AuraEnabled
    public static List<Expense__c> getExpenses() {
        // Perform isAccessible() checking first, then
        return [SELECT Id, Name, Amount__c, Client__c, Date__c,
                       Reimbursed__c, CreatedDate
                FROM Expense__c];
    }
    
    @AuraEnabled
    public static Expense__c saveExpense(Expense__c expense) {
        // Perform isUpdateable() checking first, then
        upsert expense;
        return expense;
    }
}
```

- The **``@AuraEnabled``** annotation before the method declaration. “Aura” is the name of the framework at the core of Lightning Components. such as <aura:component>. 
- The **``static``** keyword. All @AuraEnabled controller methods must be static methods, and either public or global scope.
- these methods are very-very similar to visualforce custom controllers.
- **with sharing** keyword automatically applies org’s sharing rules to the records that are available via these methods. 

<br/>

## Loading Data from Salesforce
- **to connect ``<aura:component>`` with the server-side Apex controller, add ``controller="ApexControllerName"`` as attribute, like this.**
```aura
<aura:component controller="ExpensesController">
```

- **to trigger handler action when the component is first loaded, add**
```aura
<aura:handler name="init" action="{!c.doInit}" value="{!this}"/>
```

- **below the component’s attribute definitions.**


### example(JS Controller)
- JS Controller is added to component bundle to ``Send Request & Handle Response.``

```js
    // loads existing records from the database when the component starts up
    doInit: function(component, event, helper) {
    
        // point Aura Enabled method i.e contained in apex controller class
        let action = component.get("c.getExpenses");
        
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            // ``this`` is the scope in which the callback will execute; here ``this`` is the action handler function itself. 
            // The function is what gets called when the server response is returned i.e why it is called call back function. 
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.expenses", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        
        // add action to the queue, so that it will be sent to the server in the next request cycle.
        $A.enqueueAction(action);
    },
```


<br/>


## Value providers and their context
- v is the value provider for the view. 
- C represents 
    - ``JS Controller``: when used in ``.cmp`` inside expressions, like press="{!c.clickCreate}" and action="{!c.doInit}".
    - ``Apex Controller``: when used in ``.js`` 

| Identifier| Context| Meaning|
|-----------|--------|--------|
| c.| Component markup| Client-side controller|
| c.| Controller code| Server-side controller|
| c:| Markup| Default namespace|


<br/>


## Saving Data to Salesforce
### example(JS Controller)
```js
    createExpense: function(component, expense) {
        
        // getting the Apex controller method
        let action = component.get("c.saveExpense");
        
        // add data payload to the action, by providing a JSON-style object with name - value pairs.
        // note: parameter name must match the parameter name used in your Apex method declaration.
        action.setParams({
            "expense": expense
        });
        
        // set the callback for the request
        action.setCallback(this, function(response){
            let state = response.getState();
            if (state === "SUCCESS") {
                let expenses = component.get("v.expenses");
                expenses.push(response.getReturnValue());
                component.set("v.expenses", expenses);
            }
        });
        $A.enqueueAction(action);
    },
```




<br/>

<br/>

<br/>

<br/>

<br/>

<br/>


---
***references:***
- [Aura Components Basics | Connect to Salesforce with Server-Side Controllers](https://trailhead.salesforce.com/content/learn/modules/lex_dev_lc_basics/lex_dev_lc_basics_server?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-platform-developer-i-credential)

