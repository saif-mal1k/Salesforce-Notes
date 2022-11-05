
# testing Displayed Data
- If you want to use the standard controller to reference a specific record, it needs to know the record identifier, or ID, of the record to work with. It uses the ID to retrieve the data, and to save it back to the database when the record’s data is changed.
- ***example:*** ``https://MyDomainName.lightning.force.com/apex/AccountSummary?core.apexpages.request.devconsole=1``**``&id=001D000000JRBes``**


## <apex:detail /> tag
<table>
<tr>
<td>
  
```vfp
<apex:page standardController="Contact">
    
    <apex:detail />
    
</apex:page>  
```  

</td>
<td>
  
![image](https://user-images.githubusercontent.com/63545175/199980260-4c0ed3dd-55ce-49d5-b55c-7e8a00dcd0fc.png)  
</td>  
</tr>  
</table>  


### to display specific related lists
- by default all related lists are displayed.
  - **to Hide related Lists use:** ``<apex:detail relatedList="false"/>`` 
- or to specify which related list to display, pageSize is optional
 
<table>
<tr>
<td>
  
```vfp
<apex:page standardController="Contact">  
    <apex:detail relatedList="false"/>   
    <apex:relatedList list="Opportunities" pageSize="5"/>  
</apex:page> 
``` 
</td>
<td>
  
![image](https://user-images.githubusercontent.com/63545175/199985760-a1bb6f5a-4cda-4200-8c61-de2b55419952.png)
</td>  
</tr>  
</table>  


### to display specific fields
<table>
<tr>
<td>
  
```vfp
<apex:page standardController="Contact">  
    <apex:pageBlock title="Contact Details">
        <apex:pageBlockSection>
            <apex:outputField value="{! Contact.FirstName }"/>
            <apex:outputField value="{! Contact.LastName }"/>
            <apex:outputField value="{! Contact.Email }"/>
            <apex:outputField value="{! Contact.Phone }"/>
        </apex:pageBlockSection>
    </apex:pageBlock> 
</apex:page> 
``` 
</td>
<td>

![image](https://user-images.githubusercontent.com/63545175/199986474-1967c826-ca18-43ef-9502-ed4cb3b211ef.png)  
</td>  
</tr>  
</table> 

> ``<apex:pageBlock title="Contact Details">`` creates a block with specified title, generally it is accompanied by ``<apex:pageBlockSection>`` this contains data that is supposed to be in a block.


<br/>


<br/>


## Display in tabular format
```
<apex:page standardController="Contact">  
    <apex:pageBlock title="Contact Details">
        <apex:pageBlockSection>
            <apex:outputField value="{! Contact.FirstName }"/>
            <apex:outputField value="{! Contact.LastName }"/>
            <apex:outputField value="{! Contact.Email }"/>
            <apex:outputField value="{! Contact.Phone }"/>
        </apex:pageBlockSection>
    </apex:pageBlock> 
    
    <apex:pageBlock title="Contacts">
        <apex:pageBlockTable value="{!contact.cases}" var="case">
            <apex:column value="{!case.type}"/>
            <apex:column value="{!case.status}"/>
            <apex:column value="{!case.origin}"/>
        </apex:pageBlockTable>
    </apex:pageBlock>
</apex:page> 
```

<details>
<summary> <b> output: </b> </summary>
<p>

![image](https://user-images.githubusercontent.com/63545175/199988166-d349d0b4-1bc2-45bf-8256-a41fddd86820.png)
</p>
</details>

<br/>


## Displaying List of accounts with link to detail page & actions for edit, view, delete
```
<apex:page standardController="Account" recordSetVar="Accounts">
    <apex:form>
        <apex:pageBlock title="Accounts List" id="accounts_list">
            Filter:
            <apex:selectList value="{! filterId }" size="1">
                <apex:selectOptions value="{! listViewOptions }"/>
                <apex:actionSupport event="onchange" reRender="accounts_list"/>
            </apex:selectList>
            <!-- Accounts List -->
            <apex:pageBlockTable value="{! accounts }" var="account">
                <apex:column>
                    <apex:outputLink value="{! URLFOR($Action.Account.Edit, account.Id) }">
                        Edit
                    </apex:outputLink>
                    &nbsp; &nbsp;
                    <apex:outputLink value="{! URLFOR($Action.Account.View, account.Id) }">
                        view
                    </apex:outputLink>
                    &nbsp; &nbsp;
                    <apex:outputLink value="{! URLFOR($Action.Account.delete, account.Id) }">
                        delete
                    </apex:outputLink>
                </apex:column>apex:column>
                <apex:column value="{! account.Name }"/>
                <apex:column value="{! account.Type }"/>
                <apex:column value="{! account.Website }"/>
                <apex:column value="{! account.Phone }"/>
            </apex:pageBlockTable>
            <!-- Pagination -->
            <table style="width: 100%">
                <tr>
                    <td>
                        Page: <apex:outputText value=" {!PageNumber} of {! CEILING(ResultSize / PageSize) }"/>      
                    </td>
                    <td align="center">
                        <!-- Previous page -->
                        <!-- active -->
                        <apex:commandLink action="{! Previous }" value="« Previous"
                                          rendered="{! HasPrevious }"/>
                        <!-- inactive (no earlier pages) -->
                        <apex:outputText style="color: #ccc;" value="« Previous"
                                         rendered="{! NOT(HasPrevious) }"/>
                        &nbsp;&nbsp;
                        <!-- Next page -->
                        <!-- active -->
                        <apex:commandLink action="{! Next }" value="Next »"
                                          rendered="{! HasNext }"/>
                        <!-- inactive (no more pages) -->
                        <apex:outputText style="color: #ccc;" value="Next »"
                                         rendered="{! NOT(HasNext) }"/>
                    </td>
                    <td align="right">
                        Records per page:
                        <apex:selectList value="{! PageSize }" size="1">
                            <apex:selectOption itemValue="5" itemLabel="5"/>
                            <apex:selectOption itemValue="20" itemLabel="20"/>
                            <apex:actionSupport event="onchange" reRender="contacts_list"/>
                        </apex:selectList>                    
                    </td>
                </tr>
            </table>
        </apex:pageBlock>
    </apex:form>
</apex:page>
```
  
<details>
<summary> <B> Output: </b> </summary>
<p>

![image](https://user-images.githubusercontent.com/63545175/200109876-ba7bf1b9-fb39-4589-be48-1adc8fe6fa43.png)

</p>
</details>





<br/>

<br/>

<br/>

<br/>

<br/>

<br/>

---
***references:***
- [all standard components ????](https://developer.salesforce.com/docs/atlas.en-us.224.0.pages.meta/pages/pages_compref.htm?_ga=2.78623645.865651692.1667559514-1022251765.1662354198)


