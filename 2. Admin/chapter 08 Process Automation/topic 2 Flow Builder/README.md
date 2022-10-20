
# Flow Builder   

<details> 
<summary> <h2> Things flow can do .... </h2> </summary>
<p>
    
---
 
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

---

</p>    
    
</details>  
    

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
            <li>Schedule / Time</li>
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
       
    
<details> 
<summary> <b> Which flow to use when .... </b> </summary>
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

    
<details>
<summary> <h2> types of Flow Resources </h2> </summary>
<p>

---

<table>
<tr>
<td colspan="2">

![image](https://user-images.githubusercontent.com/63545175/195826349-23f01f78-778e-4b6f-959e-a02b77b4d4cf.png)

</td>
</tr>
<tr>
<td>

![image](https://user-images.githubusercontent.com/63545175/196615927-fece3545-018a-4c2e-92dd-0f4307153490.png)

</td>
<td>

- **Variable :** Store a value that can be used and changed throughout the flow.
- **Constant :** Store a value that can be used but not changed throughout the flow.
- **Formula :** Calculate a value when the formula is used in the flow.
- **Text template :** Store text that can be used and changed throughout the flow.
- **Choice :** create a choice option to be used in a screen component.
- **Collection Choice Set :** Generate a set of choices from a collection of records.
- **Record Choice Set :** Generate a set of choices using a filtered list of records.
- **Picklist Choice Set :** Generate a set of choices by using the values of a picklist or a multi-select picklist.
- **Stage :** Identify different phases in the flow to track users progess.

</td>
</tr>
<tr>
<td>

![image](https://user-images.githubusercontent.com/63545175/195826374-efad9d9b-3b3c-4374-b251-fcf882efe512.png)

</td>
<td>

![image](https://user-images.githubusercontent.com/63545175/195826467-041fcc0c-a537-4c8e-bba2-d4b910891256.png)

</td>
</tr>
<tr>
<td>

![image](https://user-images.githubusercontent.com/63545175/195826532-98110860-4a5f-400a-bee0-b198bff18f88.png)

</td>
<td>

![image](https://user-images.githubusercontent.com/63545175/195826932-15ad72b0-9604-4d14-ac46-1559699ec428.png)

</td>
</tr>
</table>

---

</p>

</details>

    
## &nbsp; types of Flow Elements
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
        
    
<details>
<summary> <b> Which flow element to use when ... </b>   </summary>  
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


<br/>


## Record Triggered Flows

<details> 
<summary> <h3> Optimise the flow for <code> Fast Fields Update </code>, <code> Actions and Related Records </code>. <br/> Run Immediately, Run Asynchronously and Scheduled paths. </h3> </summary>
<p>

---

![image](https://user-images.githubusercontent.com/63545175/194802509-eec80dd4-2ae5-4aad-b2ad-7eb7fbb179a0.png)

### Fast Fields Update
- updates fields on the record that triggered the flow
- **runs before** the record is saved 
    
### Actions and Related Records
- update any record and perform action
- **runs after** record is saved
    
![image](https://user-images.githubusercontent.com/63545175/194803392-4c71b417-56ef-4e78-a749-701846d12368.png)

### run asynchronously 
- divide flow into 2 scheduled paths ``run immediately`` & ``run asynchronously``
    
![image](https://user-images.githubusercontent.com/63545175/194803371-c26ca62f-8382-4de2-98a8-2e1d91b2ea2c.png)

### scheduled paths
- a path that executes on a scheduled time


<br/>


---

</p>
</details>


<details> 
<summary> <h3> Record Triggered Flow: <code>Flow trigger Explorer</code> </h3> </summary>
<p>

---

### open flow trigger explorer
![image](https://user-images.githubusercontent.com/63545175/194803966-2d9a2ae2-7539-4dc7-b625-3f2875d33c4f.png)

### explore flow trigger explorer
![image](https://user-images.githubusercontent.com/63545175/194803910-cf295c64-164c-4723-8a84-aedebb3c8156.png)

### reorder flows
![image](https://user-images.githubusercontent.com/63545175/194804243-8e7a2ee2-0447-4b61-a2d4-185ab8191d3f.png)

---

</p>
</details>


<details> 
<summary> <h3> create <code>related</code> records </h3> </summary>
<p>

---

**Field: WhatId**
The ``WhatId`` field can refer to the ID of any related non-human object. It represents something other than a person, such as an account, opportunity, campaign, case, or custom object. To refer to a person object, such as contact, use ``WhoId``.

**Value: $Record > Id**
Remember, data from the record that triggered the flow is stored in the $Record variable. To reference the record itself, drill down from $Record to the Id field.

---

</p>
</details>

<br/>    
   

## Auto launched Flow
### connecting autolaunched flow to a button on record page ????
https://trailhead.salesforce.com/content/learn/projects/flow_calculate/flow_calculate_implement?trail_id=automate_business_processes

<br/>


## security in flow ????
very short complete quick: https://help.salesforce.com/s/articleView?id=sf.flow_distribute_security.htm&type=5 

<br/>

## Automate surveys ????
very short complete quick: https://trailhead.salesforce.com/content/learn/modules/automated-survey-invitations-with-flows


<br/>


## Best Practices & things to remember
- Scheduled Paths are used in Record-Triggered Flows to automate steps at a designated time.
- A record must be created or updated to set it on a Scheduled Path.
- Scheduled Paths can be based on any date or date/time field on the object.
- Loops look through a collection and apply changes to individual items
- Decision elements are not required in loops
- _Keep data elements outside of the loop to increase efficiency_
- All new Flow Builder automations should be tested with debug
- **Reveal outcomes:** see what happens at each step of the flow
- **Execute as another user:** see what happens when another user runs the flow
    - in setup type, goto ``Process Automation Settings`` check ``Let admins debug flows as other users``
- Debug in a **sandbox org** and use ``rollback mode`` to protect data integrity


<br/>


<br/>


<br/>


<br/>







---
***references:***
- **https://trailhead.salesforce.com/users/amshirbhate/trailmixes/flow**
- https://trailhead.salesforce.com/content/learn/trails/build-flows-with-flow-builder
- https://trailhead.salesforce.com/content/learn/modules/business_process_automation
- https://trailhead.salesforce.com/content/learn/trails/automate_business_processes
