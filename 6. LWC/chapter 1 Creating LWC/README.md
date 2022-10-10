## Example of a LWC


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



## Life cycle Hooks
***Respond to any of these lifecycle events using callback methods.*** For example, 
- the ``connectedCallback()`` is invoked when a component is inserted into the DOM. 
- The ``disconnectedCallback()`` is invoked when a component is removed from the DOM.


<br/>


<br/>


## using components in apps

***The file structure looks like this:***

![image](https://user-images.githubusercontent.com/63545175/174800585-7a8efa15-57a7-44fd-969b-5279791ec7fa.png)


The app component uses the following HTML.
```html
<!-- app.html -->
<template>
<div>
    <c-bike bike={bike}></c-bike>
</div>
</template>
```

The app component uses the following JavaScript.
```js
// app.js
import { LightningElement } from 'lwc';
export default class App extends LightningElement {
    bike = {
        name: 'Electra X4',
        picture: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg'
    };
}
```

The bike component uses the following HTML.
```html
<!-- bike.html -->
<template>
    <img src={bike.picture} alt="bike picture" />
    <p>{bike.name}</p>
</template>
```

The bike component uses the following JavaScript.
```js
// bike.js
import { LightningElement, api } from 'lwc';
export default class Bike extends LightningElement {
    @api bike;
}
```



