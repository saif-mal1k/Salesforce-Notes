### uploading file via postman(connected app) by exposing apex class as rest resource

```apex

@RestResource(urlMapping='/FileUploadDownload/*') 
global with sharing class postmanExposed {
    
    /*
    @HttpDelete
    global static void doDelete() {
        RestRequest req = RestContext.request; 
        RestResponse res = RestContext.response;
        String recordId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1); 
        contentversion cv = [SELECT Id FROM contentversion WHERE Id = : recordId]; 
        delete cv;
        
    }*/
    
    @HttpGet
    global static List<contentversion> doGet() {
        RestRequest req = RestContext.request; 
        RestResponse res = RestContext.response; 
        String sub = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        if(sub == 'listallfiles'){
            return [Select id, title from contentversion];            
        }
        return [Select id, title from contentversion LIMIT 1];            
    }
    
    @HttpPost
    global static String doPost() {
        RestRequest req = RestContext.request; 
        RestResponse res = RestContext.response; 
        
        Id recordId = req.params.get('recordId');
        String contentType = req.params.get('contentType');
        String name = req.params.get('name');
        
        
        try{
            /*
            //Create Document Parent Record
            Account acc = new Account(Name='Test Account');
            Insert acc;
			*/            

            //Create Document
            ContentVersion cv = new ContentVersion();
            //cv.Title = 'Test Document';
            cv.Title = name;
            //cv.PathOnClient = 'TestDocument.pdf';
            cv.PathOnClient = name+'.'+contentType;
            //cv.VersionData = Blob.valueOf('Test Content');
            cv.VersionData = req.requestBody;
            cv.IsMajorVersion = true;
            Insert cv;
            
            //now contentVersion inserted, get content document id
            Id conDocId = [SELECT ContentDocumentId FROM ContentVersion WHERE Id =:cv.Id].ContentDocumentId;
            
            //Create ContentDocumentLink 
            ContentDocumentLink cdl = New ContentDocumentLink();
            //cdl.LinkedEntityId = acc.Id;
            cdl.LinkedEntityId = recordId;
            cdl.ContentDocumentId = conDocId;
            cdl.shareType = 'V';
            Insert cdl;
            
            //RestContext.response.addHeader('Content-Type','application/json');
            //RestContext.response.responseBody = Blob.valueOf(generateJSON('Success',conDocId,''));
            
            return conDocId;
        }
        catch(Exception e){
            //RestContext.response.addHeader('Content-Type','application/json');
            //RestContext.response.responseBody = Blob.valueOf(generateJSON('Error','',e.getMessage()));
            
            return e.getMessage();
        }
    }
}

```




