

```

- What happens to changes in the result when a page calls an Apex controller, 
	which calls another Apex class, and then hits a governor limit?
	- Any changes up to the error are rolled back.
  
- What is the preferred way to reference web content such as images, stylesheets, JavaScript, and other libraries that are used in Visualforce pages?
	- upload the content as static resource
	- import the static resource and provide a javascript property for it.
	- reference the property in html template.
	- <apex:includeScript> <script> can be used to load external javaScript files into a Visualforce page.
 
- you cant have two standard controllers on a visualforce page.

- if visualforce page is using standard controller of child object, you need a controller extension to query for parent data or you can use merge field syntax.
- standard set controller can be used to implement pagination.
- <apex:messages> can be used to display error messages on the visualforce page.

- .cmp is the suffix of lightning component bundle

- a method using the @InvocableMethod annotation can be declared as public or global.
- a method using the @InvocableMethod annotation must be declared as static.
- only one method using the @InvocableMethod annotation can be defined per apex class.

- when a child LWC is nested inside parent LWC
	- the parent component can use custom event to pass the data to the child component.
	- the parent component can use a public property to pass the data to the child component.


```



[Lightning Web Components Basics | Add Styles and Data to a Lightning Web Component](https://trailhead.salesforce.com/content/learn/modules/lightning-web-components-basics/add-styles-and-data-to-a-lightning-web-component?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-platform-developer-i-credential) ????
