
# 1. Edit The Component Configuration File

***the component configuration file looks like:***

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

Required apiVersion binds the component to a Salesforce API version.

isExposed ( true or false) makes the component available from other namespaces. Only set this to true to make a Lightning component usable in these specific cases:

From a managed package in Aura
From Lightning App Builder in another org
Optional targets specify which types of Lightning pages the component can be added to in the Lightning App Builder.

targetConfigs let you specify behavior specific to each type of Lightning page, including things like which objects support the component.



<br/>


<br/>




# 2. Deploy Your Files

 SFDX: Deploy this Source to Org 

