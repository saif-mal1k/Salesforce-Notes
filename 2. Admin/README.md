
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


<br/>


### Methods to login to salesforce
- i. Web Browser through https://login.salesforce.com/ URL. 
- ii. External API (Application Programming Interface) like Data loader. 
- iii. Single Sign On (SSO).
- iv. OAuth.

<br/>

### Signup and Create an account on [developer.salesforce.com](https://www.developer.salesforce.com)


<details>
<summary>  Changing org url <b> My Domain </b>  </summary>
<p>

![image](https://user-images.githubusercontent.com/63545175/192521568-6e40fb7d-0aec-454b-a74c-32c35916b438.png)

</p>
</details>

<details>
<summary> <b> Restrict User Email Domains </b>  </summary>
<p>

	- From Setup, in the Quick Find box, enter Allowed Email Domains, and then select Allowed Email Domains.
	- Click New Allowed Email Domain.
	- Enter a Domain.
		- You can enter a top-level domain, such as companya.org, or a subdomain, such as user.companya.org.
	- Click Save.

</p>
</details>


### open setup type ``company information`` to view details about the company


<details>
<summary> <b> installation of apps from <a href="https://appexchange.salesforce.com/"> appExchange </a> </b> </summary>
<p>
  
---
  
### what is AppExchange
  - an online marketplace for salesforce apps, components and consulting services.
  - link: https://appexchange.salesforce.com/
  
  
---  
  
<p>
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



<br/>

<br/>

<br/>

<br/>


## [Who is Admin, What he do, His position in team](https://www.youtube.com/watch?v=xhbMHNbjKK8)
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
- Security(and Levels of Security)
- Actionable Analytics(Reports & Dashboards)


  
  
  


