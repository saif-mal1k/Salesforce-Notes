
### trigger
```apex

trigger CalloutTrigger on Account (before insert, before update) {
    CalloutClass.makeCallout();
}

```

### method for api call
```apex

public class CalloutClass {
    @future(callout=true)
    public static void makeCallout() {
        HttpRequest request = new HttpRequest();
        // Set the endpoint URL.
        String endpoint = 'http://yourHost/yourService';
        request.setEndPoint(endpoint);
        // Set the HTTP verb to GET.
        request.setMethod('GET');
        // Send the HTTP request and get the response.
        HttpResponse response = new HTTP().send(request);
    }
}

```






<br/>

<br/>

<br/>

<br/>


---

***references***
  - https://developer.salesforce.com/docs/atlas.en-us.224.0.apexcode.meta/apexcode/apex_callouts.htm?_ga=2.40774628.738253428.1664772222-1022251765.1662354198
  - https://trailhead.salesforce.com/content/learn/modules/apex_integration_services
