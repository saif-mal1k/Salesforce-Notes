
![image](https://user-images.githubusercontent.com/63545175/212865868-6a8989a8-2bcc-4d35-9f36-51af66103de3.png)


### HTML
```html

<template>
	<div style="float:left; width: 69%;">
		<lightning-card title="Search Your Car">
			<lightning-layout horizontal-align="center" vertical-align="end">

				<div class="slds-var-m-top_large slds-var-p-right_medium">
					<template if:true={vehiclePicklist.data}>
						<lightning-layout-item size="6">
							<lightning-combobox name="All Types" placeholder="All Types" value={value}
								style="width:150px;" options={vehiclePicklist.data.values} onchange={handleChange}>
							</lightning-combobox>
						</lightning-layout-item>
					</template>
				</div>

				<lightning-layout-item>
					<lightning-button label="Submit" variant="brand" onclick={onSubmit}></lightning-button>
				</lightning-layout-item>&nbsp;&nbsp;&nbsp;&nbsp;

				<lightning-layout-item>
					<lightning-button class="navitem" variant="" color="blue" label="New" title="add New"
						onclick={showModalBox}>
					</lightning-button>
				</lightning-layout-item>
			</lightning-layout>
		</lightning-card>

		<br/>


		<!-- modal start -->
		<template if:true={isShowModal}>
			<!--    I Used SLDS for this code    Here is     -->
			<section role="dialog" tabindex="-1" aria-labelledby="modal-heading-01" aria-modal="true"
				aria-describedby="modal-content-id-1" class="slds-modal slds-fade-in-open">
				<div class="slds-modal__container">
					<!-- modal header start -->
					<header class="slds-modal__header">
						<button class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse"
                        title="Close" onclick={hideModalBox}>
                        <lightning-icon icon-name="utility:close" alternative-text="close" variant="inverse"
                            size="small"></lightning-icon>
                        <span class="slds-assistive-text">Close</span>
                    </button>
						<h2 id="modal-heading-01" class="slds-text-heading_medium slds-hyphenate"> Create a new car</h2>
					</header><!-- modal body start -->
					<div class="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
						Modals - Lightning Design System

						<lightning-record-form object-api-name={vehicleObject} fields={myFields}
							onsuccess={handleVehicleCreated}>
						</lightning-record-form>
					</div>
					<!-- modal footer start-->
					<footer class="slds-modal__footer">
						<button class="slds-button slds-button_neutral" onclick={hideModalBox}>Cancel</button>
					</footer>
				</div>
			</section>
			<div class="slds-backdrop slds-backdrop_open"></div>
		</template>
		<!-- modal end -->



		<lightning-card title="Matching Cars">
			<div style="justify-content: center; align-items: center; align-content: center;">

				<br />

				<lightning-layout style="margin: 0px;" class="slds-var-m-around_medium" multiple-rows>
					<template if:true={getList}>
						<template for:each={getList} for:item="vehicle">
							<lightning-layout-item key={vehicle.Id}>
								<a key={vehicle.Id} onclick={clickCar} data-value={vehicle.Id}>
									<div class="container">
										<img src={vehicle.Picture_URL__c} alt={vehicle.Name} aria-label={vehicle.Name}
                                    key={vehicle.Id} class="image"></img>
										<div class="bottom-right "><span>{vehicle.Name}</span></div>
									</div>
								</a>
							</lightning-layout-item>
							&nbsp;
						</template>
					</template>
				</lightning-layout>
			</div>
		</lightning-card>
	</div>


	<div style="position:fixed; top: 180px; right: 12px; float: right; width: 29%;">
		<lightning-card title="Your Car Details">
			<template if:true={singleRecordData}>
				<div style="width: 100%; height: 20%; margin-left: 10px; margin-right: 10px;">
					<a href={RecentUserUrl}>
						<img src={ProfilePicture} style=" -webkit-filter: drop-shadow(5px 5px 5px #222); filter: drop-shadow(5px 5px 5px #222);  float:right; border-radius: 70%; width:90px; height: 90px; margin-right: 50px; margin-bottom: 15px; " >
                        </a>
						<table
							style="margin: 15px; width:fit-content; align-self: center; border-color: black; border-width: 2px;">
							<tr>
								<td align="right">
									<p style="margin-left: 15px; margin-right: 5px; margin-bottom: 5px; "
										key={vehicle.Model__c}> <b>recent User </b> </p>
								</td>
								<td align="left">: &nbsp; &nbsp; <a href={RecentUserUrl}>{RecentUser}</a> </td>
							</tr>
							<tr>
								<td align="right">
									<p style="margin-left: 15px; margin-right: 5px;  margin-bottom: 5px; "
										key={vehicle.Id}> <b>recent location </b> </p>
								</td>
								<td align="left"> : &nbsp; &nbsp; {RecentLocation} </td>
							</tr>
							<tr>
								<td align="right">
									<p style="margin-left: 15px;  margin-right: 5px; margin-bottom: 5px; "
										key={vehicle.Vehicle_Price__c}> <b>travelled</b> </p>
								</td>
								<td align="left" style="color:green;"> : &nbsp; &nbsp; {Distance} km </td>
							</tr>
							<tr>
								<td align="right">
									<p style="margin-left: 15px; margin-right: 5px; margin-bottom: 5px; "
										key={vehicle.Vehicle_Type__c}> <b>Fuel Used </b> </p>
								</td>
								<td align="left">: &nbsp; &nbsp; {FuelUsed} ltrs</td>
							</tr>
						</table>
				</div>

				<br/>

				<div
					style=" display: flex; justify-content: center;  align-items: center; overflow: hidden; width: 100% !important; height: 14vw !important;  margin:0%">
					<p style="margin: 15px;" key={vehicle.Picture_URL__c}>
						<img src={PictureURL} style=" flex-shrink: 0; min-width: 100%;  height: auto;   margin:0%" ></img>
					</p>
				</div>


				<table
					style="margin: 15px; width:fit-content; align-self: center; border-color: black; border-width: 2px;">
					<tr>
						<td align="right">
							<p style="margin-left: 15px; margin-right: 5px;  margin-bottom: 5px; " key={vehicle.Id}>
								<b>Car Name </b> </p>
						</td>
						<td align="left"> : &nbsp; &nbsp; {name} </td>
					</tr>
					<tr>
						<td align="right">
							<p style="margin-left: 15px; margin-right: 5px; margin-bottom: 5px; "
								key={vehicle.Model__c}> <b>Model </b> </p>
						</td>
						<td align="left">: &nbsp; &nbsp; {model} </td>
					</tr>
					<tr>
						<td align="right">
							<p style="margin-left: 15px; margin-right: 5px; margin-bottom: 5px; "
								key={vehicle.Vehicle_Type__c}> <b>Type </b> </p>
						</td>
						<td align="left">: &nbsp; &nbsp; {vehicleType} </td>
					</tr>

					<tr>
						<td align="right">
							<p style="margin-left: 15px;  margin-right: 5px; margin-bottom: 5px; "
								key={vehicle.Vehicle_Price__c}> <b>Odometer</b> </p>
						</td>
						<td align="left" style="color:green;"> : &nbsp; &nbsp; {Odometer} km</td>
					</tr>
					<tr>
						<td align="right">
							<p style="margin-left: 15px; margin-right: 5px; margin-bottom: 5px; "
								key={vehicle.Vehicle_Type__c}> <b>Mileage </b> </p>
						</td>
						<td align="left">: &nbsp; &nbsp; {mileage} km/lt</td>
					</tr>
				</table>
			</template>
		</lightning-card>
	</div>
</template>

```


### JS
```js
import { LightningElement, wire, track } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import VEHICLE_OBJECT from '@salesforce/schema/Vehicle__c';
import VEHICLETYPE_FIELD from '@salesforce/schema/Vehicle__c.Vehicle_Type__c';
import getVehicleDetails from '@salesforce/apex/VehicleController.getVehicleList';
import NAME_FIELD from '@salesforce/schema/Vehicle__c.Name';
import VEHICLE_TYPE__C from '@salesforce/schema/Vehicle__c.Vehicle_Type__c';
import FUEL__C_FIELD from '@salesforce/schema/Vehicle__c.Fuel_Type__c';
import MODEL__C_FIELD from '@salesforce/schema/Vehicle__c.Model__c';
import PICTURE_URL__C from '@salesforce/schema/Vehicle__c.Picture_URL__c';
import VEHICLE_PRICE__C from '@salesforce/schema/Vehicle__c.Vehicle_Price__c';
import Recent_Location from '@salesforce/schema/Vehicle__c.Recent_Location__c';
import Distance_travelled from '@salesforce/schema/Vehicle__c.Recent_Location__r.Distance_Km__c';
import Fuel_Used from '@salesforce/schema/Vehicle__c.Recent_Location__r.Fuel_Used__c';
import RECENT_USER__c from '@salesforce/schema/Vehicle__c.Recent_User__r.Name';
import RECENT_Location__c from '@salesforce/schema/Vehicle__c.Recent_Location__r.Name';
import RECENT_USER from '@salesforce/schema/Vehicle__c.Recent_User__c';
import Profile_Picture__c from '@salesforce/schema/Vehicle__c.Recent_User__r.Profile_Picture__c';
import Odometer from '@salesforce/schema/Vehicle__c.Odometer__c';

export default class VehicleData extends LightningElement {
    value = '';
    selectedValue;
    @track vehiclesList = [];
    @track getList = [];
    singleRecordData = false;
    name;
    fuelType;
    vehicleType;
    PictureURL;
    vehiclePrice;
    model;
    Distance;
    FuelUsed;
    RecentUser;
    RecentLocation;
    ProfilePicture;
    RecentUserId;
    RecentUserUrl;
    Odometer;
    mileage;

    @wire(getObjectInfo, { objectApiName: VEHICLE_OBJECT })
    vehicleMetadata;

    @wire(getPicklistValues,
        {
            recordTypeId: '$vehicleMetadata.data.defaultRecordTypeId',
            fieldApiName: VEHICLETYPE_FIELD
        }
    )
    vehiclePicklist;
    //  picklist value to show the selected value
    handleChange(event) {
        this.value = event.detail.value;
        this.selectedValue = event.detail.value;
    }
    connectedCallback() {
        getVehicleDetails()
            .then(result => {
                this.vehiclesList = result;
                this.getList = result;
                //   alert(JSON.stringify(this.vehiclesList))
            }).catch(error => {
                alert(JSON.stringify(error))
            });
    }
    onSubmit(event) {
        const strList = [];
        for (var i = 0; i < this.vehiclesList.length; i++) {
            if (this.vehiclesList[i].Vehicle_Type__c == this.selectedValue) {
                strList.push(this.vehiclesList[i]);
            }
        }
        this.getList = strList;
    }

    @track isShowModal = false;

    showModalBox() {
        this.isShowModal = true;
    }
    hideModalBox() {
        this.isShowModal = false;
    }
    changeHandler(event) {
    }

    vehicleObject = VEHICLE_OBJECT;
    myFields = [NAME_FIELD, VEHICLE_TYPE__C, FUEL__C_FIELD, VEHICLE_PRICE__C, MODEL__C_FIELD, PICTURE_URL__C];

    handleVehicleCreated() {
        // Run code when vehicle is created.
    }
    
    clickCar(event) {
        for (var i = 0; i < this.vehiclesList.length; i++) {
            if (this.vehiclesList[i].Id == event.currentTarget.dataset.value) {
                this.singleRecordData = true;
                this.name = this.vehiclesList[i].Name;
                this.fuelType = this.vehiclesList[i].Fuel_Type__c;
                this.vehicleType = this.vehiclesList[i].Vehicle_Type__c;
                this.model = this.vehiclesList[i].Model__c;
                this.vehiclePrice = this.vehiclesList[i].Vehicle_Price__c;
                this.PictureURL = this.vehiclesList[i].Picture_URL__c;
                this.RecentLocation = '';
                this.FuelUsed = 0;
                this.Distance = 0;
                this.RecentUserId = this.vehiclesList[i].Recent_User__c;
                this.Odometer = 0;

                if (this.vehiclesList[i].Odometer__c != null && this.vehiclesList[i].Odometer__c != undefined) {
                    this.Odometer = this.vehiclesList[i].Odometer__c;
                }

                this.mileage = 0;
                this.RecentUser = 'No User';
                this.ProfilePicture = 'https://static.thenounproject.com/png/55393-200.png';
                this.RecentUserUrl = '#';

                if (this.vehiclesList[i].Recent_Location__c != undefined && this.vehiclesList[i].Recent_Location__c != null) {
                    this.RecentLocation = this.vehiclesList[i].Recent_Location__r.Name;

                    if (this.vehiclesList[i].Recent_Location__r.Fuel_Used__c != undefined && this.vehiclesList[i].Recent_Location__r.Fuel_Used__c != null) {
                        this.FuelUsed = this.vehiclesList[i].Recent_Location__r.Fuel_Used__c;
                    }

                    if (this.vehiclesList[i].Recent_Location__r.Distance_Km__c != undefined && this.vehiclesList[i].Recent_Location__r.Distance_Km__c != null) {
                        this.Distance = this.vehiclesList[i].Recent_Location__r.Distance_Km__c;
                    }

                    this.mileage = this.Distance / this.FuelUsed;
                    this.mileage = (Math.round(this.mileage * 100) / 100).toFixed(2);
                }

                if (this.vehiclesList[i].Recent_User__c != null && this.vehiclesList[i].Recent_User__c != undefined) {
                    this.RecentUser = this.vehiclesList[i].Recent_User__r.Name;
                    this.RecentUserUrl = 'https://d5j000007ljwieao-dev-ed.lightning.force.com/lightning/r/User__c/' + this.RecentUserId + '/view';
                    if (this.vehiclesList[i].Recent_User__r.Profile_Picture__c != undefined && this.vehiclesList[i].Recent_User__r.Profile_Picture__c != null) {
                        this.ProfilePicture = this.vehiclesList[i].Recent_User__r.Profile_Picture__c;
                    }
                }
            }
        }
    }
}
```


### APEX
```apex
public with sharing class VehicleController {
    
    @AuraEnabled(Cacheable=true)
    public static List<Vehicle__c>getVehicleList() {
        
        return[
            
            Select Id, Name, Odometer__c, Fuel_Type__c, Recent_User__c, Recent_User__r.Name, Recent_User__r.Profile_Picture__c, Vehicle_Type__c, Model__c, Picture_URL__c, Vehicle_Price__c, Recent_Location__c, Recent_Location__r.Name, Recent_Location__r.Distance_Km__c	, Recent_Location__r.Fuel_Used__c, (Select Mileage__c from Mileages__r limit 1) 
            
            from Vehicle__c
            
        ];        
    }
}
```

