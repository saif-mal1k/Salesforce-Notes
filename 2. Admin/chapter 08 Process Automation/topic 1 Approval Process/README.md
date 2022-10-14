
### Approval Process 

<details>
<summary> <h2> <code>approval process management</code> </h2> </summary>
<p>

<details> 
<summary> example of approval process </summary>
<p>
    
![image](https://user-images.githubusercontent.com/63545175/193795169-de7b529e-4a79-426d-a35f-069f5164ec5d.png)

</p>
</details>    
  
    
<details>
<summary> <h3> <em> what can be edited in approval process </em> </h3> </summary>
<p>

---

![image](https://user-images.githubusercontent.com/63545175/195577829-4bc08298-ed72-4269-9802-88b170666249.png)

---

</p>
</details>


- **Initial submission actions**
- **Approval steps**
    - step ( allow all records | allow records that meet criteria )
        - approval action
        - rejection action
- **Final approval actions**
- **Final Rejection actions**
- **Recall actions**
    - task
    - email alert
    - field update
    - outbound msg


<details>
<summary> <h3> <em> adding submit for approval (button & lightning action) on record page </em> </h3> </summary>
<p>

---

![image](https://user-images.githubusercontent.com/63545175/195575717-fe6fd1bf-1c59-48cf-9397-be244b25f168.png)
    
- Submit for Approval button is available when record is not already submitted for approval and gets hidden after the record is submitted for approval.
- make sure to add approval history related list
---

</p>
</details>
    
    
<details>
<summary> <h3> <em> making sure submit for approval (button & lightning action) on record page is visible to required users </em> </h3> </summary>
<p>

---

![image](https://user-images.githubusercontent.com/63545175/195773530-c3a35962-0780-4d03-91c9-02031816ca54.png)
    
- click on highlights pane, then click submit for approval action.
- edit filter for component visiblity.
    
---

</p>
</details>    


<details>
<summary> <h3> <em> adding items to approve list on home page of approvers </em> </h3> </summary>
<p>

---

![image](https://user-images.githubusercontent.com/63545175/195575252-5b034bdb-4826-4403-9c02-7b324ab0318b.png)

--- 

</p>

</details>


<details>
<summary> <h3> <em> order approval processes | manage active & inactive approval processes </em> </h3> </summary>
<p>

---

![image](https://user-images.githubusercontent.com/63545175/195580321-c0cd9b71-35d9-424f-a6ac-f9f19b147a09.png)

--- 

</p>

</details>
    
- [let users respond to approval request by email](https://help.salesforce.com/s/articleView?id=sf.approvals_email_parent.htm&type=5&language=en_US)    
- [let user respond to approval request from chatter](https://help.salesforce.com/s/articleView?id=sf.approvals_chatter.htm&type=5&language=en_US)
    

---

</p>
</details>



<br/>



<details>
<summary> <h2> <code>approval process Troubleshooting </code> </h2> </summary>
<p>

---

- Users with these permissions can respond to approval requests, even if they aren’t designated approvers.
    - “Modify All Data”
    - “Modify All” for an object    
- Make sure that the assigned approver has access to read the records for the approval requests.
    - example: a user who can’t view expense records can’t view expense approval requests.    
- Approval processes that let users select an approver manually also let users select themselves as the approver.
   

- ensure submit for approval button & lightning action in record page layout, also add approval history related list.
- on record page, Submit for Approval button is available when record is not already submitted for approval and gets hidden after the record is submitted for approval.
    
- ERROR: ``no applicable approval process was found`` occurs, if
    - approval process is not active
    - approval process entry criteria is not met
        - try to dry run, to debug the process    
    
- Admin Permissions
    - Users with one of these permissions are considered approval admins.
        - Modify All object-level permission for the given object
        - Modify All Data user permission
    - Approval admins can:
        - Approve or reject pending approval requests without being part of the approval process
        - Edit records that have been locked for approval    
    
- Activating Approval Processes
    - An approval process must have at least one step before you can activate it.
    - Before you activate your approval process, test it in your Salesforce sandbox.
    - After an approval process is activated, you can’t add, delete, or change the order of the steps or change its reject or skip behavior, even if the process is inactive.    
    
    

| IF... | 	THE DESIGNATED APPROVER IS... | 
|-------|---------------------------------|
| The user’s manager originally responded to the approval request. |	The manager |
| The user’s manager originally responded to the approval request. Since then, the user’s manager has changed.	| The original manager, The new manager isn’t a designated approver for this step. |
| A user with the “Modify All Data” permission originally responded to the approval request.	 | The user with the “Modify All Data” permission, That user replaces the user’s manager in the list of designated approvers for this step.   |
    
    
<br/>    

<details>
<summary> <h3> creating a deligate user for approver </h3> </summary>
<p>
    
---
    
***goto approval step, under select approver. tick mark ``The approver's delegate may also approve this request.``***
![image](https://user-images.githubusercontent.com/63545175/195781874-3d508489-a90c-4410-8ba9-0aa833c98292.png)
    
***setting up delegate user***   
![image](https://user-images.githubusercontent.com/63545175/195781880-ab41c75e-15c5-4043-89f1-36cc1d281c7f.png)    
    
***to allow delegated user to receive email notification, goto delegate user's setting at the bottom.  make sure ``Receive Approval Request Emails: if im approver or delegated approver``.***    

---

</p>
</details>    
    
---

</p>
</details>


<br/>


<details>
<summary> <h3><b> Org limits for approval process </b></h3> </summary>
<p>

|PER-ORG LIMIT|	VALUE|
|-------------|------|
|Active approval processes|	1,000|
|Total approval processes|	2,000|
|Active approval processes per object|	300|
|Total approval processes per object|	500|
|Steps per approval process|	30|
|Approvers per step|	25|
|Initial submission actions per approval process|	40|
|Final approval actions per approval process|	40|
|Final rejection actions per approval process|	40|
|Recall actions per approval process|	40|
|Maximum characters in approval request comments	| 4,000    |    
        
</p>
</details>



<br/>


<br/>


<br/>


<br/>


---

***references:***
- https://trailhead.salesforce.com/content/learn/modules/business_process_automation?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-administrator-credential
- https://trailhead.salesforce.com/content/learn/superbadges/superbadge_ap_specialist?trailmix_creator_id=saif-malik&trailmix_slug=to-do





