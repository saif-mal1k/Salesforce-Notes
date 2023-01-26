
## Salesforce terminologies
![image](https://user-images.githubusercontent.com/63545175/188314760-13b4424a-b492-4f14-9cea-5ad50cddd374.png)
- **1. App** :	_A set of fields, objects, permissions, and functionality to support a business process_
- **2. Object** :	_A table in the database; in that spreadsheet example, an object is a tab on the spreadsheet_
- **3. Record** :	_An item you are tracking in your database; if your data is like a spreadsheet, then a record is a row on the spreadsheet_
- **4. Field** :	_A place where you store a value, like a name or address; using our spreadsheet example, a field would be a column on the spreadsheet_
- **5. Org** :	_Short for “organization,” the place where all your data, configuration, and customization lives. You and your users log in to access it. You might also hear this called “your instance of Salesforce”_


<br/>

<br/>


### Types of orgs
<details>
<summary>  <b> Production, Scratch, Sandbox, Developer Edition, Trailhead Playground</b>  </summary>
<p>
  
---

### Production org 
  - Production environment (Business logic + Live data)
  - Production org is the main org of company.
  - For login to production org you go to login.salesforce.com
  
### Scratch org
- They’re automatically destroyed every seven days.
- Scratch orgs are empty without any data or metadata.
  - You can develop new features and know that nothing else will interfere with your code. 
  - If something’s not working, it is most definitely your code, and not someone else’s customization.


### Sandbox org
  - Testing environment (Business logic + sample data)
  - Sandbox org is an identical copy of production metadata or metadata and data.
  - Sandbox org are designed for development, testing and training activities.
  - For login in sandbox org you go to test.salesforce.com
  - Username & passwords in sandbox are same as in production org (username will have .nameofthesandbox at the end)
  - There are 4 types of sandbox
    - ***Developer sandbox*** : _Development, Unit testing_
      - Includes a copy of your production org’s configuration (metadata), no data
    - ***Developer pro sandbox*** : _Integration testing, Quality Assurance_
      - Includes a copy of your production org’s configuration (metadata), no data
    - ***Partial copy sandbox*** : _User Acceptance Testing, Staging_
      - Includes a copy of prod org's metadata and, sample data (10k records per object)
    - ***Full copy sandbox*** : _Training, Deployment_
      - Exact copy of production
      
![image](https://user-images.githubusercontent.com/63545175/205821628-44378988-a24e-4576-b6dd-897a89a6b7ba.png)   

![image](https://user-images.githubusercontent.com/63545175/198032578-571b9e52-0440-4cbd-9b23-3d4fa5186122.png)



<br/>

<details>
<summary> <h3> Developer Edition org </h3> </summary>
<p>

---


### Methods to login to salesforce
- i. Web Browser through https://login.salesforce.com/ URL. 
- ii. External API (Application Programming Interface) like Data loader. 
- iii. Single Sign On (SSO).
- iv. OAuth.


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


### Open setup type ``company information`` to view details about the company


<details>
<summary> <b> Installation of apps from <a href="https://appexchange.salesforce.com/"> appExchange </a> </b> </summary>
<p>
  
---
  
### What is AppExchange
  - An online marketplace for salesforce apps, components and consulting services.
  - Link: https://appexchange.salesforce.com/
  
  
---  
  
<p>
</details>

---

</p>
</details>

  - Developer environment (Business logic for development or enhancement)
  - They are provided for free to developers to test and understand new functionalities.
  - Login is similar as production org (you go to login.salesforce.com)

<br/>

### Trailhead Playground (TP) org
  - It is a safe environment where you can practice the skills you’re learning before you take them to your real work.
  - These orgs are self destructive when not used for a long time.

<br/>

**💡 Tip:** _Sandboxes are not available for developer Ed Org & Trailhead Playground org. <br/> main purpose of sandbox is testing, development, tutorial. hence, sandbox not required for developer ed org, Trailhead playground org._

---
  
</p>
</details>


<br/>

<br/>


### Types of Apps
***Standard navigation***
  - Allows to access only one record.

***Console navigation***
  - Allows to access multiple records on same page.
  - Easier to access related records.

**Tip:** _Console navigation is mostly used in service centres._


<br/>

<br/>


### Types of tabs
<details>
<summary>  <b> Custom object tabs, Web tabs, Visualforce tabs, Lightning Component tabs, Lightning Page tabs </b>  </summary>
<p>
  
---

![image](https://user-images.githubusercontent.com/63545175/193032535-2856f6a1-9276-484d-a053-850af20a288e.png)

---
  
</p>
</details>

> **Note:** _Custom objects can have tabs, but no option to create tabs for those standard objects that aren't having one._

<br/>





