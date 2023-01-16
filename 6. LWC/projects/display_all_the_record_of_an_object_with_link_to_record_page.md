### Display all the records of an object with link to record page

## output
![image](https://user-images.githubusercontent.com/63545175/201847659-6596df71-1da4-4644-8e83-a95d7bb17f16.png)

### javascript
```js
// wireGetRecordDynamicContact.js
import { LightningElement, api, wire, track } from 'lwc';

import getRecordsList from '@salesforce/apex/QlikReportsAccessController.getRecordsList';
import { NavigationMixin } from "lightning/navigation";

export default class showRecordsOf_QlikReportsAccessController extends NavigationMixin(LightningElement) {

    navigateToRecordPage(event) {
        //  console.log('id => ' + event.currentTarget.dataset.recordidd);

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.currentTarget.dataset.recordidd, //this.recordId,
                objectApiName: 'Qlik_Reports_Access_Controller__c',
                actionName: 'view'
            },
        });
    };

    @track columns = [{
        label: 'Qlik Reports Access Controller Name',
        fieldName: 'Name',
        type: 'text',
        sortable: true
    },
    {
        label: 'Report Name(Text)',
        fieldName: 'Report_Name_Text__c',
        type: 'text',
        sortable: true
    }
];

@track error;
@track recordsList ;
@wire(getRecordsList)
wiredRecords({
    error,
    data
}) {
    if (data) {
        this.recordsList = data;
    } else if (error) {
        this.error = error;
    }
}

}
```

### html
```html
<template >
    <lightning-card title="All Records of, Qlik Reports Access Controller" icon-name="standard:contact">
    
        <lightning-layout multiple-rows>
            <template for:each={recordsList} for:item="record">

                <lightning-layout-item size="6" key={record.Id} padding="around-small" >
                    <div class="slds-box">
                        <a data-recordidd={record.Id} onclick={navigateToRecordPage} key={record.Id}>
                            <p style=" font-size: large;   font-weight: bolder; text-align: center; "> {record.Name}  </p>
                        </a>    
                    </div>
                </lightning-layout-item>

            </template>        
        </lightning-layout>

    </lightning-card>
</template>
```

### xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>55.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>ShowRecords</masterLabel>
    <targets>

        <target>lightning__AppPage</target>
        <target>lightning__HomePage</target>
        <target>lightning__RecordPage</target>

    </targets>
</LightningComponentBundle>
```

### Class
```apex
public with sharing class QlikReportsAccessController {
    @AuraEnabled(cacheable=true)
    public static List<Qlik_Reports_Access_Controller__c> getRecordsList() {
        return [SELECT Id, Name, Report_Link_URL__c, 
            Report_Location_TextArea__c, Report_Name_Text__c
            FROM Qlik_Reports_Access_Controller__c ];
    }
}
```

