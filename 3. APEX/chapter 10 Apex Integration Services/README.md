# Make Callouts to External Services from Apex
An Apex callout enables you to tightly integrate your Apex code with an external service. The callout makes a call to an external web service or sends an HTTP request from Apex code, and then receives the response.

***Apex callouts come in two flavors.***

- Web service callouts to SOAP web services use XML, and typically require a WSDL document for code generation.
- HTTP callouts to services typically use REST with JSON.


<br/>


> **💡 Tip:** These two types of callouts are similar in terms of sending a request to a service and receiving a response. But while WSDL-based callouts apply to SOAP Web services, HTTP callouts can be used with any HTTP service, either SOAP or REST.


<br/>


**Note:** Whenever possible, use an HTTP service. These services are typically easier to interact with, require much less code, and utilize easily readable JSON.


<br/>


<br/>


## HTTP Method	Description
- **GET** 	  - Retrieve data identified by a URL.
- **POST** 	  - Create a resource or post data to the server.
- **DELETE** 	- Delete a resource identified by a URL.
- **PUT** 	  - Create or replace the resource sent in the request body.


<br/>

A GET request means that the sender wants to obtain information about a resource from the server. 
When the server receives and processes this request, it returns the request information to the recipient. 

> **💡 Tip:** A GET request is similar to navigating to an address in the browser. When you visit a web page, the browser performs a GET request behind the scenes. 
In the browser, the result of the navigation is a new HTML page that’s displayed. With a callout, the result is the response object.


<br/>

In addition to the HTTP method, each request sets a URl, which is the endpoint address at which the service is located. For example, an endpoint can be ``http://www.example.com/api/resource.``
When the server processes the request, it sends a status code in the response. 

***The status code indicates:***

- 200  - If the request is successful. 
- 404  - for file not found.
- 500  - for an internal server error.


<br/>


### example of GET request : Retriving data from web

```apex
Http http = new Http();
HttpRequest request = new HttpRequest();
request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals');
request.setMethod('GET');
HttpResponse response = http.send(request);
// If the request is successful, parse the JSON response.
if(response.getStatusCode() == 200) {
    // Deserialize the JSON string into collections of primitive data types.
    Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
    // Cast the values in the 'animals' key as a list
    List<Object> animals = (List<Object>) results.get('animals');
    System.debug('Received the following animals:');
    for(Object animal: animals) {
        System.debug(animal);
    }
}
```

***explanation:*** above code send GET request to a web service to get a list of animals. The service/server sends the response in JSON format. JSON is essentially a string, so the built-in JSONParser class converts it to an object. We can then use that object to write the name of each animal to the debug log.

<br/>


>***💡 Tip:*** For more complex JSON structures, you can use [JSON2Apex](https://json2apex.herokuapp.com/?_ga=2.2285616.1441678755.1652070025-1740883501.1634572155). This tool generates strongly typed Apex code for parsing a JSON structure.


<br/>


### example of PUT request : sending data to a service/server

```apex
Http http = new Http();
HttpRequest request = new HttpRequest();
request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals');
request.setMethod('POST');
request.setHeader('Content-Type', 'application/json;charset=UTF-8');
// Set the body as a JSON object
request.setBody('{"name":"mighty moose"}');
HttpResponse response = http.send(request);
// Parse the JSON response
if(response.getStatusCode() != 201) {
    System.debug('The status code returned was not expected: ' + response.getStatusCode() + ' ' + response.getStatus());
} else {
    System.debug(response.getBody());
}
```

***explanation:*** This example sends a POST request to the web service to add an animal name. The new name is added to the request body as a JSON string. The request Content-Type header is set to let the service know that the sent data is in JSON format so that it can process the data appropriately. The service responds by sending a status code and a list of all animals, including the one you added. If the request was processed successfully, the status code returns 201, because a resource has been created. The response is sent to the debug log when anything other than 201 is returned.

>***💡 Tip:***  when you buy something online or when you comment on your favorite post the browser is making POST request behind the scenes.


<br/>


<details>
<summary> <b>full working example:</b> </summary>    
<p>
   
    
```apex
public class AnimalLocator {
    
    public static String getAnimalNameById(Integer Idd){
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals/'+Idd);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
               
        Map<String,Object> animal = new Map<String,Object>();
        
        if(response.getStatusCode() == 200) {
            // Deserialize the JSON string into collections of primitive data types.
            Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            // Cast the values in the 'animals' key as a list
            animal = (Map<String,Object>) results.get('animal');
            
        }
        return (String) animal.get('name');
        
        
    }
}    
```
    
```apex
@isTest
private class AnimalLocatorTest {
    @isTest static void AnimalLocatorMock(){
    Test.setMock(HttpCalloutMock.class, new AnimalLocatorMock());
    string result = AnimalLocator.getAnimalNameById(3);
    string expectedResult = 'chicken';
    system.assertEquals(result, expectedResult );
        
    }
    
}
```    
    
```apex
@isTest
global class AnimalLocatorMock implements HttpCalloutMock {
    //implements this interface method
    
    global HTTPResponse respond(HTTPRequest request){
        //create fake response
        
        HttpResponse response = new HttpResponse();
        response.setHeader('Content-Type','application/json');
        response.setBody('{"animals":["majestic badger","fluffy bunny","scary bear", "chicken"]}');
        
        response.setStatusCode(200);
        return response;
        
    }

}
```    
    
<p>
</details>

    
<br/>

    
## Testing Callouts
testing runtime allows you to “mock” the callout. Mock callouts allow you to specify the response to return in the test instead of actually calling the web service. You are essentially telling the runtime, “I know what this web service will return, so instead of calling it during testing, just return this data.” Using mock callouts in your tests helps ensure that you attain adequate code coverage and that no lines of code are skipped due to callouts.


<br/>
    
    
<br/>
    
    
    
# Apex Integration Services

complete apex integration services from here    
    
https://trailhead.salesforce.com/content/learn/modules/apex_integration_services/apex_integration_webservices    


<br/>


---

---

---

---


# Exposing Apex class & methods as REST web service
- You can expose your Apex classes and methods so that external applications can access your code and your application through the REST architecture.
- @RestResource annotation is used to expose a class as REST resource.
- We have to add annotations to methods to expose them through REST like @HttpPost,@HttpGet etc.
- each exposed method must be defined as global static with added annotation to associate it with an HTTP method.
    
***syntax:***
```apex
    
@RestResource(urlMapping='/Account/*')
global with sharing class MyRestResource {
    @HttpGet
    global static Account getRecord() {
        // Add your code
    }
}    
        
```
    
***annotations:***
    
<table class="featureTable sort_table">
  <thead align="left" class="thead sorted">
    <tr>
      <th>Annotation</th>
      <th>Action</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody class="tbody">
    <tr>
      <td><code>@HttpGet</code></td>
      <td>Read</td>
      <td>Reads or retrieves records.</td>
    </tr>
    <tr>
      <td><code>@HttpPost</code></td>
      <td>Create</td>
      <td>Creates records.</td>
    </tr>
    <tr>
      <td><code>@HttpDelete</code></td>
      <td>Delete</td>
      <td>Deletes records.</td>
    </tr>
    <tr>
      <td><code>@HttpPut</code></td>
      <td>Upsert</td>
      <td>Typically used to update existing records or create records.</td>
    </tr>
    <tr>
      <td><code>@HttpPatch</code></td>
      <td>Update</td>
      <td>Typically used to update fields in existing records.</td>
    </tr>
  </tbody>
</table>


<br/>
    
    
### example:
```apex
     
@RestResource(urlMapping='/Cases/*')
global with sharing class CaseManager {
    @HttpGet
    global static Case getCaseById() {
        RestRequest request = RestContext.request;
        // grab the caseId from the end of the URL
        String caseId = request.requestURI.substring(
          request.requestURI.lastIndexOf('/')+1);
        Case result =  [SELECT CaseNumber,Subject,Status,Origin,Priority
                        FROM Case
                        WHERE Id = :caseId];
        return result;
    }
    @HttpPost
    global static ID createCase(String subject, String status,
        String origin, String priority) {
        Case thisCase = new Case(
            Subject=subject,
            Status=status,
            Origin=origin,
            Priority=priority);
        insert thisCase;
        return thisCase.Id;
    }   
    @HttpDelete
    global static void deleteCase() {
        RestRequest request = RestContext.request;
        String caseId = request.requestURI.substring(
            request.requestURI.lastIndexOf('/')+1);
        Case thisCase = [SELECT Id FROM Case WHERE Id = :caseId];
        delete thisCase;
    }     
    @HttpPut
    global static ID upsertCase(String subject, String status,
        String origin, String priority, String id) {
        Case thisCase = new Case(
                Id=id,
                Subject=subject,
                Status=status,
                Origin=origin,
                Priority=priority);
        // Match case by Id, if present.
        // Otherwise, create new case.
        upsert thisCase;
        // Return the case ID.
        return thisCase.Id;
    }
    @HttpPatch
    global static ID updateCaseFields() {
        RestRequest request = RestContext.request;
        String caseId = request.requestURI.substring(
            request.requestURI.lastIndexOf('/')+1);
        Case thisCase = [SELECT Id FROM Case WHERE Id = :caseId];
        // Deserialize the JSON string into name-value pairs
        Map<String, Object> params = (Map<String, Object>)JSON.deserializeUntyped(request.requestbody.tostring());
        // Iterate through each parameter field and value
        for(String fieldName : params.keySet()) {
            // Set the field and value on the Case sObject
            thisCase.put(fieldName, params.get(fieldName));
        }
        update thisCase;
        return thisCase.Id;
    }    
}    
    
```    
    
<br/>


<br/>


<br/>


<br/>


<br/>


<br/>

---

***references:***

1. Apex Integration Services : https://trailhead.salesforce.com/en/content/learn/modules/apex_integration_services



---

