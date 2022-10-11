# Data Security 
  - salesforce allows to rule what a user or group of users can access.
  - there are 4 levels of data security
    - **Org level** - Control Access to the Org
    - **Object level** - Control Access to Objects
    - **Field level** - Control Access to Fields
    - **Record level** - Control Access to Records
<br/>


## Organisation Level Security
  - maintain a list of authorized users
  - set password policies
  - Limit login to certain hours and locations
    - limit IP through which users can login
    - limit time during which user can login

<details>
<summary>  <b> IMPLEMENTATION </b>  </summary>
<p>  

---
  
<table>
<tr>
<td>  

![image](https://user-images.githubusercontent.com/63545175/190951004-9d7fb6dc-d5f3-4d6d-bc8b-29f9ee413b8d.png)
</td>
<td>  


  - Manage Users
  - create Users
  - Deactivate User
</td>
</tr>
<tr>
<td>  

![image](https://user-images.githubusercontent.com/63545175/190951169-2e688cb8-569a-4b64-a908-fc2cd06cbadc.png)
</td>
<td>  

  - set Password Policies
</td>
</tr>
<tr>
<td>  

![image](https://user-images.githubusercontent.com/63545175/190951591-a9483c83-8180-4c31-beb4-799bed8b0a7e.png)
</td>
<td>  

  - Specify trusted IP ranges
</td>
</tr>
<tr>
<td>  

![image](https://user-images.githubusercontent.com/63545175/190951967-be0d56ed-3732-476d-9fdc-4bf473705551.png)
</td>
<td>  

  - Restrict Login Access by IP Address Using Profiles
</td>
</tr>
<tr>
<td>  

![image](https://user-images.githubusercontent.com/63545175/190952172-642dd8d6-5971-41fc-a635-b462e25ea151.png)
</td>
<td>  

  - Restrict Login Access by Time
</td>
</tr>
</table> 
  

<br/>
  
## use cases

<details>
<summary>  <b> allowing connected apps </b>  </summary>
<p>  


<table>
<tr>
<td>  

![image](https://user-images.githubusercontent.com/63545175/191441198-bc20594a-c5f5-4697-a04a-1f9870ac6f46.png)  
  
![image](https://user-images.githubusercontent.com/63545175/191440992-795b7aee-0366-4dd2-b496-02539e5acae8.png)  
  
![image](https://user-images.githubusercontent.com/63545175/191440866-d461514c-7715-47cb-8eb7-e9a33f95ef22.png)

</td>
<td>  
  
  - allowing IOS/Android apps, access to salesforce
  - making Admin to allow access to connected apps.
</td>
</tr>
</table> 
  
</p>  
</details>

<br/>

<details>
<summary>  <b> Set Login Access Policies <em>("to allow admin to login as any user")</em> </b>  </summary>
<p>  

- From Setup, enter Login Access Policies in the Quick Find box, and select Login Access Policies.
- Select the Enabled checkbox next to Administrators Can Log in as Any User.
- Click Save.

</p>  
</details>

<br/>

### **db freeze & deactivate**
``"Freezing"`` only stops the user from being able to login. When you ``"deactivate,"`` it frees up that salesforce license to be given to another user.

<br/>

---
  
</p>  
</details>



<br/>


## Object Level Permissions
  - control access to standard and custom objects.
  - i.e control permissions to create, read, edit, delete any records on an object.
  - _controlled through_ 
    - **profiles** - to manage the objects that users can access and the permissions they have for each object.
      - ``The settings`` in a user’s profile determine whether the user can see a particular app, tab, field, or record type.
      - ``The permissions`` in a user’s profile determine whether the user can create or edit records of a given type, run reports, and customize the app.
    - **permission sets & permission set groups** - to extend access and permissions without modifying users' profiles.
      - permission set - extend access and permissions without modifying users' profiles, we need to assign user to this permission set to provide these additional permissions.
      - permission set group - if a user needs to be assigned to multiple permission sets, we can just create a permission set group and assign user to it.  


<details>
<summary>  <b> IMPLEMENTATION </b>  </summary>
<p>  

---

### Create , Assign a Profile
_After you've created a profile, customize it to match the needs of a specific set of users, and then assign the profile to those users._
  - Make sure the Enhanced Profile User Interface is enabled in User Management Settings.
  - From Setup, in the Quick Find box, enter **Profiles**, and then select **Profiles**.
  - Click the name of the profile that you want to customize.
  - Edit the profile, setting the most restrictive settings and permissions you can for this user type. (Don’t worry about blocking the user from doing things they need to do. We'll open up more possibilities for them later, when we give them permission sets.)
  - From Setup, in the Quick Find box, enter **Users**, and then select **Users**.
  - Click **Edit** next to the user that you want to assign the profile to.
  - In the **Profile** dropdown, select the profile that you just set up. Then, click **Save**.
  
<br/>
  
### Create , Assign a Permission Set

![image](https://user-images.githubusercontent.com/63545175/190956581-8a174551-af20-4dd6-9606-162ee1e3553d.png)
  
  - Click **Clone** next to the set you want to copy. 
    - A cloned **permission set** has the same user license as the original. 
  
  - To create a set with a different license, click **New**.
    - Locate the New **Permission Set** button.

  - _If this is a new permission set, select a user license option._
    - If you plan to assign this permission set to multiple users with different licenses, select --None--.
    - If only users with one type of license will use this permission set, select that user license.

![image](https://user-images.githubusercontent.com/63545175/193504473-159880bb-90e7-4e0e-bd8d-06481f57f976.png)
  
  - _to manage assignments_
    - Click **Save** to go back to the permission set overview page.
    - In the **permission set** toolbar, click Manage **Assignments**, then click **Add Assignments**.  
    - Select the users to assign to this permission set and click **Assign**. 
    - Review the messages on the Assignment Summary page. 
    - If any users weren’t assigned, the Message column tells you why.
    - Click **Done** to return to a list of the users assigned to the permission set.
  
<br/>
  
  
### permission set vs permission set group

<table>
<tr>  
<td>
  
![image](https://user-images.githubusercontent.com/63545175/193506836-ef70b079-dc20-43ac-b091-c0a24d7a6a76.png)  
  
</td>
<td>

![image](https://user-images.githubusercontent.com/63545175/193506797-b9a9c8aa-78cf-46f2-83f6-d1e5711a168c.png)  
  
</td>  
</tr>
</table>
  
  


---  
  
</p>  
</details>

<br/>


## Field Level Permissions
  - control access to certain fields, even if user has object level access.
  - there are two permissions on field level
    - read - allows user to view only
    - edit - allows user to view and update and delete
    - if nothing is selected, field wont be visible to user.
  - _controlled through_ 
    - **profiles** - to manage the objects that users can access and the permissions they have for each object. 
    - **permission sets** - provides additional permissions, on top of the permissions users get through their profiles.

<details>
<summary> <b>why field level permissions, when we can hide field using page layouts.</b> </summary>  
<p>

***Answer:*** field level permissions cotrols the visiblity of fields in any part of the app including related list, list views, reports & search results which can'not be secured through page layouts.  
</p>
</details>

<details>
<summary> <b> IMPLEMENTATION </b> </summary>  
<p>

---
  
### Restrict Field Access with a Profile
  - From Setup, in the Quick Find box, enter Profiles, and then **select Profiles.**
  - Select the profile you want to change.
  - Click **Object** Settings and select the object for which you want to update the field settings.
  - Click **Edit.**
  - Under **Field Permissions**, for each field, specify the kind of access you want for users with this profile, and save your settings.  
  
<br/>
  
### Add Field Access with a Permission Set
  - From Setup, in the Quick Find box, enter **Permission Sets**, and then select **Permission Sets**.
  - Select a permission set and click **Object Settings**.
  - Click the object you're working with, then click **Edit**. In this example, we're modifying the Candidate object.
  - Under **Field Permissions**, specify the kinds of access your interviewers need, then save this permission set.

![image](https://user-images.githubusercontent.com/63545175/190957328-45611ed7-aece-4239-aa6f-c341a162c3d4.png)
  
  - Click **Manage Assignments** and select the users who you expect to need the permissions you’ve just specified. Click **Add Assignments** and **Done**, and you're done!
  

</p>
</details>

<br/>


## Record Level Security
  - control access to records for users, even if user has object level access
  - When object-level permissions conflict with record-level permissions, the most restrictive settings win.
  - ex: a user can view his own records, but not others
  - to manage record level access -
    - **sharing settings** -
      - **Org wide defaults** - 
        - specify the default level of access users have to each others’ records.
        - ex: ``Private``, ``Public Read Only``, ``Public Read/Write``, ``Public Read/Write/Transfer``(_available for Lead & Case_), ``Controlled by Parent``(_available for child in a master detail relationship_).
        - ``Private`` means records will be accessible to record owners only and soon.
      - **Sharing rules** - 
        - Sharing rules are exceptions to OWD for particular groups of users.
        - Sharing rules give access of records(``Based on group membership`` | ``Based on criteria``) to users so they can get to records they don’t own or can’t normally see.
        - sharing rules based on criteria can't use formula fields & lookUp fields.
        - They can’t be stricter than your organization-wide default settings.
    - **Role Hierarchies** - 
      - give access for users higher in the hierarchy to all records owned by users below them in the hierarchy.
      - Role hierarchies don’t have to match your organization chart exactly. 
      - Instead, each role in the hierarchy must represent a level of data access that a user or group of users needs.
    - **Manual Sharing** - 
      - allows owners of particular records to share them with other users.


<details>
<summary>  <b> &nbsp; &nbsp; &nbsp; ➤ &nbsp; Restriction rules, Scoping rules </b>  </summary>  
<p>  

---

***Restriction rules:** Use restriction rules when you want certain users to only see a specific set of records.*
  
_"When a restriction rule is applied to a user, the data that they had read access to via your sharing settings is further scoped to only records matching the record criteria that you set. This behavior is similar to how you can filter results in a list view or report, except that it’s permanent."_
  
![image](https://user-images.githubusercontent.com/63545175/193261080-8cddab61-24bb-4d22-b5c3-043d1af659ad.png)


***Scoping rules:** Use scoping rules to control the records that your users see based on criteria you select. Users can still access the records allowed by your sharing settings.*

_"With scoping rules you can set criteria to help your users see only records that are relevant to them. Scoping rules don’t restrict the record access that your users already have. They scope the records that your users see. Your users can still open and report on all records that they have access to per your sharing settings."_  
  
![image](https://user-images.githubusercontent.com/63545175/193261894-84fe2ad9-2b3e-4de8-9517-17d5e185abdd.png)  
  
---  
  
</p>  
</details>  


<details>
<summary> <b>IMPLEMENTATION</b> </summary>  
<p>

---  
  
### OWD 
  
<table>  
<tr>
<td>

<image src="https://user-images.githubusercontent.com/63545175/190958557-3c956f50-c0b0-4708-b1d3-be5c631bdf6d.png" width="480px">
</td>
<td>
  
  - ***Private*** 
    - Only the record owner, and users above that role in the hierarchy, can view, edit, and report on those records.
  - ***Public Read Only***
    - All users can view and report on records, but only the owner, and users above that role in the hierarchy, can edit them.
  - ***Public Read/Write***
    - All users can view, edit, and report on all records.
  - ***Controlled by Parent*** 
    - A user can view, edit, or delete a record if she can perform that same action on the object it belongs to.

</td>
</tr>  
</table>
  
### Set Your Org-Wide Sharing Defaults
  
<table>  
<tr>
<td>

<image src="https://user-images.githubusercontent.com/63545175/190959075-ea204842-fa6e-4cb5-b7e7-cbe5cca3cd13.png" width="780px">
</td>
<td>
  
_Use org-wide defaults to specify the baseline level of access that the most restricted user should have._
  - From Setup, in the Quick Find box, enter Sharing Settings, and then select Sharing Settings.
  - Click Edit in the Organization-Wide Defaults area. 
  - For each object, select the default internal access and default external access.
  - To disable automatic access using your hierarchies, deselect Grant Access Using Hierarchies for any custom object that doesn't have a default access of Controlled by Parent.

</td>
</tr>  
</table>
  
### Sharing rules
***inside sharing settings, under owd you'll find sharing rules for each object.***
  
<br/>
  
### setting up roles
***role hierarchies don't have to match your org chart. Each role in the hierarchy just represents a level of data access that a user or group of users needs.***

<table>  
<tr>
<td width="480px">

<image src="https://user-images.githubusercontent.com/63545175/190960002-5a5911fd-938d-4f08-894e-2ccae6d31063.png" width="780px">
</td>
<td>
  
> - Use the **Grant Access Using Hierarchies** checkbox to disable access to records to users above the record owner in the hierarchy for custom objects. 
> - If you deselect this checkbox for a custom object, only the record owner and users granted access by the org-wide defaults receive access to the records.

> - Even if **Grant Access Using Hierarchies** is deselected, some users—such as those with the “View All” and “Modify All” object permissions and the “View All Data” and “Modify All Data” system permissions—can still access records they don’t own.

</td>
</tr>  
</table>  
  
<details>
<summary> <b> What is Grant Access Using Hierarchies? </b> </summary>
<p>
  
Say there are three roles:
  
```
    Role A
        Role B
            Role C
```
  
- ``Role A`` is higher in hierarchy, ``Role B`` is in middle and ``Role C`` is lower in hierarchy

- If the ``Role A`` user through Manual Sharing or Sharing Rules, shares the record to ``Role C`` user who is in lower hierarchy, then the ``Role B`` user who is above in hierarchy to ``Role C`` user can see the records, if we enable Grant Access Using Hierarchies at OWD in sharing settings else if Grant Access using Hierarchies is disabled ``Role B`` user cannot see the record.
  
- By default grant access using hierarchy is enabled, it allows roles higher in hierarchy to access records accessible to roles lower in hierarchy.

---
  
</p>
</details>  
  
<br/>
  
### Manual sharing
***when a user himself shares his records with someone else it comes under manual sharing.***  

  
---
  
</p>
</details>


<br/>


<br/>


<br/>


<br/>


### Summary

<table>
<tr>
<td width="170px">  

![image](https://user-images.githubusercontent.com/63545175/190900334-ca4b66e6-d517-4359-ae85-67360af154ae.png)

- profiles and permission sets  
</td>  
<td width="170px">

![image](https://user-images.githubusercontent.com/63545175/190900364-8eccabfe-4116-4fa4-acbc-6e7b477a01b6.png)

- profiles and permission sets 
  
</td>
<td width="340px">  

![image](https://user-images.githubusercontent.com/63545175/190900387-e7558e74-724d-4eb4-9953-9c1271102f1c.png)

</td>  
</tr>  
</table> 







<br/>


<br/>


<br/>


<br/>



---
***references***

1. https://trailhead.salesforce.com/content/learn/modules/data_security
2. https://trailhead.salesforce.com/content/learn/projects/protect-your-data-in-salesforce?trail_id=learn-admin-essentials
3. https://help.salesforce.com/s/articleView?id=sf.security_data_access.htm&type=5
4. https://trailhead.salesforce.com/content/learn/modules/permission-set-groups?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-administrator-credential







