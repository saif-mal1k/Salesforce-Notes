
### Approval Process ????
https://trailhead.salesforce.com/content/learn/modules/business_process_automation?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-administrator-credential

https://trailhead.salesforce.com/content/learn/projects/build-a-discount-approval-process?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-administrator-credential




<br/>


***sales force provides two types of automation tools -***
1. **Declarative tools**
    - Approval process
    - Workflow rules
    - process builder
    - flow builder
2. **programatic tools**
    - apex triggers
    


<br/>

    
    
### workflow vs process builder vs flow builder
<img src="https://user-images.githubusercontent.com/63545175/189529873-cb1f173e-1873-4a64-a3da-5dba57ab1ed3.png" width="780px">


<br/>



>**💡 tip:** if an object has all the automation tools applied the execution will be in the order. <br/>
>_Duplicate rule_ **``<``** _validation rule_ **``<``** workflow rules **``<``** process builder **``<``** flow builder **``<``** apex triggers.


<br/>


<details>
<summary>  workflow rules  </summary>
<p>

![image](https://user-images.githubusercontent.com/63545175/190586936-33563d21-4953-4655-bcb4-5e5ec1c6c445.png)

![image](https://user-images.githubusercontent.com/63545175/190586892-15ef25d0-5e45-4a97-8c03-a680c2e066be.png)
    
    
</p>    
</details>

<br/>

<details>
<summary>  process builder  </summary>
<p>

![image](https://user-images.githubusercontent.com/63545175/190596623-69aab532-3dd6-4bf2-890a-c47d595c6e30.png)

![image](https://user-images.githubusercontent.com/63545175/190596637-631cd698-cbba-4cb7-adc3-50b821d164a9.png)
    
    
</p>    
</details>

<br/>

<details>
<summary>  flow builder  </summary>
<p>

![image](https://user-images.githubusercontent.com/63545175/190598510-8df66212-9c86-475d-9f40-0db9bc96b860.png)
    
    
### which flow to use when ....

<table>
<tr> <td> <b> FLOW STARTS OR TRIGGERS </b> </td> <td> <b> FLOW TYPE TO USE </b> </td> <td> <b> FOR EXAMPLE, YOU WANT SOMETHING TO HAPPEN… </b> </td> </tr>
<tr> <td> When a record is created </td>	<td> Record-Triggered </td> <td> When a new case is created. </td> </tr>
<tr> <td> When a record is updated </td>	<td> Record-Triggered </td> <td> When a lead’s status field is changed. </td> </tr>
<tr> <td> When a record is created or updated </td>	<td> Record-Triggered </td> <td> When an account is created or the account priority field is changed. </td> </tr>
<tr> <td> When a record is deleted </td>	<td> Record-Triggered </td> <td> When a contact is deleted. </td> </tr>
<tr> <td> After a certain amount of time </td>	<td> Record-Triggered </td> <td> A week after a quote is created. Add a scheduled path to the record-triggered flow. </td> </tr>
<tr> <td> At a specified time and frequency </td>	<td> Schedule-Triggered </td> <td> Every Saturday at midnight. </td> </tr>
<tr> <td> When a user clicks a button on a form </td>	<td> Screen </td> <td> When a customer enters contact information into a flow screen and clicks the Next button. </td> </tr>
<tr> <td> When a user clicks a quick action button </td>	<td> Screen </td> <td> When an employee clicks Request PTO on their employee record. Opens a form to complete. </td> </tr>
<tr> <td> When a user clicks a custom button or link </td>	<td> Autolaunched </td> <td> When a user clicks a Complete Sale button after closing an opportunity. Starts background automations, such as updating records and emailing stakeholders. </td> </tr>
<tr> <td> When called by another flow </td>	<td> Autolaunched or Screen </td> <td> When a flow executes another flow within the same running instance to reduce repetition within the main flow. </td> </tr>
<tr> <td> When called by Apex code </td>	<td> Autolaunched </td> <td> When an Apex class is triggered by a change to an opportunity’s stage, which triggers an autolaunched flow. </td> </tr>
<tr> <td> When a platform event message is received </td>	<td> Platform Event–Triggered </td> <td> When an integrated printer is out of ink, it publishes a platform event message. </td> </tr>
</table>
    
<br/>
    
### things flow can do 
- create, update, delete records
- send an email
- Collect input from external users with an online form	
- Collect input from internal users with a form placed on a Lightning page or launched by a button
- Send a custom notification	
- Send a survey	
- Submit a record for approval	
- Run another flow in the context of the current flow	
- Access external systems	
- Call a custom invocable action	
- Send outbound messages	
    
<br/>
    
### when to use another tool
- Approve records through multiple levels in your organization.
    - Approval process
- Perform an operation for more records than scheduled-triggered flows allow.
    - Batch Apex
- Perform CPU-intensive operations.	
    - Apex
 
    
    
</p>    
</details>


