
# what is APEX ?
- ***Object Oriented***
- ***Compiled programming language***
- ***Strongly typed***

<details>
  <summary><b><em> Case insensative </em></b></summary>
<p>

---  
_To avoid confusion with case-insensitive ``SOQL`` and ``SOSL`` queries, Apex is also case-insensitive._
- Variable and method names are case-insensitive. 
  - ***For example:*** 
    - ✔️ **``Integer I;``**  
    - ✔️ **``Integer i;  This would be an error.``**
- References to object and field names are case-insensitive.
  - ***For example:*** 
    - ✔️ **``Account a1;``**  
    - ✔️ **``ACCOUNT a2;``**
- ``SOQL`` and ``SOSL`` statements are case- insensitive.
  - ***For example:*** 
    - ✔️ **``Account[] accts = [sELect ID From ACCouNT where nAme = 'fred'];``**  
  
---

</p>
</details>

<details>
  <summary><b><em> Integrated with Database </em></b></summary>
<p>

---

provides direct access to records & fields

---

</p>
</details>


<details>
  <summary><b><em> multi-tenet </em></b></summary>
<p>
  
---
### what is multi-tenet Architecture ?

#### what is single-tenet architecture?
Single-tenancy architecture is one in which a single instance of a software application and supporting infrastructure serves one customer. _tenet means:"cloud customer", here cloud costomer is a business that rely on aws / azure / GCP_
in single tenet architecture a single compute-node serves a single tenet, these tenet are stateful("this means they have pre existing knowledge of the client they are serving").
  
***these ``single-tenet`` architectures were widely used in SaaS & PaaS models.***
  
#### problems with single-tenet architecture?
- if a compute node goes down, that means an entire customer("here business") and all of their users were completely unable to access their instance.
- **upgrade became impractical**, if a cloud service provide has tens of thousands of customers, that means they have tens of thousands of compute-nodes. to upgrade service style they will have to apply upgrade to every single one of them. _"upgrades are complex time consuming process, that leads to downtime."_
- **requires vertical scaling**, that means a new customer need new set of resources.
- **Can't Personalise services**, since each customer have a dedicated compute node, that means irregular customer that don't need extra resources, will be having same amount of resources as of customer who are regular and actually need it. _"this leads to inefficient utilisation of resources, that cost much to cloud service providers"_

#### what is multi-tenet Architecture ?
- in multi tenet architecture any customer can be served by any compute node, these tenet are stateless("this means they can figure out any of the information they need to know and apply"). 
  
***these ``multi-tenet`` architectures are widely used in SaaS & PaaS models.***

  
### why would you use one ? Advantages of multi-tenet architecture.
- if a compute node goes down it won't effect any customer and their user.
- **upgrade are easy**, ``as there is just one big system serving all the customers.`` or ``you can just spin up with new compute nodes running the latest version of the software.`` _"that means zero down time"_  
- **allows horizontal scaling**, that means if compute-node / resource seem insufficient you can just add one more.
- **can personalise service**, cost effective.

 
---
  
</p>
</details>

<details>
  <summary><b><em> Called through web service request, triggers</em></b></summary>
<p>

---

- web service request
- triggers

---

</p>
</details>

**💡 note: *apex code can only be written in developer org or sandbox org, not in production org***



<br/>


<br/>

<details>
<summary> <b> <h3> What APEX can do ? </h3> </b> </summary>
<p>

---

- APEX can be used to stop a functionality to an action, or to add more functionality. but it can't modify standard salesforce functionality.


---

</p>
</details>




<details>
<summary> <b> <h3> What APEX can not do ? </h3> </b> </summary>
<p>

---

- APEX executes, exist only on the servers of force.com and not on client or developer system.
- APEX can't modify standard salesforce functionality. 
- there is no standard input and output, generally, Record and field values are taken as input from Objects and Output is the result that is reflected from from operations that are performed using APEX.
- apex does not create temp files so no need to worry about file handling.
- apex does not allow multi-threading.
- as everything exist on servers of force.com , hence no need of managing environment or upgrading developer tools.
- Apex doesn't allow interfaces, doesn't allow access modifiers. 
- Apex doesn't allow default parameters.
- no concept of pointers and references.

---

</p>
</details>




<details>
<summary> <b> <h3> When to Use APEX ? </h3> </b> </summary>
<p>

---

***tip 💡 :*** salesforce has a solution for almost any functionality you can think. so, Only Use APEX if the functionality can not be implemented using declarative approach("i.e using point and click tools").

---

</p>
</details>




<details>
<summary> <b> <h3> Methods of Invoking Apex </h3> </b> </summary>
<p>

---

| Method| 	Description| 
|-------|--------------|
| Database Trigger| 	Invoked for a specific event on a custom or standard object.| 
| Anonymous Apex| 	Code snippets executed on the fly in Dev Console & other tools.| 
|Asynchronous Apex|	Occurs when executing a future or queueable Apex, running a batch job, or scheduling Apex to run at a specified interval.| 
| Web Services| 	Code that is exposed via SOAP or REST web services.| 
| Email Services| 	Code that is set up to process inbound email.| 
| Visualforce or Lightning Pages| 	Visualforce controllers and Lightning components can execute Apex code automatically or when a user initiates an action, such as clicking a button. Lightning components can also be executed by Lightning processes and flows.| 


---

</p>
</details>


<br/>


## Life cycle
- APEX is saved, compiled and executed on the servers of force.com 
<table>
<tr>  
<td>
  <a href="#life-cycle"><img src="images/lifecycle-of-apex.png" width="850vw" alt="life-cycle-of-apex"></a>  
</td>
</tr>
</table>



