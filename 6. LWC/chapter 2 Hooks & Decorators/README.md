
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


<br/>


<br/>

## Decorators
- Decorators are used in JavaScript to modify the behavior of a property or function.
- To use a decorator, import it from the lwc module and place it before the property or function.
- Js can import multiple decorators, but a single property or function can have only one decorator.

### example
```js
import { LightningElement, api } from 'lwc';
export default class MyComponent extends LightningElement{
    @api message;
}
```

- **@api**: Marks a field as public. Public properties define the API for a component. An owner component that uses the component in its HTML markup can access the component's public properties. All public properties are reactive, which means that the framework observes the property for changes. When the property's value changes, the framework reacts and rerenders the component.




<br/>


### example using the @api decorator to render a value from one component (bike) in another component (app).

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


