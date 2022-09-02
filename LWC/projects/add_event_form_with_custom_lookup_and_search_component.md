# parent component add Event form

### html
```html
<template>
    <lightning-card variant="Narrow" title="Event Information" icon-name="standard:event">
        <div class="slds-m-around_small">
            <template if:true={errors}>
                {errors}
            </template>
        </div>
        <div class="slds-m-around_small">
            <lightning-input type="text" required variant="standard" name="Name" value={eventRecord.Name} label="Name"
                onchange={handleChange}>
            </lightning-input>
            <c-customlwclookup onselect={handleLookup} object-name="Event_Organizer__c" field-name="Name"
                parentidfield="Event_Organizer__c" iconname="standard:people" label="Event Organizer">
            </c-customlwclookup>
            <br />
            <lightning-input type="datetime" required variant="standard" name="Start_DateTime__c" label="Start Date"
                value={eventRecord.Start_DateTime__c} onchange={handleChange}>
            </lightning-input>
            <lightning-input type="datetime" variant="standard" value={eventRecord.End_Date_Time__c}
                name="End_Date_Time__c" label="End Date" onchange={handleChange}>
            </lightning-input>
            <lightning-input type="number" required variant="standard" value={eventRecord.Max_Seats__c}
                name="Max_Seats__c" label="Max Attendees" onchange={handleChange}>
            </lightning-input>
            <c-customlwclookup onselect={handleLookup} object-name="Location__c" field-name="Name"
                parentidfield="Location__c" iconname="utility:location" label="Event Location"></c-customlwclookup>
            <br />
            <lightning-input-rich-text required type="number" variant="standard" value={eventRecord.Event_Detail__c}
                name="Event_Detail__c" label="Event Details" onchange={handleChange}>
            </lightning-input-rich-text>
        </div>
        <div class="slds-m-around_small">
            <lightning-button label="Cancel" title="Cancel" onclick={handleCancel}>
            </lightning-button>
            &nbsp; &nbsp;
            <lightning-button variant="brand" label="Add Event" title="Add Event" onclick={handleClick}>
            </lightning-button>
        </div>
    </lightning-card>
</template> 
```

### js
```js

import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import EVT_OBJECT from '@salesforce/schema/Event__c';
import Name_F from '@salesforce/schema/Event__c.Name__c';
import Event_Organizer__c from '@salesforce/schema/Event__c.Organizer__c';
import Start_DateTime__c from '@salesforce/schema/Event__c.Start_Date_Time__c';
import End_Date_Time__c from '@salesforce/schema/Event__c.End_Date_Time__c';
import Max_Seats__c from '@salesforce/schema/Event__c.Max_Seats__c';
import Location__c from '@salesforce/schema/Event__c.Location__c';
import Event_Detail__c from '@salesforce/schema/Event__c.Event_Details__c';

import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AddEvent extends NavigationMixin(LightningElement) {

    @track eventRecord = {
        Name: '',
        Event_Organizer__c: '',
        Start_DateTime__c: null,
        End_Date_Time__c: null,
        Max_Seats__c: null,
        Location__c: '',
        Event_Detail__c: ''
    }

    @track errors;

    handleChange(event) {
        let value = event.target.value;
        let name = event.target.name;
        this.eventRecord[name] = value;
        // MaxFIT Campaign
        // Name
        // this.eventRecord[Name] = 'MaxFIT Campaign'
    }
    /*
        Event__c newEvent = new event__c();
        newEvent.Name = '';
        newEvent.Location__c = '098203u84';
    */

    handleLookup(event) {
        let selectedRecId = event.detail.selectedRecordId;
        let parentField = event.detail.parentfield;
        this.eventRecord[parentField] = selectedRecId;
        // selectedRecId = aiwue7836734834
        // Location__c
        // this.eventRecord[Location__c] = selectedRecId;
    }

    handleClick() {
        const fields = {};
        fields[Name_F.fieldApiName] = this.eventRecord.Name;
        fields[Event_Organizer__c.fieldApiName] = this.eventRecord.Event_Organizer__c;
        fields[Start_DateTime__c.fieldApiName] = this.eventRecord.Start_DateTime__c;
        fields[End_Date_Time__c.fieldApiName] = this.eventRecord.End_Date_Time__c;
        fields[Max_Seats__c.fieldApiName] = this.eventRecord.Max_Seats__c;
        fields[Location__c.fieldApiName] = this.eventRecord.Location__c;
        fields[Event_Detail__c.fieldApiName] = this.eventRecord.Event_Detail__c;

        const eventRecord = { apiName: EVT_OBJECT.objectApiName, fields };

        createRecord(eventRecord)
            .then((eventRec) => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Record Saved',
                    message: 'Event Draft is Ready',
                    variant: 'success'
                }));
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        actionName: "view",
                        recordId: eventRec.id
                    }
                });
            }).catch((err) => {
                this.errors = JSON.stringify(err);
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Error Occured',
                    message: this.errors,
                    variant: 'error'
                }));
            });
    }

    handleCancel() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "home",
                objectApiName: "Event__c"
            }
        });
    }
}
```

### xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>48.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>Add Event Record</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
        <target>lightning__AppPage</target>
        <target>lightning__HomePage</target>
        <target>lightningCommunity__Page</target>
        <target>lightningCommunity__Default</target>
    </targets>
</LightningComponentBundle>
```


## child component Name : customLookUp.html ``this component using below cmp1&cmp2``

### html
```html
<template>
    <div class="slds-m-padding_around">
        <template if:false={selectedRecord}>
            <c-lwcsearchcomponent onsearch={hanldeSearch} search-label={label} isrequired="true"></c-lwcsearchcomponent>
        </template>
    </div>
    <div class="slds-m-padding_around slds-listbox slds-scrollable_y">
        <template if:false={selectedRecord}>
            <template if:true={records}>
                <template for:each={records} for:item="rec" for:index="index">
                    <ul key={rec.Id}>
                        <c-lwcrecordlist key={rec.Id} rec={rec} iconname={iconname} onselect={handleSelect}>
                        </c-lwcrecordlist>
                    </ul>
                </template>
            </template>
        </template>
        <template if:true={selectedRecord}>
            <label class="slds-form-element__label" for="unique-id-of-input">
                {label}
            </label>
            <div class="slds-pill-container">
                <lightning-pill class="pillSize" href="JavaScript:void(0);" label={selectedRecord.Name}
                    name={selectedRecord.Name} onremove={handleRemove}>
                    <lightning-icon icon-name={iconname} variant="circle" alternative-text={objectName}>
                    </lightning-icon>
                </lightning-pill>
            </div>
        </template>
    </div>
</template>
```

### js
```js

import { LightningElement, api, track } from 'lwc';
import searchRecords from '@salesforce/apex/CustomSearchController.searchRecords';

export default class Customlwclookup extends LightningElement {

    @api objectName = 'Account';
    @api fieldName = 'Name';
    @api iconname = 'standard:record';
    @api label = 'Account';
    @api parentidfield = 'AccountId';

    /* private property */
    @track records;
    @track selectedRecord;

    hanldeSearch(event) {

        var searchVal = event.detail.value;
        searchRecords({
            objName: this.objectName,
            fieldName: this.fieldName,
            searchKey: searchVal
        })
            .then(data => {
                if (data) {
                    let parsedResponse = JSON.parse(data);
                    let searchRecordList = parsedResponse[0];
                    for (let i = 0; i < searchRecordList.length; i++) {
                        let record = searchRecordList[i];
                        record.Name = record[this.fieldName];

                    }
                    this.records = searchRecordList;
                }
            })
            .catch(error => {
                window.console.log(' error ', error);
            });
    }

    handleSelect(event) {
        var selectedVal = event.detail.selRec;
        this.selectedRecord = selectedVal;
        let finalRecEvent = new CustomEvent('select', {
            detail: { selectedRecordId: this.selectedRecord.Id, parentfield: this.parentidfield }
        });
        this.dispatchEvent(finalRecEvent);
    }

    handleRemove() {
        this.selectedRecord = undefined;
        this.records = undefined;
        let finalRecEvent = new CustomEvent('select', {
            detail: { selectedRecordId: undefined, parentfield: this.parentidfield }
        });
        this.dispatchEvent(finalRecEvent);
    }

}
```

### xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>55.0</apiVersion>
    <isExposed>true</isExposed>    
    <targets> <!-- target specify where this component will be used-->
        <target>lightning__RecordPage</target>
    </targets>
</LightningComponentBundle>
```

--- 

## required apex class
```apex

public with sharing class CustomSearchController {
    
    @AuraEnabled
    public static String searchRecords(String objName, String fieldName, String searchKey){
        String searchKeyword = searchKey + '*';
        String returningQuery = objName+' ( Id, '+fieldName+')';
        String query = 'FIND :searchKeyword IN ALL FIELDS RETURNING '+returningQuery+' LIMIT 2000';
        List<List<sObject>> sobjectList = Search.query(Query);
        return JSON.serialize(sobjectList);
    }
}
```

---

## chld cmp 1 name: lwcrecordlist

### html
```html
<template>
  <div style="background-color: white; padding: 10px 10px 10px 10px; border-radius:0.25rem;">
  <li
    role="presentation"
    class="slds-listbox__item slds-p-top_small"
    onclick={handleSelect}
  >
    <span
      id="listbox-option-unique-id-01"
      class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta"
      role="option"
    >
      <span class="slds-media__figure">
        <span class="slds-icon_container" title="Icon">
          <lightning-icon icon-name={iconname} size="small"></lightning-icon>
          <span class="slds-assistive-text">Icon</span>
        </span>
      </span>
      <span class="slds-media__body">
        <span class="slds-listbox__option-text slds-listbox__option-text_entity"
          >{rec.Name}</span
        >
      </span>
    </span>
  </li>
  </div>
</template>
```

### js
```js
import { LightningElement, api } from "lwc";

export default class Lwcrecordlist extends LightningElement {
  /* Public Property to pass the single record & iconname */
  @api rec;
  @api iconname = "standard:account";
  @api parentidfield;

  handleSelect() {
    let selectEvent = new CustomEvent("select", {
      detail: {
        selRec: this.rec,
        parent: this.parentidfield
      }
    });
    this.dispatchEvent(selectEvent);
  }

  handleRemove() {
    let selectEvent = new CustomEvent("select", {
      detail: {
        selRec: undefined,
        parent: this.parentidfield
      }
    });
    this.dispatchEvent(selectEvent);
  }
}
```

### xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>55.0</apiVersion>
    <isExposed>true</isExposed>
    <!-- child component does not have targets -->
</LightningComponentBundle>
```

---

## child cmp 2 ame: lwcsearchcomponent

### html
```html
<template>
  <div style="background-color: white; border-radius:0.25rem; border-style: solid; border-width:1px;"> 
  <lightning-input
    type="search"
    value={searckKeyword}
    onchange={handleChange}
    label={searchLabel}
  >
  </lightning-input>
  </div>
</template>
```

### js
```js

import { LightningElement, api, track } from "lwc";

export default class Lwcsearchcomponent extends LightningElement {
  @track searckKeyword;
  @api isrequired = "false";
  @api searchLabel = "Search Account";
  @api showLabel = "true";

  /* Check the isrequired prop is true then set the prop to true*/
  renderedCallback() {
    if (this.isrequired === "false") return;
    if (this.isrequired === "true") {
      let picklistInfo = this.template.querySelector("lightning-input");
      picklistInfo.required = true;
      this.isrequired = "false";
    }
  }

  handleChange(event) {
    var keyword = event.target.value;
    /* Create & dispatch the event to parent component with the search keyword */
    if (keyword && keyword.length >= 2) {
      let searchEvent = new CustomEvent("search", {
        detail: { value: keyword }
      });
      this.dispatchEvent(searchEvent);
    }
  }
}
```


### xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>50.0</apiVersion>
    <isExposed>true</isExposed>
    <!-- child component does not have targets -->
</LightningComponentBundle>
```


