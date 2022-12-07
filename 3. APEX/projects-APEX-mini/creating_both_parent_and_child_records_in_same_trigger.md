<details>
<summary> <h3> usecase </h3> </summary>
<p>
 
- When an existing maintenance request of type Repair or Routine Maintenance is closed, create a new maintenance request for a future routine checkup. This new maintenance request is tied to the same Vehicle and Equipment Records as the original closed request. This new request's Type should be set as Routine Maintenance. The Subject should not be null and the Report Date field reflects the day the request was created. Remember, all equipment has maintenance cycles.

- Calculate the maintenance request due dates by using the maintenance cycle defined on the related equipment records. If multiple pieces of equipment are used in the maintenance request, define the due date by applying the shortest maintenance cycle to today’s date.

- Design the code to work for both single and bulk maintenance requests. Bulkify the system to successfully process approximately 300 records of offline maintenance requests that are scheduled to import together.  
  
</p>  
</details>


<br/>


<details>
  <summary> <h3> object relationship </h3> </summary>
<p>

<img src="https://user-images.githubusercontent.com/63545175/206152863-ce81c9ac-0d2b-40fe-bd19-a3610ff59dd4.png" width="720px">
  
</p>  
</details>


<br/>



### solution
```apex
public class MaintenanceRequestTriggerHandler {
    
    public static void scheduleNextMaintenance(Map<Id,Case> updatedMaintenanceRequests){
        
        // set of ids of maintenance requests that are getting rescheduled
        Set<Id> setOfMntReqIds = new Set<Id>();
        system.debug('Set of maintenance request that are getting rescheduled:'+setOfMntReqIds);
        
        /*------------ step one -------------*/
        // create new maintenance records,
        // create map<updated maintence record id, newly created maintence record>
        Map<Id,Case> mapUpdtMntNewMnt = new Map<Id,case>();
        for(Case maintenanceRequest: updatedMaintenanceRequests.values()){
            if((maintenanceRequest.Type == 'Routine Maintenance' || MaintenanceRequest.Type == 'Repair') && maintenanceRequest.Status == 'Closed'){
                // add Id to set of ids of maintenance requests that are getting rescheduled
                setOfMntReqIds.add(maintenanceRequest.Id);
                // Create new maintenace Request
                Case newMaintenanceRequest = new Case();
                newMaintenanceRequest.Vehicle__c = maintenanceRequest.Vehicle__c;
                newMaintenanceRequest.ProductId = maintenanceRequest.ProductId;
                newMaintenanceRequest.Type = 'Routine Maintenance';
                newMaintenanceRequest.Subject = 'next scheduled Routine Maintenance';
                newMaintenanceRequest.Date_Due__c = system.today() + 15 ;
                newMaintenanceRequest.Date_Reported__c = system.today();
                
                // add it to map
                mapUpdtMntNewMnt.put(maintenanceRequest.Id, newMaintenanceRequest);                
                
            }
        }
        if(!mapUpdtMntNewMnt.values().isEmpty()){
            insert mapUpdtMntNewMnt.values();
        }
        system.debug('Set of maintenance request that are getting rescheduled, after Step 1:'+setOfMntReqIds);
        system.debug('map after step 1:'+mapUpdtMntNewMnt);

        
        /*------------ step two -------------*/
        // query related equipment maintenance item records,
        // create map<updated maintenace record Id, related latest equipment maintenence items record>        
        List<Equipment_Maintenance_Item__c> EqpmntMntItmsToUpdate = [SELECT Id, Maintenance_Request__c,Equipment__c FROM Equipment_Maintenance_Item__c WHERE Maintenance_Request__c IN :setOfMntReqIds];
        system.debug('EqpmntMntItmsToUpdate:'+EqpmntMntItmsToUpdate);
        
        Map<Id,List<Equipment_Maintenance_Item__c>> mapUpdtMntRelEqpts = new Map<Id,List<Equipment_Maintenance_Item__c>>();
        for(Equipment_Maintenance_Item__c eqpmt: EqpmntMntItmsToUpdate){
            
            if(!mapUpdtMntRelEqpts.containsKey(Eqpmt.Maintenance_Request__c)){
                List<Equipment_Maintenance_Item__c> listOfEqpmntRecords = new List<Equipment_Maintenance_Item__c>();
                listOfEqpmntRecords.add(eqpmt);
                mapUpdtMntRelEqpts.put(eqpmt.Maintenance_Request__c, listOfEqpmntRecords);
            }            
            else if(mapUpdtMntRelEqpts.containsKey(Eqpmt.Maintenance_Request__c)){
                List<Equipment_Maintenance_Item__c> listOfEqpmntRecords = new List<Equipment_Maintenance_Item__c>();
                listOfEqpmntRecords = mapUpdtMntRelEqpts.get(eqpmt.Maintenance_Request__c);
                listOfEqpmntRecords.add(eqpmt);
                mapUpdtMntRelEqpts.put(eqpmt.Maintenance_Request__c, listOfEqpmntRecords);
            }
        }
        system.debug('map after step 2:'+mapUpdtMntRelEqpts);
        

        /*------------ step three -------------*/
        // use the above created maps to link newly created maintence records
        // to their corresponding equiment maintenance item records 
        List<Equipment_Maintenance_Item__c> EquipmentsToInsert = new List<Equipment_Maintenance_Item__c>();
        for(Id idd: setOfMntReqIds){
            
            for(Equipment_Maintenance_Item__c eqpmt: mapUpdtMntRelEqpts.get(idd)){
                system.debug('mapUpdtMntNewMnt.get(idd)'+mapUpdtMntNewMnt.get(idd));
                system.debug('mapUpdtMntNewMnt.get(idd).id'+mapUpdtMntNewMnt.get(idd).id);
                
                Equipment_Maintenance_Item__c newEqpmt = new Equipment_Maintenance_Item__c();
                newEqpmt.Maintenance_Request__c = mapUpdtMntNewMnt.get(idd).Id;
                newEqpmt.Equipment__c = eqpmt.Equipment__c;
                EquipmentsToInsert.add(newEqpmt);
            }
        }
        if(!EquipmentsToInsert.isEmpty()){
            insert EquipmentsToInsert;
        }
        system.debug('Equipments to insert:'+EquipmentsToInsert);
    }
}

```





