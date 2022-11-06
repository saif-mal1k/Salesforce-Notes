
## Static Resources
- Static resources allow's to upload content that you can reference in a Visualforce page. 
- Resources can be archives (such as .zip and .jar files), images, stylesheets, JavaScript, and other files.
- Static resources are **managed and distributed by Lightning Platform**, which **acts as a content distribution network (CDN) for the files**. 
- Caching and distribution are handled automatically.
- Static resources are **referenced in Visualforce using the ``$Resource global variable``**, and can be used as a parameter to functions such as ``URLFOR()``.


<br/>


### Uploading file as a static resources
<img src="https://user-images.githubusercontent.com/63545175/200157270-864538c6-4150-409a-90a3-f4b07fd54bd4.png" width="720px">

#### Advantage
- this jQuery file can be referenced by visualforce page using the expression ``{! $Resource.staticResouceName }``. 
  - ex:``<apex:includeScript value="{! $Resource.jQuery }"/>``
- if required, we dont have to modify each page we you can just edit the static resource and update it. 
- use ``<apex:includeScript>`` (for JavaScript files), ``<apex:stylesheet>`` (for CSS stylesheets), or ``<apex:image>`` (for graphics files).



