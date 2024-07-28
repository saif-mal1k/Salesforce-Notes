## [Use REST API](https://trailhead.salesforce.com/content/learn/modules/api_basics/api_basics_rest)

### REST Resources and Methods

A REST resource is an abstraction of a piece of information or an action, such as a single data record, a collection of records, or a query. Each resource in REST API is identified by a named Uniform Resource Identifier (URI) and is accessed using standard HTTP methods (HEAD, GET, POST, PATCH, DELETE). REST API is based on the usage of resources, their URIs, and the links between them.

A REST request consists of four components: 
- a **resource URI**,
- **an HTTP method**,
- **Request headers** specify metadata for the request.
- **The request body** specifies data for the request, when necessary. If there’s no data to specify, the body is omitted from the request.


<br/>


## [Use SOAP API](https://trailhead.salesforce.com/content/learn/modules/api_basics/api_basics_soap)

### Enterprise and Partner WSDLs
the Web Services Description Language (WSDL) file is basically your map to understanding how to use the API. It contains the bindings, protocols, and objects to make API calls.

Salesforce provides two SOAP API WSDLs for two different use cases. The enterprise WSDL is optimized for a single Salesforce org. It’s strongly typed, and it reflects your org’s specific configuration, meaning that two enterprise WSDL files generated from two different orgs contain different information.

The partner WSDL is optimized for use with many Salesforce orgs. It’s loosely typed, and it doesn’t change based on an org’s specific configuration. Typically, if you’re writing an integration for a single Salesforce org, use the enterprise WSDL. For several orgs, use the partner WSDL.


<br/>


## [Use BULK API](https://trailhead.salesforce.com/content/learn/modules/api_basics/api_basics_bulk)

<br/>








<br/>

<br/>

<br/>

<br/>

<br/>

<br/>

<br/>

<br/>


---

references:
### REST API
*   [_Developer Guide:_ REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.224.0.api_rest.meta/api_rest/)
*   [_External Site:_ Getting Started with Salesforce REST in Java](https://www.jamesward.com/2016/01/26/quick-force-java-getting-started-with-salesforce-rest-in-java)
*   [_External Site:_ HTML URL Encoding Reference](http://www.w3schools.com/tags/ref_urlencode.asp)
*   [_External Site:_ Postman Learning Center](https://learning.postman.com/docs/getting-started/introduction/)

### BULK API
*   [_Developer Guide: Bulk API 2.0 Developer Guide_](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/)
*   [_Developer Guide: Bulk API Developer Guide_](https://developer.salesforce.com/docs/atlas.en-us.224.0.api_asynch.meta/api_asynch/)


