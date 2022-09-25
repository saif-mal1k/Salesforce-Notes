
## salesforce terminologies
![image](https://user-images.githubusercontent.com/63545175/188314760-13b4424a-b492-4f14-9cea-5ad50cddd374.png)
- **1. App** :	_A set of fields, objects, permissions, and functionality to support a business process_
- **2. Object** :	_A table in the database; in that spreadsheet example, an object is a tab on the spreadsheet_
- **3. Record** :	_An item you are tracking in your database; if your data is like a spreadsheet, then a record is a row on the spreadsheet_
- **4. Field** :	_A place where you store a value, like a name or address; using our spreadsheet example, a field would be a column on the spreadsheet_
- **5. Org** :	_Short for “organization,” the place where all your data, configuration, and customization lives. You and your users log in to access it. You might also hear this called “your instance of Salesforce”_


<br/>

### types of orgs
<details>
<summary>  <b> Production, Sandbox, Developer Edition</b>  </summary>
<p>
  
---

### Production org 
  - production environment (Business logic + Live data)
  - production org is the main org of company.
  - for login to production org you go to login.salesforce.com
  
### Sandbox org
  - testing environment (Business logic + sample data)
  - sandbox org is an identical copy of production metadata or metadata and data.
  - sandbox org are designed for development, testing and training activities.
  - for login in sandbox org you go to test.salesforce.com
  - username & passwords in sandbox are same as in production org (username will have .nameofthesandbox at the end)
  - there are 4 types of sandbox
    - ***developer sandbox***
      - identical copy of prod metadata and, no data
      - data space: 200 MB
      - file space: 200 MB
    - ***developer pro sandbox***
      - identical copy of prod metadata and, no data
      - data space: 1 GB
      - file space: 1 GB
    - ***partial copy sandbox***
      - identical copy of prod metadata and, sample data (10k records per object)
      - data space: 5 GB
      - file space: 5 GB
    - ***full copy sandbox***
      - exact copy of production
      - data space: same as prod
      - file space: same as prod

  
<image src="https://user-images.githubusercontent.com/63545175/191734866-a14f8ee4-8d8e-4c67-8927-f093d1c2ad9b.png" width="720px">



<br/>

### Developer Edition org
  - developer environment (Business logic for development or enhancement)
  - they are provided for free to developers to test and understand new functionalities.
  - login is similar as production org (you go to login.salesforce.com)

<br/>

### Trailhead Playground (TP) org
  - it is a safe environment where you can practice the skills you’re learning before you take them to your real work.
  - these orgs are self destructive when not used for a long time.

<br/>

**💡 tip:** _sandboxes are not available for developer Ed Org & Trailhead Playground org. <br/> main purpose of sandbox is testing, development, tutorial. hence, sandbox not required for developer ed org, Trailhead playground org._

---
  
</p>
</details>


<br/>

### types of Apps
***standard navigation***
  - allows to access only one record.

***Console navigation***
  - allows to access multiple records on same page.
  - easier to access related records.

**tip:** _console navigation is mostly used in service centres._

---

<br/>





