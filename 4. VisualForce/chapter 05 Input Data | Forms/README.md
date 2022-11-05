
## form using visualforce 

- Visualforce enables to create pages that can create new records, or retrieve a record, edit its values, and save the changes back to the database.
- it is easy to create a record editing page using ``a standard controller`` with the ``<apex:form> component`` and some ``form elements``.

***_***
- use standard controller to use functionality such as save, edit, del.
- Use <apex:form> and <apex:inputField> to create a page to edit data.
- Combine <apex:commandButton> with the ``save action built into the standard controller`` to create a new record, or save changes to an existing one.


<br/>


### Example creating new Account
```vfp
<apex:page standardController="Account">
    <apex:form>
        <apex:pageBlock title="Create Account">
            <apex:pageMessages/>
            <apex:pageBlockSection columns="1">
                <apex:inputField value="{! Account.Name }"/>
                <apex:inputField value="{! Account.Phone }"/>
                <apex:inputField value="{! Account.Industry }"/>
                <apex:inputField value="{! Account.AnnualRevenue }"/>
            </apex:pageBlockSection>       
            <apex:pageBlockButtons>
                <apex:commandButton action="{! save }" value="Save" />
            </apex:pageBlockButtons>
        </apex:pageBlock>
    </apex:form>
</apex:page>
```

![image](https://user-images.githubusercontent.com/63545175/200106226-469e6bb8-d454-4ea9-a39a-e854f676e306.png)



<br/>

<br/>


[Using Input Components in a Page](https://developer.salesforce.com/docs/atlas.en-us.224.0.pages.meta/pages/pages_quick_start_input_components.htm?_ga=2.40811307.865651692.1667559514-1022251765.1662354198) ????

[Using Standard Controller Actions](https://developer.salesforce.com/docs/atlas.en-us.224.0.pages.meta/pages/pages_controller_std_actions.htm?_ga=2.40811307.865651692.1667559514-1022251765.1662354198) ????

[Valid Values for the $Action Global Variable](https://developer.salesforce.com/docs/atlas.en-us.224.0.pages.meta/pages/pages_variables_global_action_valid_values.htm?_ga=2.42031148.865651692.1667559514-1022251765.1662354198) ????


<br/>

<br/>

<br/>

<br/>

<br/>

<br/>

--- 
***references:***
- [Visualforce Basics | Input Data Using Forms](https://trailhead.salesforce.com/content/learn/modules/visualforce_fundamentals/visualforce_forms?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-platform-developer-i-credential)
