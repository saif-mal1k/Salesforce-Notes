<details>
<summary> <b> If User 1 and User 2 has same profile having modify all access on Lead Object and OWD is set to Private for Lead Object.
<br/> Whether User 1 and User 2 will be able to edit/view each other's record or not?</b> </summary>
<p>  
  
**Answer:** Yes, they will be able to view/edit each other's record. ``Modify all`` will out rule ``private`` OWD.

</p>
</details>

<br/>

<br/>

<br/>

<br/>


<details>
<summary> <b> If a user in ABC Inc. has public read-only access to records that he/she does not own, what all actions he can perform on the records? </b> </summary>
<p>
  
**Answer:**

- The user can still view the record but not edit it.
  
- The user can search for the record.

- The user can report on the record.
</p>
</details>

<br/>

<br/>

<br/>

<br/>


<details>
<summary> <b> If there are any users in the ABC Inc.
<br/> that shouldn't have view access to Account records, what should be done to achieve this? </b> </summary>
<p>
  
**Answer:** OWD for Accounts should be set to Private.
</p>
</details>

<br/>

<br/>

<br/>

<br/>


<details>
<summary> <b> In ABC consultancy, The system administrator needs to prevent telesales teams from logging into Salesforce outside of the office hours. 
<br/> How will he/she do this?  </b> </summary>
<p>
  
**Answer:** System administrator can add the range of IP addresses to the team's profiles
</p>
</details>

<br/>

<br/>

<br/>

<br/>


<details>
<summary> <b> If Field Level Security prevents a user from viewing the Credit Card field on the Opportunity record, where else the user will also be prevented from seeing this field? </b> </summary>
<p>
  
**Answer:** User will also be prevented to see this field in the related list, In search results, in reports and in list views.
</p>
</details>  

<br/>

<br/>

<br/>

<br/>


<details>
<summary> <b> Consider a scenario in ABC Inc. 
<br/> you have not given any CRUD permission in the profile 'P1' for an object 01, yet you are able to create records for object '01'.
<br/> How could this be possible? </b> </summary>
<p>
  
**Answer:**
Any permission with respect to ``CRUD`` - **``Create / Read / Update / Delete``** of the object is possible only through permission set or Profile.
If we are able to create records in an object then the Create Permission in either Profile or in Permission Set should be enabled.
</p>
</details>

<br/>

<br/>

<br/>

<br/>


<details>
<summary> <b>   In ABC Inc. 
<br/> Case object has OWD set to private. 
<br/> Now regardless of hierarchies, like top to down e.g., manager can view lead cases, down to top (e.g. lead can view manager cases), and horizontal e.g., lead can view lead cases), and cross functionally, all cases should be visible to anyone without change in OWD.
<br/> How is this possible?  </b> </summary>
<p>
  
**Answer:** Create a criteria-based sharing rule where give access to "Roles and subordinates" to the head of department, this will let everyone access case regardless of hierarchy.
</p>
</details>

<br/>

<br/>

<br/>

<br/>


<details>
<summary> <b> What happens when a user owns an opportunity record but does not have the Read permission on Opportunity Object? </b> </summary>
<p>  

**Answer:** User is not able to see the Opportunity Record.
</p>
</details>

<br/>

<br/>

<br/>

<br/>


<details>
<summary> <b> If a field is visible in the search layout but hidden for certain users via the field-level security settings, then will it be visible or Hidden to those certain users?
 </b> </summary>
<p>
  
**Answer:** The field-level security overrides the search layout, and the field will be hidden for those users.
</p>
</details>  

<br/>

<br/>

<br/>

<br/>


<details>
<summary> <b> Org wide default is set to private. 
<br/> Tom is assigned US Sales Director role with access rights to view opportunities owned by other users associated to her accounts. 
<br/> Adam is assigned EMEA Rep Role and Will to US rep role. 
<br/>  Which business opportunities can Tom VIEW and EDIT? </b> </summary>
<p>
  
**Answer:**
Tom can edit and view her own opportunities.
Tom can edit and view Will's opportunities. Tom can View but cannot edit Adam's opportunities.
</p>
</details>


<br/>

<br/>

<br/>

<br/>


<details>
<summary> <b> Hugh is the Salesforce admin at DreamHouse Realty. Yesterday he met with Sue, a Salesforce user who was recently transferred from inbound sales to a marketing position. She is excited. During the meeting, Sue expressed her frustration that the Account and Contact screens she sees in Salesforce don’t match the ones her colleagues in marketing have, which is making it very difficult to do her job. Hugh treated Sue to a coffee and promised to look into it. 

At his desk, Hugh runs Salesforce Optimizer while catching up on email, when he notices that he missed an email from a user from 2 weeks ago about them leaving the company. Within the Optimizer report Hugh notices that that user is still an active user and that the marketing director hasn’t logged in for 3 months. Hugh saves his Optimizer report and gets ready to head upstairs to his meeting with Kathy, the SVP of Marketing.  </b> </summary>
<p>
  
**Answer:**

<details>
<summary> <b> Why was Sue not seeing the same thing as her marketing colleagues?</b> </summary>
<p>
  
**Answer:**

She has the wrong profile/permissions in Salesforce.

</p>
</details>

<details>
<summary> <b> What should be in Hugh’s agenda with Kathy? </b> </summary>
<p>
  
**Answer:**

Audit to deactivate Marketing users, a better alignment of profiles when employees are transferred.

Discussion of upcoming business changes that could affect Salesforce.

</p>
</details>

</p>
</details>








