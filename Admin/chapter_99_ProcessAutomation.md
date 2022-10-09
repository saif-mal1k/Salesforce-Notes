
### Approval Process ????
<details>
<summary> <b> example </b> </summary>
<p>

![image](https://user-images.githubusercontent.com/63545175/193795169-de7b529e-4a79-426d-a35f-069f5164ec5d.png)
    
</p>
</details>
    
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


## when to use another tool
- Approve records through multiple levels in your organization.
    - Approval process
- Perform an operation for more records than scheduled-triggered flows allow.
    - Batch Apex
- Perform CPU-intensive operations.	
    - Apex


<br/>


<details>
<summary>  <h3> &nbsp; workflow rules </h3> </summary>
<p>

![image](https://user-images.githubusercontent.com/63545175/190586936-33563d21-4953-4655-bcb4-5e5ec1c6c445.png)

![image](https://user-images.githubusercontent.com/63545175/190586892-15ef25d0-5e45-4a97-8c03-a680c2e066be.png)
    
    
</p>    
</details>



<details>
<summary>  <h3> &nbsp; process builder </h3> </summary>
<p>

![image](https://user-images.githubusercontent.com/63545175/190596623-69aab532-3dd6-4bf2-890a-c47d595c6e30.png)

![image](https://user-images.githubusercontent.com/63545175/190596637-631cd698-cbba-4cb7-adc3-50b821d164a9.png)
    
    
</p>    
</details>



<details>
<summary>  <h3> &nbsp; flow builder </h3> </summary>
<p>

---    
    
![image](https://user-images.githubusercontent.com/63545175/190598510-8df66212-9c86-475d-9f40-0db9bc96b860.png)
    
<br/>
    
## types of flows
    
<table class="featureTable sort_table">
    <thead class="thead sorted">
      <tr>
        <th scope="col" style="width:23.4213%;text-align:left">Flow Type</th>
        <th scope="col" style="width:32.0233%;text-align:left">Launched By</th>
        <th scope="col" style="width:44.4112%;text-align:left">Description</th>
      </tr>
    </thead>
    <tbody class="tbody">
      <tr>
        <td style="width:23.4213%;vertical-align:top">
          <p><b>Screen Flow</b></p>
        </td>
        <td style="width:32.0233%;vertical-align:top">
          <ul>
            <li>Quick action</li>
            <li>Lightning page</li>
            <li>Experience Cloud site, and more</li>
          </ul>
        </td>
        <td style="width:44.4112%;vertical-align:top">
          <p>Screen Flows provide a UI that guides users through a business process.</p>
          <p>Used to create an interaction that presents info and asks your users questions.</p>
        </td>
      </tr>
      <tr>
        <td style="width:23.4213%;vertical-align:top">
          <p><b>Autolaunched Flow</b></p>
        </td>
        <td style="width:32.0233%;vertical-align:top">
          <ul>
            <li>Another flow</li>
            <li>Apex code</li>
            <li>REST API</li>
          </ul>
        </td>
        <td style="width:44.4112%;vertical-align:top">
          <p>Autolaunched Flows automate business processes that have no UI. They have no trigger and they run in the background.</p>
          <p>Used to create automation that runs when a button is clicked. These can also be run by other automations.</p>
        </td>
      </tr>
      <tr>
        <td style="width:23.4213%;vertical-align:top" rowspan="2">
          <p><b>Triggered Flow</b></p>
        </td>
        <td style="width:32.0233%;vertical-align:top">
          <ul>
            <li>Data change</li>
            <li>Time</li>
            <li>Platform event</li>
          </ul>
        </td>
        <td style="width:44.4112%;vertical-align:top">
          <p>Triggered Flows are autolaunched by a trigger you specify. They run in the background.</p>
        </td>
      </tr>
        <tr>
<td style="width:32.0233%;vertical-align:top" colspan="2">


- **Record-Triggered Flows**: Use Flow Builder to create automation that runs when a record is created, edited, or deleted.
- **Schedule-Triggered Flows**: Use Flow Builder to create automation that runs at a time and frequency you specify.
- **Platform Event-Triggered Flows**: Use Flow Builder to create automation that runs when a platform event message is received.            
            
</td>
      </tr>
    </tbody>
  </table>
    
    
<br/>
    
    
<details> 
<summary> <h2> which flow to use when .... </h2> </summary>
<p>
    
---
    
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
    
---

</p>    
    
</details>  
    
<br/>
    
## things flow can do 
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
    
    
## types of elements
<table class="featureTable sort_table">
    <thead class="thead sorted">
      <tr>
        <th scope="col">Element Type<br>
</th>
        <th scope="col">What It Does<br>
</th>
        <th scope="col"> 
</th>   
      </tr>
    </thead>
    <tbody class="tbody">
      <tr>
        <td>
          <p>Interaction</p>
        </td>
        <td>
          <p>Interacts with <strong>users</strong></p>
        </td>
<td>
         
<image src="https://user-images.githubusercontent.com/63545175/194695569-8637af6a-21ed-407e-a4e6-a9da67b0c6af.png">

</td>
      </tr>
      <tr>
        <td>
          <p>Data</p>
        </td>
        <td>
          <p>Interacts with <strong>data</strong></p>
        </td> 
<td>
         
<image src="https://user-images.githubusercontent.com/63545175/194695618-adf0bbbc-cb02-4463-9455-02576ce256fb.png">    
    
</td>
      </tr>
      <tr>
        <td>
          <p>Logic</p>
        </td>
        <td>
          <p>Interacts with the<strong>&nbsp;flow</strong> itself</p>
        </td>
<td>
         
<image src="https://user-images.githubusercontent.com/63545175/194695624-dafc52f0-e9a6-499c-a1b3-13aae078b464.png">
    
</td>
      </tr>
    </tbody>
  </table>
    
    
<br/>
    
    
<details>
<summary> <b> example </b>   </summary>  
<p>    
  
---
   
<table class="featureTable sort_table">
    <thead class="thead sorted">
      <tr>
        <th scope="col" style="width:57.7884%">Requirement<br>
</th>
        <th scope="col" style="width:42.1307%">Element Type to Use<br>
</th>
      </tr>
    </thead>
    <tbody class="tbody">
      <tr>
        <td style="width:57.7884%">
          <p>Collect information from user (contact’s first name, last name, and account) and ask what to do if a matching contact exists.</p>
        </td>
        <td style="width:42.1307%">
          <p>Interaction (Screen)</p>
        </td>
      </tr>
      <tr>
        <td style="width:57.7884%">
          <p>Look for a matching contact record.</p>
        </td>
        <td style="width:42.1307%">
          <p>Data (Get Records)</p>
        </td>
      </tr>
      <tr>
        <td style="width:57.7884%">
          <p>Check if a matching record was found and follow the corresponding path:</p>
        </td>
        <td style="width:42.1307%">
          <p>Logic (Decision)</p>
        </td>
      </tr>
      <tr>
        <td style="width:57.7884%">
          <p>If&nbsp;no match&nbsp;exists, create the contact.</p>
        </td>
        <td style="width:42.1307%">
          <p>Data (Create Records)</p>
        </td>
      </tr>
      <tr>
        <td style="width:57.7884%">
          <p>If a&nbsp;match exists, update that contact.</p>
        </td>
        <td style="width:42.1307%">
          <p>Data (Update Records)</p>
        </td>
      </tr>
      <tr>
        <td style="width:57.7884%">
          <p>Rejoin the branches together and then confirm what the flow did in Chatter.</p>
        </td>
        <td style="width:42.1307%">
          <p>Interaction (Action)</p>
        </td>
      </tr>
      <tr>
        <td style="width:57.7884%">
          <p>Confirm that the flow is done.</p>
        </td>
        <td style="width:42.1307%">
          <p>Interaction (Screen)</p>
        </td>
      </tr>
    </tbody>
  </table>    
    
---
    
</p>    
</details>
    
    
   
    
</p>    
</details>


