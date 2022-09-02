# component Name : customLookUp.html

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

## chld component 1 name: lwcrecordlist

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

## child component 2 name: lwcsearchcomponent

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


