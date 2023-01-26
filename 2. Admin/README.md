
<details>
<summary>  <b> INDEX </b>  </summary>
<p>

---

- orgs
	- sandbox
	- production
	- developer edition
	- trailhead playground
	
- apps , app exchange
	- standard navigation
	- console navigation
	
- configuration & setup
	- salesforce platform basics
	- prepare org for users
	- user management
	- view and manage users
- Data security
	- control access to org
		- Restrict Login Hours and IP Ranges
	- control access to object
		- profiles
		- permission sets
			- Create New Users and Allow a User to Delete Accounts
		- permission set groups
	- control access to fields
	- control access to records
		- Sharing settings
			- OWD
			- define sharing rules
		- create a role hierarchy
		- manual sharing
		- filteration methods
			- restriction rules
			- scoping rules
- Object manager & Lightning App Builder
	- types of objects
	- types of objects relationships
		- look up (0,1 - many)
		- master details (1 - many)
		- junction object (many - many)
		- considerations for creating relationships
			- relationship limits ????
			- Converting relationship ????
				- lookup -> masterdetail
				- masterdetail -> lookup
			- self relationships ????
			- impact of relationships on objects
	- working with Schema Builder
- Fields
	- types of fields
	- feed tracking vs feed history tracking
	- implement roolup summary
	- validation rules
	- field dependencies
	- notes on changing field types ????

- Duplicate Rules & Matching rules

- Record types

- Customization
	- create and customize lightning apps
	- create and customize lightning record pages
		- compact layout
		- quick actions
		- create custom buttons and links
		- record types
	- create and customize list view
	
- Data Management
	- Data import wizard
	- Data loader

- Reports & dashboards
	- types of reports
	- report types
		- types of report types
	- access level for Reports and Dashboards folders
	
- Process Automation
	- declarative
		- Approval process
		- workflow
		- process
		- flow
	- programmatic
		- apex triggers
	

- Sales Cloud
	- account & contacts and their relationship
	- Leads & opportunity for lightning experience
		- lead conversion
		- selling as a team & splitting the credit
	- kanban view
	- creating price book & tracking product
	- Configure Quotes for Your Customers and Track Contracts
	- Campaigns
		- organising campaigns
		- reports on campaigns
	- creating sales process to edit opportunity picklist
	- customizing lead path
	- web to lead conversion

- Service Cloud
	- web to case
	- email to case
	- case escalation rules
	- Automate case management
	- create a process for managing cases
	- case queues and assignment rules
	- case escalation rules
	- Enable Entitlements and Set Up Service Contracts
	- Create an Entitlement Process
	- Create Service Contracts with Entitlements

- Community cloud

- experience cloud


			



---

</p>
</details>




<br/>




<details>
<summary> <h3> order of execution </h3> </summary>
<p>

<table>
<tr>
<td>

	- 1. System Validation Rules
	- 2. Apex Before Triggers
	- 3. Custom Validation Rules
	- 4. Duplicate Rules
	- 5. Apex After Triggers

</td>
<td>

	- 6. Assignment Rules
	- 7. Auto-Response Rules

</td>
<td>

	- 8. Workflow Rules
	- 9. Processes
	- 10. Flows

</td>
<td>

	- 10. Escalation Rules
	- 11. Roll-Up Summary Fields
	- 12. Criteria based sharing rules

</td>
</tr>
</table>
</p>
</details>

![image](https://user-images.githubusercontent.com/63545175/192946302-886d6927-644a-4225-a40c-7955c99f16a3.png)

![full save cycle](https://user-images.githubusercontent.com/63545175/214839473-490a4c10-5343-4e65-920f-7d72ef058d7a.png)



<br/>

<br/>

<br/>

<br/>


## [Who is Admin, What he do, His position in team](https://www.youtube.com/watch?v=xhbMHNbjKK8)

### Where is Admin ?

***People from client side***
```
- Business Executive Sponsor
	- ensure project goals are aligned with company's overall stratergy
	- communicate goals
- IT Executive Sponsor
	- set priority on which project to do first, and which to do later
	- approve budget for a project
	- removes technical road-blocks, such as subscribing to a 3rd party API
- Subject Matter Experts(SME's)
	- they will be explaining the day in life of various roles inside the org.
	- assist the UI & UX development
	- assist in User Acceptance Testing
```

***People from IT parter side***	
```
- Engagement Manager
- Solution Consultant
- Project Manager
- Business Analyst
- Salesforce Admin
	- he can be working through IT parter(or Consultancy) or directly from Client Side also
```





### Core Admin Responsiblities
- User Management 
	- who can access and also what can be accessed by them.
- Data Management
	- Review and Maintain Backup
	- Cleanse Data
	- Review and Refresh Sandboxes
	- Maintain and Improve Your Org
	- Data import & Exporting Data
	- Managing Duplicate Data
	- Data Optimization
- Security[(and Levels of Security)](https://github.com/saif-mal1k/Salesforce-Notes/tree/main/2.%20Admin/chapter%2004%20Data%20Security)
- Actionable Analytics[(Reports & Dashboards)](https://github.com/saif-mal1k/Salesforce-Notes/tree/main/2.%20Admin/chapter%2009%20Reports%20%26%20Dashboards)


  
  
  


