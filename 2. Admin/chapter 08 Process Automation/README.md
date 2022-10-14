
***sales force provides two types of automation tools -***
1. **Declarative tools**
    - [Approval process](https://github.com/saif-mal1k/Salesforce-Notes/tree/main/2.%20Admin/chapter%2008%20Process%20Automation/topic%201%20Approval%20Process)
    - workflow rules
    - process builder
    - [Flow builder](https://github.com/saif-mal1k/Salesforce-Notes/tree/main/2.%20Admin/chapter%2008%20Process%20Automation/topic%202%20Flow%20Builder)
2. **programatic tools**
    - apex triggers
    


<br/>

    
    
### workflow vs process builder vs flow builder
<img src="https://user-images.githubusercontent.com/63545175/189529873-cb1f173e-1873-4a64-a3da-5dba57ab1ed3.png" width="780px">


<br/>



>**💡 tip:** if an object has all the automation tools applied the execution will be in the order. <br/>
>_Duplicate rule_ **``<``** _validation rule_ **``<``** workflow rules **``<``** process builder **``<``** flow builder **``<``** apex triggers.


<br/>


### when to use which tool
- Approve records through multiple levels in your organization.
    - Approval process
- Perform an operation for more records than scheduled-triggered flows allow.
    - Batch Apex
- Perform CPU-intensive operations.	
    - Apex


<br/>


<details>
<summary>  <h3> &nbsp; Workflow rules </h3> </summary>
<p>

---
    
![image](https://user-images.githubusercontent.com/63545175/190586936-33563d21-4953-4655-bcb4-5e5ec1c6c445.png)

![image](https://user-images.githubusercontent.com/63545175/190586892-15ef25d0-5e45-4a97-8c03-a680c2e066be.png)
    
---
    
</p>    
</details>



<details>
<summary>  <h3> &nbsp; Process Builder </h3> </summary>
<p>

---
    
![image](https://user-images.githubusercontent.com/63545175/190596623-69aab532-3dd6-4bf2-890a-c47d595c6e30.png)

![image](https://user-images.githubusercontent.com/63545175/190596637-631cd698-cbba-4cb7-adc3-50b821d164a9.png)
    
---
    
</p>    
</details>



<details>
<summary>  <h3> &nbsp; Flow Builder </h3> </summary>
<p>

---    
    
![image](https://user-images.githubusercontent.com/63545175/190598510-8df66212-9c86-475d-9f40-0db9bc96b860.png)
        
---   
    
</p>    
</details>




<br/>


<br/>



---
***references:***
- https://trailhead.salesforce.com/content/learn/modules/business_process_automation?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-administrator-credential
- https://trailhead.salesforce.com/content/learn/superbadges/superbadge_ap_specialist?trailmix_creator_id=saif-malik&trailmix_slug=to-do





