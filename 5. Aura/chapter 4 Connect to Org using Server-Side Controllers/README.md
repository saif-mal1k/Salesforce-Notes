
![image](https://user-images.githubusercontent.com/63545175/201098855-56b3a8fe-d86e-43df-8204-d180240ce458.png)


### example:

![image](https://user-images.githubusercontent.com/63545175/201099595-2c4c07f8-d722-4427-9fec-c55d386c9abb.png)


- Nobody wants apps to hang while waiting for responses from server.
- for staying responsive server responses are handled asynchronously using callback functions. 
- client-side controller sends a [server request](# "packaged up with a code called callback function") and then keeps processing further. it doesn’t wait for response from the server.
- when the response comes back from the server, the [callback function](# "code that was packaged up with the request") runs and handles the response, including updating client-side data and the user interface.


<br/>

## Querying for Data from Salesforce
- Apex controllers contain remote methods that can be called by Lightning components. 

### example(apex controller):
```apex
public with sharing class ExpensesController {
    // STERN LECTURE ABOUT WHAT'S MISSING HERE COMING SOON
    @AuraEnabled
    public static List<Expense__c> getExpenses() {
        return [SELECT Id, Name, Amount__c, Client__c, Date__c,
                       Reimbursed__c, CreatedDate
                FROM Expense__c];
    }
}
```

- The **``@AuraEnabled``** annotation before the method declaration. “Aura” is the name of the framework at the core of Lightning Components. such as <aura:component>. 
- The **``static``** keyword. All @AuraEnabled controller methods must be static methods, and either public or global scope.
- these methods are very-very similar to visualforce custom controllers.



<br/>


<br/>


## Loading Data from Salesforce



