
## Static Resources
- Static resources allow's to upload content that you can reference in a Visualforce page. 
- Resources can be archives (such as .zip and .jar files), images, stylesheets, JavaScript, and other files.
- in dev org: static resource cannot exceed 5MB	
- Static resources are **managed and distributed by Lightning Platform**, which **acts as a content distribution network (CDN) for the files**. 
- Caching and distribution are handled automatically.
- Static resources are **referenced in Visualforce using the ``$Resource global variable``**, and can be used as a parameter to functions such as ``URLFOR()``.


<br/>


### Uploading file as a static resources, and referencing in visualforce page
<img src="https://user-images.githubusercontent.com/63545175/200157270-864538c6-4150-409a-90a3-f4b07fd54bd4.png" width="720px">

#### Advantage
- this jQuery file can be referenced by visualforce page(_inside ``<apex:page>``_) using the expression ``{! $Resource.staticResouceName }``. 
  - ***example:*** ``<apex:includeScript value="{! $Resource.jQuery }"/>``
- if required, we dont have to modify each page we you can just edit the static resource and update it. 
- use ``<apex:includeScript>`` (for JavaScript files), ``<apex:stylesheet>`` (for CSS stylesheets), or ``<apex:image>`` (for graphics files).


<br/>


### Uploading files as a zip folder, and referencing in visualforce page
- Create zipped static resources to group together related files that are usually updated together.
> When your static assets are a set of related items—for example, a set of application icons, or a complex JavaScript library—it’s best to create a zipped static resource. Create a zip file containing all of the elements you want to group together, and upload only the one zip file to Lightning Platform.


- Use the $Resource global variable and the URLFOR() function to reference items within a zipped static resource.
- The URLFOR() function can combine a reference to a zipped static resource and a relative path to an item within it to create a URL that can be used with Visualforce components that reference static assets. 

***For example***, 
``URLFOR($Resource.jQueryMobile, 'images/icons-png/cloud-black.png')`` returns a URL to a specific graphic asset within the zipped static resource, which can be used by the ``<apex:image>`` component. 

<br/>


***example:***
```
<apex:page >
    <!--for zipped folder vfimagetest-->
    <apex:image value="{! URLFOR($Resource.vfimagetest, 'cats/kitten1.jpg')}" />
</apex:page>
```

***output:***
![image](https://user-images.githubusercontent.com/63545175/200160778-28b445a0-e844-46e8-8cc9-d9a762f5102a.png)







<br/>

---
***references:***
- [Visualforce Basics | Use Static Resources](https://trailhead.salesforce.com/content/learn/modules/visualforce_fundamentals/visualforce_static_resources?trailmix_creator_id=strailhead&trailmix_slug=prepare-for-your-salesforce-platform-developer-i-credential)




