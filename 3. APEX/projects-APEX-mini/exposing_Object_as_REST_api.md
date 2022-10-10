
### code
```apex
@RestResource(urlMapping='/eventdetails/*')
//@RestResource used to expose REST API
global with sharing class accountRestResource {
    
    @HttpDelete
    global static void doDelete() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String accountId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        Account account = [SELECT Id FROM Account WHERE Id = :accountId];
        delete account;
    }
    
    @HttpGet
    global static Account doGet(){
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String accountId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        Account result = [SELECT Id, Name, Phone, Website FROM Account WHERE Id = :accountId];
        return result;
    }
    
    @HttpPost
    global static String doPost(String name,String phone, String website) {
        Account account = new Account();
        account.Name = name;
        account.phone = phone;
        account.website = website;
        insert account;
        return account.Id;
    }
}
```






<br/>

<br/>

<br/>

<br/>

---
***references:***

1. How to Expose Apex Class as REST Web Service in Salesforce: https://www.youtube.com/watch?v=kaExUF4ySX4


