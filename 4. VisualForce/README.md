# visualforce

![image](https://user-images.githubusercontent.com/63545175/199729399-312bc998-d5ac-4f32-9305-d7c7a69b0ecc.png)


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


## Where to use Visualforce
- Add a Visualforce Page as a Component in the Lightning App Builder
- Add a Visualforce Page to the Navigation Bar
- Launch a Visualforce Page as a Quick Action
- Display a Visualforce Page Using standard & Custom Buttons or Links



<br/>

## Viewing Visualforce Pages During Development
- for that, url is https://yourInstance.salesforce.com/apex/PageName URL pattern. 
- but, this works in Salesforce Classic, it doesn’t work in Lightning Experience.
- In order to view your page in Lightning Experience, you need to access the Lightning Experience container app. This means accessing /lightning . If you’re accessing that, you can’t access /apex/PageName . 

<br/>



## Visualforce App Container
The largest difference between Visualforce in Lightning Experience and Visualforce in Salesforce Classic is the environment it runs in. 
- In Salesforce Classic, Visualforce “owns” the page, the request, the environment. Visualforce is the application container. 
- In Lightning Experience, Visualforce runs inside an iframe that’s wrapped inside the larger Lightning Experience container.

> **Note:** in lightning experience visualforce runs in iframe used in a lightning page i.e contained inside Lightning Experience Container i.e SPA. 

<br/>

## The Outer Lightning Experience Container (when using on Lightning page)
The Lightning Experience container is a “single-page application,” or SPA, which is accessed at the /lightning URL. The /lightning page loads, its code starts up, and that application code takes over the environment.

#### important notes
- Lightning Experience, or /lightning, is in charge of the request.  Visualforce page is not. Visualforce page needs to work within constraints that Lightning Experience imposes upon it. Lightning Experience is the parent context, and Visualforce page is the child context.

***some of the constraints are:***
- the size of the frame in which your Visualforce page is displayed, are imposed directly by Lightning Experience. 
- the browser it's running in imposes mostly security and JavaScript execution constraints. they are implicit constraints i.e can't be modified. 


<br/>



### Impact of this outer container

- **Security**
  - Session maintenance and renewal
  - Authentication
  - Cross-domain requests
  - Embedding restrictions

> session ID inside the Visualforce iframe will be different than the session ID outside the iframe, in another part of Lightning Experience. 

<br/>

- **Scope**
  - DOM access and modification
  - JavaScript scope, visibility, and access
  - JavaScript global variables such as window.location

> outer javascript context i.e Lightning Experience Container won't affect javascript context of visualforce page i.e in iframe. and vice-versa.
> <br/> for talking to and fro there are APIs available in Visualforce pages, primarily for navigation. also window.postMessage can be used to send a message to receiving code in the other frame.



<br/>


### What things visualforce can't access when used in lightning page

#### to navigate from current page to another
- ``a visualforce page can't access`` **``window.location()``** ``javascript object in lightning experience`` because visualforce page is rendered inside iframe in Lightning Experience Container. it is available to visualforce in salesforce classic because there visualforce page is rendered inside Visualforce container. 
- ``sforce.one`` is available in lightning pages only, there’s no way to get sforce.one in for Visualforce pages in Salesforce Classic.

> **alternate:** Create a link using the expression ``{!URLFOR($Action.Contact.Edit, recordId)}`` works in both lightning and classic.


<br/> 


<br/> 


## Best Practices
- Visualforce pages use the same visual styling in both Salesforce Classic and Lightning Experience.
  - You can easily add a stylesheet specific to Lightning Experience to your Visualforce pages.
  - The Lightning Design System is the best way to add the Lightning Experience visual design to your pages.
- If you're creating new Visualforce pages for Lightning Experience from scratch, 
  - you should use the Lightning Design system it includes CSS stylesheets, icons and fonts.
  - By default, built-in Visualforce components always use Salesforce Classic visual design.




<br/>


<br/>


<br/>


<br/>


<br/>


---
***references:***
- [Quick Start: Visualforce](https://trailhead.salesforce.com/content/learn/projects/quickstart-visualforce)
- [Visualforce Basics](https://trailhead.salesforce.com/content/learn/modules/visualforce_fundamentals?trail_id=force_com_dev_beginner)

- https://trailhead.salesforce.com/content/learn/modules/lex_dev_visualforce/lex_dev_visualforce_intro?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-platform-developer-i-credential




