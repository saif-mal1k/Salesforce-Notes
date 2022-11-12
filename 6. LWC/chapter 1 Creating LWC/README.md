## Example of a LWC Component


### html
```html
<template>
    <div id="waiting" if:false={ready}>Loading…</div>
    
    <div id="display" if:true={ready}>
        <div>Name: {name}</div>
        <div>Description: {description}</div>
        <lightning-badge label={material}></lightning-badge>
        <lightning-badge label={category}></lightning-badge>
        <div>Price: {price}</div>
        <div><img src={pictureUrl}/></div>
    </div>
</template>
```

> The identifiers in the curly braces ``{}`` are bound to the fields of the same name in the corresponding JavaScript class.

<br/>


### js
```js
import { LightningElement } from 'lwc';
// declare class to expose the component
export default class App extends LightningElement {
   
   name = 'Electra X4';
   description = 'A sweet bike built for comfort.';
   category = 'Mountain';
   material = 'Steel';
   price = '$2,700';
   pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
   
   ready = false;
   
   // use lifecycle hook
   connectedCallback() {
       setTimeout(() => {
           // The this keyword in JavaScript refers to the top level of the current context.
           this.ready = true;
       }, 3000);
   }
   
}
```

> LightningElement is the base class for Lightning web components, which allows us to use connectedCallback().
> <br/> The connectedCallback() method is a lifecycle hooks. the method is triggered when a component is inserted in the document object model (DOM).

### xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>48.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>name of component</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
        <target>lightning__AppPage</target>
        <target>lightning__HomePage</target>
        <target>lightningCommunity__Page</target>
        <target>lightningCommunity__Default</target>
    </targets>
</LightningComponentBundle>
```


### output:
![image](https://user-images.githubusercontent.com/63545175/174798154-2e0deeca-62b1-44c6-877d-7f7502513bc6.png)





<br/>


<br/>


<br/>


<br/>


<br/>


<br/>


---
***references:***
- [Lightning Web Components Basics | Create Lightning Web Components](https://trailhead.salesforce.com/content/learn/modules/lightning-web-components-basics/create-lightning-web-components?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-platform-developer-i-credential) 



