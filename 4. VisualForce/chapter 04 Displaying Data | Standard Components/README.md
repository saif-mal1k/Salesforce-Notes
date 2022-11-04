
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

![image](https://user-images.githubusercontent.com/63545175/199988166-d349d0b4-1bc2-45bf-8256-a41fddd86820.png)



  
