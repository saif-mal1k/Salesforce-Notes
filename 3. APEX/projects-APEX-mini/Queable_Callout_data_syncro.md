<details>
<summary> <b> Use Case: </b> </summary>  
<p>
  
---
  
Synchronize Salesforce data with an external system
Implement an Apex class (called WarehouseCalloutService) that implements the queueable interface and makes a callout to the external service used for warehouse inventory management. This service receives updated values in the external system and updates the related records in Salesforce. Before checking this section, enqueue the job at least once to confirm that it's working as expected.

---
  
</p>  
</details>  

<br/>

### first authorize, in remote site settings

<br/>

### apex class

```apex
public with sharing class WarehouseCalloutService implements Queueable {
    
    private static final String WAREHOUSE_URL = 'https://th-superbadge-apex.herokuapp.com/equipment';
    
    public static void execute (QueueableContext context){
        doTheWork();
    }
    
    @future(callout=true)
    public static void doTheWork(){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(WAREHOUSE_URL);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        
        if(response.getStatusCode() == 200) {
            // Deserialize the JSON string into collections of primitive data types.
            List<object> equipments = (List<object>) JSON.deserializeUntyped(response.getBody());
            //system.debug(equipments);           
            List<Product2> productsToUpsert = new List<Product2>(); 
            
            for(Object item: equipments){
                Product2 newProd = new Product2();
                
                Map<String,Object> mapjson = (Map<String,Object>) item;
                newProd.ProductCode = (String) mapjson.get('_id');
                newProd.cost__c = (decimal) mapjson.get('cost');
                newProd.name = (String) mapjson.get('name');
                newProd.lifespan_Months__c = (decimal) mapjson.get('lifespan');
                newProd.maintenance_Cycle__c = (decimal) mapjson.get('maintenanceperiod');
                newProd.QuantityUnitOfMeasure = (String) mapjson.get('Quantity');
                newProd.replacement_Part__c = (Boolean) mapjson.get('replacement');
                newProd.stockKeepingUnit = (String) mapjson.get('sku');
                
                //system.debug(mapjson);
                //system.debug(mapjson.get('name'));
                
                productsToUpsert.add(newProd);
                
            }
            
            if(!productsToUpsert.isEmpty()){
                upsert productsToUpsert;                
            }
        }
    }
}
```


### enque job from execute anonymous
```apex
Id jobID = System.enqueueJob(new WarehouseCalloutService());
```


