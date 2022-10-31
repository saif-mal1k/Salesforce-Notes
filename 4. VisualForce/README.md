# visualforce
Visualforce is a ``web development framework`` based on standard web technology of JS framework, it is designed primarily ``to build page-centric mobile and desktop apps``, that can align with the ``styling of Lightning Experience.`` 

- Visualforce pages (and Visualforce components) are stored on Salesforce as a single entity, an ``ApexPage``. 
- an individual Visualforce page is represented as two files in the metadata/pages directory:
  - ``yourPageName.page`` : code for the page
  - ``yourPageName.page-meta.xml`` : page metadata (API version, mobile settings, and so on).

- this page might have dependencies(these dependency are referenced but not included in the page), example:
  - Apex controller
  - extension
  - static resources



<br/>


## Visualforce vs Aura
- **visualforce page is stored in salesforce as a single entity ``ApexPage``, it is represented by two files(**_``yourPageName.page`` i.e code for the page & ``yourPageName.page-meta.xml`` i.e page metadata_**). an individual page or component might have dependencies that are referenced but they are not included in page.**

- **an aura component is represented by multiple files(**_cmpName.auradoc, cmpName.cmp, cmpName.cmp-meta.xml, cmpName.css, cmpName.design, cmpName.svg, cmpNameController.js, cmpNameHelper.js, cmpNameRenderer.js_**). an individual component is stored as a bundle(folder) that includes all resource without dependencies.**

![image](https://user-images.githubusercontent.com/63545175/198946787-7f6f72c1-317c-4cbc-9fe5-d958be77b9a4.png)


<br/>

### client side rendring vs server side rendering
| Visualforce Request Cycle |	Aura Components Request Cycle |
|---------------------------|-------------------------------|
| ![image](https://user-images.githubusercontent.com/63545175/198947561-1fbf144d-bf11-4824-b309-4cd91351a2ac.png) | ![image](https://user-images.githubusercontent.com/63545175/198947576-1b1359e4-83cc-462e-a6e8-b1a32c2265da.png) |
| User requests a page. <br/> The server executes the page’s underlying code and sends the resulting HTML to the browser. <br/> The browser displays the HTML. <br/> When the user interacts with the page, return to step one | The user requests an application or a component. <br/> The application or component bundle is returned to the client. <br/> The browser loads the bundle. <br/> The JavaScript application generates the UI. <br/> When the user interacts with the page, the JavaScript application modifies the user interface as needed (return to previous step). |

<br/>

### Page-by-Page vs. Single-Page Application(SPA's)
***Visualforce-based apps***
- a traditional Visualforce-based app, is a set of pages, and users of the app navigate by moving from one page to another page. 
- **example:** click a view button to go to record view page, click an edit button to go to an edit record page, and so on.

***Aura components based apps***
- for Aura components based apps. There’s only one “page” for the entire app!. Once loaded, the JavaScript runs and updates the user interface of the “page”.
- Through javascript SPA knows which components to load for each state, and those components know how to draw, or render, themselves.
- **example:** Instead of navigating from page to page, users navigate from state to state. A state represents a mode that your app is currently in. The list view state, the view record state, and so on.

### page vs component
A Visualforce page is, intended to stand alone. you can access it with a unique, permanent URL.

An Aura component, is intended to be a part of a page. You can’t access an individual component at a specific URL.


<br/>

<details>
<summary> Question: if Visualforce page also have components(Visualforce components) how is it different ? </summary>
<p>



</p>
</details>

<br/>


## Application Containers
a container is an application context, or an environment in which your code runs. The most obvious container for your Aura components is Lightning Experience.

example: 
```
Salesforce Classic
Visualforce
Salesforce App
Lightning Experience
Lightning App Builder (LAB)
Lightning console apps
Communities
Lightning Components for Visualforce (LC4VF)
Lightning Out
Lightning for Outlook and Lightning for Gmail
Stand-alone my.app
```

note that Different environments offer different services.

- For example, the one.app container (Lightning Experience and the Salesforce app) provides a number of services, including handling events to go to a record, create or edit a record, open a URL, and so on.

- For example, if you use the force:createRecord event to create new records, that works great in Lightning Experience, but if you use that component in a stand-alone app, or Lightning Out, it stops working, because there’s nothing to handle that event.

> **Note:** if you fire an event in a container where nothing is listening, does it have an effect? answer is No.

## Container Containment (a.k.a., The “Russian Doll” Situation)
A container has boundaries. A container keeps inside things in, and outside things out.

You can have Aura components (4) running in a Visualforce page (3) using LC4VF. Then you can use LAB to add the Visualforce page to a Lightning Page (2), then add that Lightning Page to Lightning Experience (1). 



 

<br/>


<br/>

## Visualforce vs LWC

<table>
<tr>
<td>
  
**Visualforce**  
</td>
<td>

**LWC**  
</td>
</tr>
<tr>
<td>
  
- Visualforce renders the page on server. 
</td>
<td>
  
- Lightning Components renders the page on client. 
</td>
</tr>
<tr> 
<td colspan="2">
  
> The advantage of processing on the client is that the HTML block for the entire page isn’t passed back and forth between the client and the server with every interaction.
</td>  
</tr>
<tr>
<td>

- Visualforce is designed primarily for page-centric web apps.
</td>
<td>
  
- Lightning Components was designed primarily for app-centric web apps.
</td>
</tr>
<tr> 
<td colspan="2">
  
> Visualforce characteristic i.e page-centric orientation, can be a poor match for mobile apps with limited, high-latency network connections and limited compute resources. **Lightning Components, by contrast, was designed specifically to handle this context.**
</td>
</tr>
</table>
  
  
<br/>


<br/>


| Tool | Job | why |
|------|-----|----------------|
| LWC | Developing for Lightning Experience	| Lightning Experience was built with Lightning Components. these custom components(_UI elements_) can be added to any page using Lightning App Builder.|
| LWC | Developing for mobile app | Visualforce can be a poor match for mobile apps with limited, high-latency network connections and limited compute resources. Lightning Components, by contrast, was designed specifically to handle this context.|
| Visualforce | Building a Page-Centric Experience with Limited Client-Side Logic | Use Visualforce pages to ensure development velocity and manageability.|
| Visualforce | Building an Interactive Experience with JavaScript and I Need a Third-Party Framework | Use a Visualforce page as a container for your third-party framework such as React |











