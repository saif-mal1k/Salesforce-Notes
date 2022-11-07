
## What Is the Lightning Component Framework?
The Lightning Component framework is a UI framework for developing web apps for mobile and desktop devices. 
It’s a modern framework for building single-page applications with dynamic, responsive user interfaces for Lightning Platform apps. 
It uses JavaScript on the client side and Apex on the server side.

<img src="https://user-images.githubusercontent.com/63545175/169451424-0cd16f30-cdb9-4432-949e-ce43174c33a3.png" width="640px">


### Where to Use Lightning Components

- Add Apps to the Lightning Experience App Launcher
- Add Apps to Lightning Experience and Salesforce App Navigation
- Add Lightning Components to Lightning Pages
- Add Lightning Components to Lightning Experience Record Pages
- Launch a Lightning Component as a Quick Action
- Create Stand-Alone Apps


<br/>


## Lightning Experience
Lightning Experience is something you use directly, Lightning Components are something you build apps with.
Lightning Experience is (mostly) buid with Lightning Components.

### why Lightning components
- **Component Set** : Salesforce provides a number of components to bootstrap your app development. 
- **Rapid Development** : The simple markup and pre-made components mean that you can get applications out the door faster than ever. Particularly if you’re comfortable with Visualforce markup, learning component markup is a breeze. 
- **Performance** : The component framework leverages a stateful client (using JavaScript) and a stateless server (using Apex). This structure allows the client to call the server only when absolutely necessary. With fewer calls to the server, apps are more responsive and efficient. 
- **Event-Driven Architecture** : Events are key to the Lightning component framework. Components listen to application and component events and respond accordingly. - 
- **Device-Aware and Cross-Browser Compatibility** : A huge advantage of Lightning components is that developers don’t have to worry about compatibility across devices and browsers.



<br/>



## Visualforce vs Aura
- **visualforce page is stored in salesforce as a single entity ``ApexPage``, it is represented by two files(**_``yourPageName.page`` i.e code for the page & ``yourPageName.page-meta.xml`` i.e page metadata_**). an individual page or component might have dependencies that are referenced but they are not included in page.**

- **an aura component is represented by multiple files(**_cmpName.auradoc, cmpName.cmp, cmpName.cmp-meta.xml, cmpName.css, cmpName.design, cmpName.svg, cmpNameController.js, cmpNameHelper.js, cmpNameRenderer.js_**). an individual component is stored as a bundle(folder) that includes all resource without dependencies.**

![image](https://user-images.githubusercontent.com/63545175/198946787-7f6f72c1-317c-4cbc-9fe5-d958be77b9a4.png)


<br/>

### Server-side rendering vs Client-side rendering 
| Visualforce Request Cycle |	Aura Components Request Cycle |
|---------------------------|-------------------------------|
| ![image](https://user-images.githubusercontent.com/63545175/198947561-1fbf144d-bf11-4824-b309-4cd91351a2ac.png) | ![image](https://user-images.githubusercontent.com/63545175/198947576-1b1359e4-83cc-462e-a6e8-b1a32c2265da.png) |
| User requests a page. <br/> The server executes the page’s underlying code and sends the resulting HTML to the browser. <br/> The browser displays the HTML. <br/> When the user interacts with the page, (return to step one). | The user requests an application or a component. <br/> The application or component bundle is returned to the client. <br/> The browser loads the bundle. <br/> The JavaScript application generates the UI. <br/> When the user interacts with the page, the JavaScript application modifies the user interface as needed, (return to previous step). |

<br/>

### Visualforce Controllers vs Aura Components Controllers
- ***Visualforce*** controllers run on the server side, and are written in Apex.
- ***Aura Component*** controllers run on the client side. And sometimes on the server side, too. they are written in JavaScript. And sometimes also in Apex.

| Visualforce Controller Architecture |	Aura Components Controller Architecture |
|-------------------------------------|-----------------------------------------|
| ![image](https://user-images.githubusercontent.com/63545175/198980044-e8949b81-b745-46ff-802e-cbdf7623a135.png) | ![image](https://user-images.githubusercontent.com/63545175/198980074-67ef3520-bc54-4708-afb9-8c33f7136825.png) |


<br/>

### Page-by-Page vs. Single-Page Application(SPA's)
***Visualforce-based apps***
- a traditional Visualforce-based app, is a set of pages, and users of the app navigate by moving from one page to another page. 
- **example:** click a view button to go to record view page, click an edit button to go to an edit record page, and so on.

***Aura components based apps***
- for Aura components based apps. There’s only one “page” for the entire app!. Once loaded, the JavaScript runs and updates the user interface of the “page”.
- Through javascript SPA knows which components to load for each state, and those components know how to draw, or render, themselves.
- **example:** Instead of navigating from page to page, users navigate from state to state. A state represents a mode that your app is currently in. The list view state, the view record state, and so on.

<br/>

### page vs component
- ***A Visualforce page is, intended to stand alone. you can access it with a unique, permanent URL.***
- ***An Aura component, is intended to be a part of a page. You can’t access an individual component at a specific URL.***


<details>
<summary>  Question: if Visualforce page also have components(Visualforce components) how is it different ?  </summary>
<p>



</p>
</details>

<br/>

### page-centric vs app-centric
***page-centric***
- The traditional Salesforce experience(Salesforce Classic) is an example of a **page-centric** web application model. 
- It’s great for basic functionality, but it’s challenging to deliver the new, more dynamic experience that users expect. 
- Fundamentally, this is because it relies on the server to generate a new page every time you interact with the application.

***app-centric***
- **app-centric** model uses JavaScript on the client-side to deliver a more interactive experience. 
- JavaScript is used to create, modify, transform, and animate the user interface rather than completely replacing it a page at a time. 
- This model is more interactive, and fluid. it is also called ``Lightning Experience``.

> **note:** generally a combination of both ``page-centric`` & ``app-centric`` is used to for better UX.



<br/>


## summarised Comparison
<table>
<tr>
<td>

<details>
<summary> <b> Classic Visualforce </b>  </summary>
<p>

- Visualforce pages are just HTML pages with extra tags resolved by the server. 

</p>
</details> 
 
</td>
<td>

<details>
<summary> <b> Visualforce as a JavaScript Application Container </b>  </summary>
<p>
 
- Visualforce pages are just HTML pages with extra [tags](#summarised-comparison "remember tags are resolved, not JS") resolved by the server. 
- As a result, you can use an empty Visualforce page as a container for a JavaScript application. 
- In this scenario, you don’t use Visualforce tags to build your user interface. 
- Instead, you load your JavaScript application in an empty page. 
- Then the user interface is generated on the client-side by the JavaScript application. 
- These applications are generally referred to as single-page applications, or SPAs, and are often built using third-party frameworks like AngularJS or React.

</p>
</details> 
 
</td>
<td> 
 
**Lightning Components** 
- _Aura_ , _LWC_.
 
</td> 
</tr>
<tr>
<td>
 
**UI generation**
- Server-side
 
**Data & Business Logic**
- Apex standard or custom controller
 
</td>
<td>
 
**UI Generation**
- Client-side (mostly JavaScript)

**Data and Business Logic**
- Remote Objects or JavaScript Remoting, Apex controller 
</td>
<td> 
 
**UI Generation**
- Client-side (JavaScript)
 
**Data and Business Logic**
- Lightning Data Service, Apex 
</td> 
</tr> 
</table>


<br/>


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

> **note** that Different environments offer different services.

- For example, the one.app container (Lightning Experience and the Salesforce app) provides a number of services, including handling events to go to a record, create or edit a record, open a URL, and so on.

- For example, if you use the force:createRecord event to create new records, that works great in Lightning Experience, but if you use that component in a stand-alone app, or Lightning Out, it stops working, because there’s nothing to handle that event.

> **Note:** if an event is fired in a container where nothing is listening, does it have an effect? answer is No.


### Container Containment (a.k.a., The “Russian Doll” Situation)
A container has boundaries. A container keeps inside things in, and outside things out.

> **example:** You can have Aura components (4) running in a Visualforce page (3) using LC4VF. Then you can use LAB to add the Visualforce page to a Lightning Page (2), then add that Lightning Page to Lightning Experience (1). 

an Aura component's code can access only the services of the container it’s running inside of, even if that container is inside of another container.



<br/>




<br/>





## Visualforce vs LWC | what is better

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

| Tool to use | for Job | why ? |
|------|-----|----------------|
| LWC | Developing for Lightning Experience	| Lightning Experience was built with Lightning Components. these custom components(_UI elements_) can be added to any page using Lightning App Builder.|
| LWC | Developing for mobile app | Visualforce can be a poor match for mobile apps with limited, high-latency network connections and limited compute resources. Lightning Components, by contrast, was designed specifically to handle this context.|
| Visualforce | Building a Page-Centric Experience with Limited Client-Side Logic | Use Visualforce pages to ensure development velocity and manageability.|
| Visualforce | Building an Interactive Experience with JavaScript and I Need a Third-Party Framework | Use a Visualforce page as a container for your third-party framework such as React.|


<br/>


<br/>


## Lightning Navigation using ``sforce.one`` object
-  ``sforce.one`` is a **JavaScript Utility Object** i.e **used for Navigation**.
 - sforce.one is automatically injected into page when it runs in Lightning Experience or the Salesforce app. 
 - it is available in JavaScript debugger console and web developer resources list. 
 - sforce.one is primarily used to fire navigation events. 

> **imp-Note:** ``sforce.one`` is available in lightning pages only, there’s no way to get sforce.one in for Visualforce pages in Salesforce Classic.


### methods provided by ``sforce.one`` object
| Function |	Description |
|----------|-------------|
| ``back([refresh ])`` |	Navigates to the previous state that’s saved in the sforce.one history. It’s equivalent to clicking a browser’s Back button. |
| ``navigateToSObject(recordId [, view ])`` |	Navigates to an sObject record, specified by recordId . |
| ``navigateToURL(url [, isredirect ])`` |	Navigates to the specified URL. |
| ``navigateToFeed(subjectId, type )``	| Navigates to the feed of the specified type, scoped to the subjectId .|
| ``navigateToFeedItemDetail(feedItemId )`` |	Navigates to the specific feed item, feedItemId, and any associated comments.|
| ``navigateToRelatedList(relatedListId, parentRecordId )`` |	Navigates to a related list for the parentRecordId .|
| ``navigateToList(listViewId, listViewName, scope )`` |	Navigates to the list view that’s specified by the listViewId, which is the ID of the list view to be displayed.|
| ``createRecord(entityName [, recordTypeId ])`` |	Opens the page to create a new record for the specified entityName, for example, “Account” or “MyObject__c”.|
| ``editRecord(recordId )`` |	Opens the page to edit the record specified by recordId .|


**Don’t use static URLs to Salesforce resources.** 
There are actions and functions for viewing, creating, editing, and so on. Use them, rather than URL strings.

> **example:** That is, if adding a link to edit a Contact record, don’t create the link by building a string with a static pattern like link = '/' + accountId + '/e'. It is not best approach:

- In Visualforce markup, use ``{!URLFOR($Action.Contact.Edit, recordId)}``
- In JavaScript, use ``navigateToSObject(recordId)``


<br/>


## know what theme current user is using
- `$User.UIThemeDisplayed` : tells the current user experience context when used in Visualforce markup.
- `UITheme.getUITheme()` : tells the current user experience context when used in a JavaScript static resource.
- `UserInfo.getUiThemeDisplayed()` : tells the current user experience context when used in Apex.

***types of themes available in salesforce:***

```
  Theme1—Obsolete Salesforce theme
  Theme2—Salesforce Classic 2005 user interface theme
  Theme3—Salesforce Classic 2010 user interface theme
  Theme4d—Modern “Lightning Experience” Salesforce theme
  Theme4t—Salesforce mobile app theme
  Theme4u—Lightning Console theme
  PortalDefault—Salesforce Customer Portal theme
  Webstore—Salesforce AppExchange theme
```

<br/>









<br/>


<br/>


<br/>


<br/>

--- 

***references:***
- A “session” for our purposes here is basically some kind of token that your browser re-uses from request to request so that you don’t need to enter your username and password for every request. You often need to access the current session using the global variable $Api.Session_ID .
- $Api.Session_ID returns different values depending on the domain of the request. This is because the session ID varies during a session whenever you cross a hostname boundary, such as .salesforce.com to .force.com. Normally Salesforce transparently handles session hand-off between domains, but if you’re passing the session ID around yourself, be aware that you might need to re-access $Api.Session_ID from the right domain to ensure a valid session ID.

<br/>

- [Develop for Lightning Experience](https://trailhead.salesforce.com/content/learn/trails/lex_dev)
- [Make the Move to Lightning Experience](https://trailhead.salesforce.com/content/learn/trails/lex_admin_migration)
- [Visualforce & Lightning Experience](https://trailhead.salesforce.com/content/learn/modules/lex_dev_visualforce)


<br/>

- https://trailhead.salesforce.com/content/learn/modules/lex_dev_lc_vf_concepts?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-platform-developer-i-credential





