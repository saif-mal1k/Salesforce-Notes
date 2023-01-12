## Create Contact by finding current system's location
![image](https://user-images.githubusercontent.com/63545175/211722125-5379670c-7de5-4d47-ad23-d2adc5368f71.png)


### Aura
```html
<aura:component implements="flexipage:availableForAllPageTypes,flexipage:availableForRecordHome,force:hasRecordId,force:lightningQuickAction,lightning:actionOverride" access="global" >
<c:createContact></c:createContact>
</aura:component>
```

### HTML
```html
<template>
  <lightning-card
    variant="Narrow"
    title="Create New Contact"
    icon-name="standard:contact"
  >
    <div class="demo-only demo-only--sizing slds-grid slds-wrap">
      <div class="slds-col slds-size_1-of-2">
        <div class="slds-p-around_small">
          <lightning-record-edit-form
            object-api-name="{contactObject}"
            onsuccess="{handleContactCreated}"
          >
            <label for="fieldid">* {fieldLabel}</label>
            <lightning-input-field
              id="fieldid"
              required="true"
              variant="label-hidden"
              field-name="{targetFieldApiName}"
              value="{value}"
              onchange="{handleChange}"
              disabled="{disabled}"
            >
            </lightning-input-field>
            <lightning-input-field
              field-name="{firstNameField}"
            ></lightning-input-field>
            <lightning-input-field
              field-name="{lastNameField}"
            ></lightning-input-field>

            <lightning-input-field
              field-name="{mailingAddress}"
              required="true"
              value="{currentAddressFromMap}"
            ></lightning-input-field>

            <br />

            <br />

            <br />

            <br />

            <lightning-button
              type="submit"
              variant="brand"
              label="Create Contact Record"
            ></lightning-button>
          </lightning-record-edit-form>
        </div>
      </div>

      <!-- second column i.e current address map -->

      <div class="slds-col slds-size_1-of-2">
        <div class="slds-p-around_small">
          <lightning-map
            map-markers="{lstMarkers}"
            zoom-level="{zoomlevel}"
          ></lightning-map>

          <br />

          <lightning-button
            variant="brand"
            label="Get Current Location"
            onclick="{handleClickGetCurrentLocation}"
            style="float: right"
          >
          </lightning-button>
          <template if:true="{alwaysHidden}">
            <lightning-button
              variant="brand"
              label="add as Address"
              onclick="{handleClickAddAddressToMap}"
              style="float: left"
            >
            </lightning-button>
          </template>

          <br />

          <br />
          <template if:true="{alwaysHidden}">
            <p>{currentAddressFromMap}</p>
          </template>
        </div>
      </div>
    </div>
  </lightning-card>

  <!-- pop to confirm when reocrd is created -->

  <template if:true="{isShowModal}">
    <section
      role="dialog"
      tabindex="-1"
      aria-labelledby="modal-heading-01"
      aria-modal="true"
      aria-describedby="modal-content-id-1"
      class="slds-modal slds-fade-in-open"
    >
      <div class="slds-modal__container">
        <!-- modal header start -->
        <header class="slds-modal__header">
          <button
            class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse"
            title="Close"
            onclick="{hideModalBox}"
          >
            <lightning-icon
              icon-name="utility:close"
              alternative-text="close"
              variant="inverse"
              size="small"
            ></lightning-icon>
            <span class="slds-assistive-text">Close</span>
          </button>
          <h2
            id="modal-heading-01"
            class="slds-text-heading_medium slds-hyphenate"
          >
            Contact record created
          </h2>
        </header>

        <!-- modal body start -->
        <div
          class="slds-modal__content slds-p-around_medium"
          id="modal-content-id-1"
        >
          <p>Contact record is created and it is submitted for approval.</p>
          <p>Click <b>OK</b> to go to detail page....</p>
        </div>

        <!-- modal footer start-->
        <footer class="slds-modal__footer">
          <a
            href="https://meri-dev-ed.trailblaze.lightning.force.com/lightning/o/Contact/list?filterName=Recent"
          >
            <button
              class="slds-button slds-button_neutral"
              onclick="{hideModalBoxNavigateToContactHome}"
            >
              OK
            </button></a
          >
        </footer>
      </div>
    </section>
    <div class="slds-backdrop slds-backdrop_open"></div>
  </template>
</template>

```


### JS
```js
import { LightningElement, api, track } from "lwc";
import { NavigationMixin } from "lightning/navigation";

import CONTACT_OBJECT from "@salesforce/schema/Contact";
import FIRST_NAME_FIELD from "@salesforce/schema/Contact.FirstName";
import LAST_NAME_FIELD from "@salesforce/schema/Contact.LastName";
//import USER_NAME from '@salesforce/schema/Contact.User__c.id';
import MAILING_ADDRESS from "@salesforce/schema/Contact.MailingStreet";

/**
 * Creates contact records.
 * confirm via popup modal.
 */

export default class CreateContactRecord extends LightningElement {
  // for pop up that confirms record creation

  @track isShowModal = false;
  @track isShowAddAddressBtn = false;
  @track alwaysHidden = false;

  showModalBox() {
    this.isShowModal = true;
  }

  hideModalBoxNavigateToContactHome() {
    this.isShowModal = false;

    // Navigate to the Contact home page
    this[NavigationMixin.Navigate](
      "https://meri-dev-ed.trailblaze.lightning.force.com/lightning/o/Contact/list?filterName=Recent"
    );
  }

  // end code for popup

  contactObject = CONTACT_OBJECT;

  handleContactCreated() {
    console.log("the contact record is created, and submitted for approval");

    this.isShowModal = true;
  }

  @api childObjectApiName = "Contact"; //Contact is the default value
  @api targetFieldApiName = "User__c"; //AccountId is the default value

  //User = targetFieldApiName;
  //myFields = [NAME_FIELD, MAILING_ADDRESS, User];

  firstNameField = FIRST_NAME_FIELD;

  lastNameField = LAST_NAME_FIELD;

  mailingAddress = MAILING_ADDRESS;

  @api fieldLabel = "Select User";
  @api disabled = false;
  @api value;
  @api required = false;

  handleChange(event) {
    // Creates the event
    const selectedEvent = new CustomEvent("valueselected", {
      detail: event.detail.value,
    });
    //dispatching the custom event
    this.dispatchEvent(selectedEvent);
  }

  @api isValid() {
    if (this.required) {
      this.template.querySelector("lightning-input-field").reportValidity();
    }
  }

  //for map i.e second column

  lstMarkers = [];
  zoomlevel = "1";

  @track currentAddressFromMap = "";

  handleClickGetCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Get the Latitude and Longitude from Geolocation API
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // Add Latitude and Longitude to the markers list.
        this.lstMarkers = [
          {
            location: {
              Latitude: latitude,
              Longitude: longitude,
            },
            title: "You are here",
          },
        ];
        this.zoomlevel = "4";

        const reverseGeocodingUrl =
          "https://api.geoapify.com/v1/geocode/reverse?lat=" +
          latitude +
          "&lon=" +
          longitude +
          "&apiKey=" +
          "XXXXXXXXXXXXXXXXXXXX";

        // call Reverse Geocoding API - https://www.geoapify.com/reverse-geocoding-api/
        fetch(reverseGeocodingUrl)
          .then((result) => result.json())
          .then((featureCollection) => {
            console.log(featureCollection);

            this.currentAddressFromMap =
              featureCollection.features[0].properties.formatted;
            console.log(featureCollection.features[0].properties.formatted);
          });

        console.log("lat:" + latitude + "lon:" + longitude);
      });

      // make "add as address" button visible
      this.isShowAddAddressBtn = true;
    }
  }

  // code for map end
}

```

<br/>

---

<br/>


## Find distance between two point on a map
![image](https://user-images.githubusercontent.com/63545175/211723058-6befed68-e2d0-4e62-ae81-c25c3a3ea5ee.png)

### HTML
```html
<template>
  <lightning-card
    variant="Narrow"
    title="Distance Calculator"
    icon-name="standard:contact"
  >
    <div class="demo-only demo-only--sizing slds-grid slds-wrap">
      <div class="slds-col slds-size_1-of-1">
        <div class="slds-p-around_small">
          <template if:true="{invisible}">
            <label class="slds-form-element__label" for="combobox-id-1"
              ><b>Current contact's address:</b></label
            >

            <template if:true="{contact.data}">
              <div class="slds-m-around_medium">
                <p>{currentAddress}</p>
              </div>
            </template>
          </template>

          <div
            class="slds-form-element"
            onmouseleave="{toggleResult}"
            data-source="lookupContainer"
          >
            <div class="slds-combobox_container slds-has-selection">
              <label class="slds-form-element__label" for="combobox-id-1"
                ><b>{label}</b></label
              >
              <div
                class="lookupInputContainer slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click"
                aria-expanded="false"
                aria-haspopup="listbox"
                role="combobox"
              >
                <div
                  class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left-right"
                  role="none"
                >
                  <div class="searchBoxWrapper slds-show">
                    <!--Lookup Input Field-->
                    <lightning-input
                      type="search"
                      data-source="searchInputField"
                      onclick="{toggleResult}"
                      onchange="{handleKeyChange}"
                      is-loading="{isSearchLoading}"
                      value="{searchKey}"
                      variant="label-hidden"
                      placeholder="{placeholder}"
                    ></lightning-input>
                  </div>

                  <!--Lookup Selected record pill container start-->
                  <div class="pillDiv slds-hide">
                    <span
                      class="slds-icon_container slds-combobox__input-entity-icon"
                    >
                      <lightning-icon
                        icon-name="{iconName}"
                        size="x-small"
                        alternative-text="icon"
                      ></lightning-icon>
                    </span>
                    <input
                      type="text"
                      id="combobox-id-1"
                      value="{selectedRecord.FirstName}"
                      class="slds-input slds-combobox__input slds-combobox__input-value"
                      readonly
                    />
                    <button
                      class="slds-button slds-button_icon slds-input__icon slds-input__icon_right"
                      title="Remove selected option"
                    >
                      <lightning-icon
                        icon-name="utility:close"
                        size="x-small"
                        alternative-text="close icon"
                        onclick="{handleRemove}"
                      ></lightning-icon>
                    </button>
                  </div>
                </div>

                <!-- lookup search result part start-->
                <div
                  style="margin-top: 0px"
                  id="listbox-id-5"
                  class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid"
                  role="listbox"
                >
                  <ul
                    class="slds-listbox slds-listbox_vertical"
                    role="presentation"
                  >
                    <template for:each="{lstResult}" for:item="obj">
                      <li
                        key="{obj.Id}"
                        role="presentation"
                        class="slds-listbox__item"
                      >
                        <div
                          data-recid="{obj.Id}"
                          onclick="{handelSelectedRecord}"
                          class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta"
                          role="option"
                        >
                          <span
                            style="pointer-events: none"
                            class="slds-media__figure slds-listbox__option-icon"
                          >
                            <span class="slds-icon_container">
                              <lightning-icon
                                icon-name="{iconName}"
                                size="small"
                                alternative-text="icon"
                              ></lightning-icon>
                            </span>
                          </span>
                          <span
                            style="pointer-events: none"
                            class="slds-media__body"
                          >
                            <span
                              class="slds-listbox__option-text slds-listbox__option-text_entity"
                              >{obj.FirstName} {obj.LastName}</span
                            >
                          </span>
                        </div>
                      </li>
                    </template>

                    <!--ERROR msg, if there is no records..-->
                    <template if:false="{hasRecords}">
                      <li
                        class="slds-listbox__item"
                        style="text-align: center; font-weight: bold"
                      >
                        No Records Found....
                      </li>
                    </template>
                  </ul>
                </div>
              </div>

              <br />

              <template if:true="{invisible}">
                co: {latitude1},{longitude1}

                <br />

                co: {latitude2},{longitude2}

                <br />
              </template>

              <label class="slds-form-element__label" for="combobox-id-1"
                ><b>Distance: </b> {distance}
              </label>

              <br />
              <template if:true="{invisible}">
                <label class="slds-form-element__label" for="combobox-id-1"
                  ><b>Selected Contact's Address:</b>
                </label>

                <template if:true="{contact.data}">
                  <div class="slds-m-around_medium">
                    <p>{selectedAddress}</p>
                    <!--                {selectedAddressItems}-->
                  </div>
                </template>
              </template>
            </div>
          </div>

          <br />

          <!-- show on map -->

          <lightning-map
            map-markers="{lstMarkers}"
            zoom-level="{zoomlevel}"
          ></lightning-map>
        </div>
      </div>
    </div>
  </lightning-card>
</template>

```

### JS
```js
import { LightningElement, api, wire, track } from "lwc";
// import apex method from salesforce module
import fetchLookupData from "@salesforce/apex/contactsController.getContactsWithAddress";
//import fetchDefaultRecord from '@salesforce/apex/CustomLookupLwcController.fetchDefaultRecord';

const DELAY = 300; // dealy apex callout timing in miliseconds

import { getRecord } from "lightning/uiRecordApi";

const FIELDS = ["Contact.MailingStreet"];

export default class CustomLookupLwc extends LightningElement {
  invisible = false;

  @api recordId;

  @wire(getRecord, { recordId: "$recordId", fields: FIELDS })
  contact;

  get currentAddress() {
    return this.contact.data.fields.MailingStreet.value;
  }

  // public properties with initial default values
  @api label = "Select contact to find his distance from current contact";
  @api placeholder = "search...";
  @api iconName = "standard:contact";
  @api sObjectApiName = "Contact";
  @api defaultRecordId = "";

  // private properties
  lstResult = []; // to store list of returned records
  hasRecords = true;
  searchKey = ""; // to store input field value
  isSearchLoading = false; // to control loading spinner
  delayTimeout;
  selectedRecord = {}; // to store selected lookup record in object formate
  selectedAddress = "";
  currentAddressItems = [""];
  selectedAddressItems = [""];

  // initial function to populate default selected lookup record if defaultRecordId provided
  connectedCallback() {
    if (this.defaultRecordId != "") {
      fetchDefaultRecord({
        recordId: this.defaultRecordId,
        sObjectApiName: this.sObjectApiName,
      })
        .then((result) => {
          if (result != null) {
            this.selectedRecord = result;
            this.handelSelectRecordHelper(); // helper function to show/hide lookup result container on UI
          }
        })
        .catch((error) => {
          this.error = error;
          this.selectedRecord = {};
        });
    }
  }

  // wire function property to fetch search record based on user input
  @wire(fetchLookupData)
  searchResult(value) {
    const { data, error } = value; // destructure the provisioned value
    this.isSearchLoading = false;
    if (data) {
      this.hasRecords = data.length == 0 ? false : true;
      this.lstResult = JSON.parse(JSON.stringify(data));
    } else if (error) {
      console.log("(error---> " + JSON.stringify(error));
    }
  }

  // update searchKey property on input field change
  handleKeyChange(event) {
    // Debouncing this method: Do not update the reactive property as long as this function is
    // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
    this.isSearchLoading = true;
    window.clearTimeout(this.delayTimeout);
    const searchKey = event.target.value;
    this.delayTimeout = setTimeout(() => {
      this.searchKey = searchKey;
    }, DELAY);
  }

  // method to toggle lookup result section on UI
  toggleResult(event) {
    const lookupInputContainer = this.template.querySelector(
      ".lookupInputContainer"
    );
    const clsList = lookupInputContainer.classList;
    const whichEvent = event.target.getAttribute("data-source");
    switch (whichEvent) {
      case "searchInputField":
        clsList.add("slds-is-open");
        break;
      case "lookupContainer":
        clsList.remove("slds-is-open");
        break;
    }
  }

  // method to clear selected lookup record
  handleRemove() {
    this.searchKey = "";
    this.selectedRecord = {};
    this.lookupUpdatehandler(undefined); // update value on parent component as well from helper function

    // remove selected pill and display input field again
    const searchBoxWrapper = this.template.querySelector(".searchBoxWrapper");
    searchBoxWrapper.classList.remove("slds-hide");
    searchBoxWrapper.classList.add("slds-show");

    const pillDiv = this.template.querySelector(".pillDiv");
    pillDiv.classList.remove("slds-show");
    pillDiv.classList.add("slds-hide");

    //remove address after deselecting contact
    this.selectedAddress = "";
  }

  //default values for map

  lstMarkers = [
    {
      location: {
        Street: "",
        City: "",
        State: "",
      },
      title: "",
    },
    {
      location: {
        Street: "",
        City: "",
        State: "",
      },
      title: "",
    },
  ];

  zoomlevel = "1";

  // code for map end

  @track latitude1;
  @track longitude1;

  @track latitude2;
  @track longitude2;

  @track distance;

  // method to update selected record from search result
  handelSelectedRecord(event) {
    var objId = event.target.getAttribute("data-recid"); // get selected record Id
    this.selectedRecord = this.lstResult.find((data) => data.Id === objId); // find selected record from list
    this.lookupUpdatehandler(this.selectedRecord); // update value on parent component as well from helper function
    this.handelSelectRecordHelper(); // helper function to show/hide lookup result container on UI

    // add address of selected contact, add it to ui
    this.selectedAddress = this.selectedRecord.MailingStreet;

    this.selectedAddressItems = this.selectedRecord.MailingStreet.split(", ");

    //console.log("list"+this.selectedAddressItems);

    // coonsidering array generate will be in format ["street","street2","city","state","country"]
    // update marker

    this.lstMarkers = [];

    var items = this.selectedAddressItems.length;

    let coordinateEntry = {
      location: {
        Street: this.selectedAddressItems[items - 4],
        City: this.selectedAddressItems[items - 3],
        State: this.selectedAddressItems[items - 2],
        Country: this.selectedAddressItems[items - 1],
      },
      //       icon: 'custom:custom26',
      title: "Selected Contact",
    };

    /*
this.lstMarkers[1].location.Country = this.selectedAddressItems[items-1];
this.lstMarkers[1].location.State = this.selectedAddressItems[items-2];
this.lstMarkers[1].location.City = this.selectedAddressItems[items-3];
this.lstMarkers[1].location.Street = this.selectedAddressItems[items-4];
*/
    this.lstMarkers.push(coordinateEntry);

    //console.log(this.lstMarkers);

    //console.log(this.currentAddress);

    //console.log(this.contact.data.fields.MailingStreet.value);

    this.currentAddressItems = this.currentAddress.split(", ");

    var items = this.currentAddressItems.length;

    let coordinateEntryy = {
      location: {
        Street: this.currentAddressItems[items - 4],
        City: this.currentAddressItems[items - 3],
        State: this.currentAddressItems[items - 2],
        Country: this.currentAddressItems[items - 1],
      },
      //     icon: 'custom:custom26',
      title: "Current Contact",
    };

    this.lstMarkers.push(coordinateEntryy);

    // get geocode of current address
    const apiUrl =
      "https://api.geoapify.com/v1/geocode/search?text=" +
      this.currentAddress +
      "&format=json&apiKey=" +
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

    // get geocode of selected address
    const apiUrl2 =
      "https://api.geoapify.com/v1/geocode/search?text=" +
      this.selectedAddress +
      "&format=json&apiKey=" +
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

    // call Reverse Geocoding API - https://www.geoapify.com/reverse-geocoding-api/
    fetch(apiUrl)
      .then((result) => result.json())
      .then((featureCollection) => {
        console.log("data");
        console.log(featureCollection);

        this.latitude1 = featureCollection.results[0].lat;
        this.longitude1 = featureCollection.results[0].lon;
      })
      .then(() => {
        fetch(apiUrl2)
          .then((result) => result.json())
          .then((featureCollection) => {
            console.log("data2");
            console.log(featureCollection);

            this.latitude2 = featureCollection.results[0].lat;
            this.longitude2 = featureCollection.results[0].lon;
          });
      });

    this.distance = "calculating....";

    setTimeout(() => {
      // how to make it wait for previous to complete ?

      let lon1 = this.longitude1;
      let lon2 = this.longitude2;
      let lat1 = this.latitude1;
      let lat2 = this.latitude2;

      // calculatec distance
      // The math module contains a function
      // named toRadians which converts from
      // degrees to radians.
      lon1 = (lon1 * Math.PI) / 180;
      lon2 = (lon2 * Math.PI) / 180;
      lat1 = (lat1 * Math.PI) / 180;
      lat2 = (lat2 * Math.PI) / 180;

      // Haversine formula
      let dlon = lon2 - lon1;
      let dlat = lat2 - lat1;
      let a =
        Math.pow(Math.sin(dlat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

      let c = 2 * Math.asin(Math.sqrt(a));

      // Radius of earth in kilometers. Use 3956
      // for miles
      let r = 6371;

      // calculate the result
      this.distance = c * r;

      this.distance = parseFloat(this.distance).toFixed(2) + " Km";

      //console.log(this.distance);

      //console.log(distance);
    }, 3000);
  }

  /*COMMON HELPER METHOD STARTED*/

  handelSelectRecordHelper() {
    this.template
      .querySelector(".lookupInputContainer")
      .classList.remove("slds-is-open");

    const searchBoxWrapper = this.template.querySelector(".searchBoxWrapper");
    searchBoxWrapper.classList.remove("slds-show");
    searchBoxWrapper.classList.add("slds-hide");

    const pillDiv = this.template.querySelector(".pillDiv");
    pillDiv.classList.remove("slds-hide");
    pillDiv.classList.add("slds-show");
  }

  // send selected lookup record to parent component using custom event
  lookupUpdatehandler(value) {
    const oEvent = new CustomEvent("lookupupdate", {
      detail: { selectedRecord: value },
    });
    this.dispatchEvent(oEvent);
  }
}

```

### CSS
```css
.pillSize{
    width : 100%
}

lightning-radio-group .slds-radio_faux {
    margin-right: 10px;
}

.slds-modal__content{
    overflow: initial;
}
```
