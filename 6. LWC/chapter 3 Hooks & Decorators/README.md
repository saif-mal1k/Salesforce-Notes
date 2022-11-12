
## Life cycle Hooks
- allows to “hook” the code to events in a component's lifecycle. These events include when a component is:
  - Created
  - Added to the DOM
  - Removed from the DOM
  - Rendered in the browser
  - Encountering errors

***to Respond to any of these lifecycle events, it use callback methods.*** For example, 
- the ``connectedCallback()`` is invoked when a component is inserted into the DOM. 
- The ``disconnectedCallback()`` is invoked when a component is removed from the DOM.


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


<br/>

<br/>

<br/>

<br/>

<br/>

<br/>

---
***references:***
- [Lightning Web Components Basics | Create Lightning Web Components](https://trailhead.salesforce.com/content/learn/modules/lightning-web-components-basics/create-lightning-web-components?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-platform-developer-i-credential) ????


