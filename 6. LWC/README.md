## Simple Component Creation
- HTML provides the structure for your component.
- JavaScript defines the core business logic and event handling.
- CSS provides the look, feel, and animation for your component.


<br/>

<details>
<summary> <b><em> example(Hello World):</em></b></summary>
<p>

---

### html
```html
<template>
    <lightning-card title="HelloWorld">
        <div class="slds-m-around_medium">
            <p>Hello, {greeting}!</p>
            <lightning-input label="Name" value={greeting} onchange={changeHandler}></lightning-input>
        </div>
    </lightning-card>
</template>
```


### js
```
import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {

    @track greeting = 'World';
    changeHandler(event){
        this.greeting = event.target.value;
    }

}
```


### xml
```
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>55.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>Hello World</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
        <target>lightning__AppPage</target>
        <target>lightning__HomePage</target>
        <target>lightningCommunity__Page</target>
        <target>lightningCommunity__Default</target>
    </targets>
</LightningComponentBundle>
```


### css
```
input {
   color: blue;
}
```

### output:

![image](https://user-images.githubusercontent.com/63545175/201460842-dc3e48ba-72e2-413e-af81-79a86d0ce50c.png)


---

</p>
</details>



<br/>

### [copy lightning components from blueprints](https://www.lightningdesignsystem.com/components/cards/)


<br/>


<br/>


<br/>


<br/>



## Setup for lwc:-
> **Note:** there is no option to create Lightning Components from Developer Console.

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


- <b>LWC local Development Server Installation:</b>
    - **Step 1:** 
      <b>Install npm:</b> from https://nodejs.org/en/download/
    - **Step 2:** 
      Ensure there are no existing ``yarn.lock`` files or folders, navigate to the directory ``C:\Users\YOURUSER\AppData\Local\sfdx`` , There probably are NOT any ``yarn.lock`` files or folders, but after many failed installation attempts, this could be an issue, so it is best to check for this, and delete any you discover, before continuing with the installation.
    - **Step 3:** 
      <b>Run the command:</b> 
      ```cmd
      npm install --global windows-build-tools
      ```
      This will install Python 2.7 and build tools. I find that this tends to fail a lot, the python always installs fine, but build tools does not, sometimes it seems frozen on that step. If this happens CTRL + C out of the command, and open up the visual studio installer (search for it in the start menu), you should be able to click "repair" on the "Visual Studio Build Tools 2017" module. This will successfully install the required files in the correct directory.
    - **Step 4:** 
      By default, the npm command installs python in the .windows-build-tools folder in your user's directory, ``C:\Users\YOURUSER\.windows-build-tools``, move python folder from here to root of C drive. This will ensure that python is easily accessible to node-gyp.
    - **Step 5:** 
      Ensure build tools are successful installed, to do this go to ``C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools``, there should be 7 folders in here, if it is empty, build tools did not successfully install, again follow from step 3.
    - **Step 6:** 
      <b>Run this command:</b> 
      ```cmd
      npm install -g node-gyp
      ```
    - **Step 7:** 
      <b>Run this command:</b> 
      ```cmd
      sfdx plugins:install @salesforce/lwc-dev-server
      ```
      

<br/>
      
### first time setup
``
    Open VS Code
``

    - 1. press ctrl+shift+p
    - 2. select sfdx: create project
    - 3. do 1 select sfdx: authorize an org
    - 4. do 1 select sfdx: create lightning web component
    - 5. right click on the component code
    - 6. select sfdx: preview component locally 


<br/>


> tip: 
> - ``sfdx: open Default Org`` to open connected org direct from VS Code.


<br/>

<br/>


### how to edit lwc from chrome
- install [Salesforce LWC Editor](https://chrome.google.com/webstore/detail/salesforce-lwc-editor/ehkpneicmpbdejpoancidgkejlkahjgo)
- login to salesforce org
- launch extension 

<img src="https://user-images.githubusercontent.com/63545175/197392338-5100b6df-bc0a-481a-9cf7-d9f07dfa2cf0.png" width="360px">


<br/>


## Setup for Debugging
- install [Apex Replay Debugger for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode-apex-replay-debugger)
- install [Apex Interactive Debugger for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode-apex-debugger)


<br/>


<br/>


<br/>


<br/>



---
***references:***

1. https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.get_started_introduction
2. https://docs.google.com/presentation/d/1RRHZkXAvgli92IEUi4fjHjJDnbqIxdpwYFA-MyIkFM4/edit#slide=id.g120c732ab6a_3_242
3. [try LWC in browser](https://webcomponents.dev/create/lwc)
4. [Set Up Your Lightning Web Components Developer Tools](https://trailhead.salesforce.com/en/content/learn/projects/set-up-your-lightning-web-components-developer-tools)
5. [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components?trail_id=build-lightning-web-components)
