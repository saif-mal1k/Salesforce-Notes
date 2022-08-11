## Simple Component Creation
- HTML provides the structure for your component.
- JavaScript defines the core business logic and event handling.
- CSS provides the look, feel, and animation for your component.


<br/>


### html
```html
<template>
    <input value={message}></input>
</template>
```


### js
```
import { LightningElement } from 'lwc';
export default class App extends LightningElement {
  message = 'Hello World';
}
```


### css
```
input {
   color: blue;
}
```


<br/>


<br/>



## Already Implemented solutions:-
***To develop Lightning web components efficiently, use the following tools and environments.***

- <b>Dev Hub and Scratch Orgs</b> Scratch orgs are disposable Salesforce orgs to support development and testing. Dev Hub is a feature that manages your scratch orgs. Both are part of the Salesforce DX tool set. Salesforce DX is an integrated set of development tools built and supported by Salesforce.

  - <b>Install Salesforce Command Line Interface (CLI)</b> The Salesforce CLI provides a quick way to run operations for creating and configuring scratch orgs, and also for deploying components. This is also part of the Salesforce DX tool set. : https://developer.salesforce.com/tools/sfdxcli

  - <b> Download and install the latest version of Visual Studio Code </b> for your operating system. : https://code.visualstudio.com/

  - <b>Install</b> **``Salesforce Extension Pack``** <b> in VScode </b> We’ve focused on Visual Studio as a development tool, providing an integrated environment for you to build your components. The Salesforce Extension Pack for Visual Studio Code provides code-hinting, lint warnings, and built-in commands: https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode.

  - <b>Lightning Component Library</b> The reference for both Aura and Lightning web components and how to use them is found at https://developer.salesforce.com/docs/component-library/overview/components. You can view the library through your org’s instance, too, at <b>``tp://<MyDomainName>.lightning.force.com/docs/component-library.``</b> By viewing the library through your instance, you see only the correct version for your org. And, as you create your own custom components, they appear in the library too.
    

<br/>


- <b>GitHub</b> 
  - <b>Lightning Web Components</b> Recipes We provide a GitHub repo to help you see how Lightning web components work. You can clone, tinker, and publish this mix of samples to your own scratch org and see them in action. Get it at https://github.com/trailheadapps/lwc-recipes.
  - <b>E-Bikes Demo</b> This GitHub repo is another great way to see how Lightning web components work. The e-bikes demo is an end-to-end implementation of Lightning web components to create an app. Try this example in your own scratch org. Get it at https://github.com/trailheadapps/ebikes-lwc.
  - <b>Lightning Data Service (LDS)</b> Access data and metadata from Salesforce via Lightning Data Service. Base Lightning components that work with data are built on LDS. Customize your own components to take advantage of LDS caching, change-tracking, performance, and more.
  - <b>Lightning Locker</b> Lightning web components that belong to one namespace are secure from components in a different namespace through Security with Lightning Locker. Lightning Locker also promotes best practices that improve the supportability of your code by only allowing access to supported APIs and eliminating access to nonpublished framework internals.



<br/>



<br/>


<br/>


<br/>


<br/>



---
***references:***


1. https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.get_started_introduction
2. https://docs.google.com/presentation/d/1RRHZkXAvgli92IEUi4fjHjJDnbqIxdpwYFA-MyIkFM4/edit#slide=id.g120c732ab6a_3_242
3. https://webcomponents.dev/create/lwc
4. https://trailhead.salesforce.com/en/content/learn/projects/set-up-your-lightning-web-components-developer-tools
5. https://trailhead.salesforce.com/en/content/learn/modules/lightning-web-components-basics
6. https://trailhead.salesforce.com/en/content/learn/trails/build-lightning-web-components
7. https://trailhead.salesforce.com/en/content/learn/modules/test-lightning-web-components
8. https://trailhead.salesforce.com/en/content/learn/projects/quick-start-lightning-web-components
9. https://trailhead.salesforce.com/en/content/learn/trails/migrate-from-aura-to-lightning-web-components
10. https://trailhead.salesforce.com/en/content/learn/modules/lightning-web-components-for-aura-developers
11. https://trailhead.salesforce.com/en/content/learn/modules/lightning-web-components-and-salesforce-data
