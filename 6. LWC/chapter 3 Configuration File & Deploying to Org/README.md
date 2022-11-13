## the components configuration file (``****.js-meta.xml``):
This file provides metadata for Salesforce, including the design configuration for components intended for use in Lightning App Builder.

### example(.xml file)
```
<?xml version="1.0" encoding="UTF-8" ?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>52.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>Product Card</masterLabel>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
        <target>lightningCommunity__Page</target>
    </targets>
    <targetConfigs>
        <targetConfig targets="lightning__RecordPage">
            <objects>
                <object>Product__c</object>
            </objects>
        </targetConfig>
    </targetConfigs>
</LightningComponentBundle>
```

***Required*** 
- ``apiVersion`` binds the component to a Salesforce API version.
- ``isExposed`` ( true or false) makes the component available from other namespaces. Only set this to true to make a Lightning component usable in these specific cases:
    - From a managed package in Aura
    - From Lightning App Builder in another org
    
***Optional***
- ``targets`` specify which types of Lightning pages the component can be added to in the Lightning App Builder.
- ``targetConfigs`` let you specify behavior specific to each type of Lightning page, including things like which objects support the component.



<br/>


<br/>


## Deploying Code to Org
- to deploy code from local system to org, we'll need
    - ***Visual Studio Code(VS Code)*** with the ***Salesforce Extension Pack***
    - ***Salesforce CLI***
    - Dev Hub enabled org
    - My Domain deployed to users in your Dev Hub enabled org 
        - Playground orgs created within Trailhead have My Domain deployed for you. 
        - If it is a Developer Edition org, enable and deploy My Domain from the Setup menu in org.


***commands:***
- ``SFDX: Authorize an Org`` 
- ``SFDX: Deploy this Source to Org``
- ``SFDX: Open Default Org``





<br/>

<br/>

<br/>

<br/>

<br/>

<br/>


---
***references:***
- [Deploy Lightning Web Component Files](https://trailhead.salesforce.com/content/learn/modules/lightning-web-components-basics/push-lightning-web-component-files?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-platform-developer-i-credential)
- [XML Configuration File Elements](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_configuration_tags) ????



