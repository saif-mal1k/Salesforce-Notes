
### class to create record of error
```apex
public class TransactionLogHandler {
    
    public static void doHandleException(System.Exception ex , String processName){
        //TransactionLogHandler.doHandleException();
        Error_Log__c  transactionLog = new Error_Log__c (
            Log_Details__c  = ex.getStackTraceString() +'<br/> <strong> Mesage is </strong> ' + ex.getMessage() 
            + '<br/> ' + ex.getCause() +' <br/> '+ ex.getTypeName()+' <br/> '+ex.getLineNumber(),
            Log_Date_Time__c  = System.Now(),
            Process_Name__c    = processName
        );
        
        insert transactionLog;
    }
    
    public static void doHandleException(System.Exception ex , String processName, String errorMessage){
        
        String htmlBody = '';
        if(ex != null){
            htmlBody = ex.getStackTraceString() +'<br/> <strong> Mesage is </strong> ' + ex.getMessage() 
            + '<br/> ' + ex.getCause() +' <br/> '+ ex.getTypeName()+' <br/> '+ex.getLineNumber();
        }
        if(!String.isBlank(errorMessage)){
            htmlBody += errorMessage;
        }
        Error_Log__c  transactionLog = new Error_Log__c (
            Log_Details__c  = htmlBody,
            Log_Date_Time__c  = System.Now(),
            Process_Name__c    = processName
        );
        
        insert transactionLog;
    }
    
    public static void doHandleExceptionWithError(String errors , String processName){
        
        Error_Log__c  transactionLog = new Error_Log__c (
            Log_Details__c  = errors,
            Log_Date_Time__c  = System.Now(),
            Process_Name__c    = processName
        );
        
        insert transactionLog;
    }
}

```


<br/>


<br/>


### class using try catch to register error on custom object as a record
```apex
public class EventAttendeeTriggerHandler {
    
    public static void sendConfirmationEmail(List<Event_Attendee__c> newRecordList ) {
        
        Set<Id> attendeesIdsSet = new Set<Id>();
        Set<Id> eventIdsSet = new Set<Id>();
        
        for(Event_Attendee__c ea : newRecordList){
            attendeesIdsSet.add(ea.Attendees__c);
            eventIdsSet.add(ea.Event__c);
        }
        
        Map<Id,Attendees__c> attendeeMap = new Map<Id,Attendees__c>( 
            [Select Id, Name, Email__c From Attendees__c WHERE  Id IN : attendeesIdsSet]
        );
        
        Map<Id, Event__c > eventMap = new Map<Id, Event__c > ( [Select Id, Name__c, Start_Date_Time__c, Organizer__c , Organizer__r.Name,
                                                                Location__c , Location__r.Name, Location__r.City__c,
                                                                Location__r.State__c, Location__r.Country__c,
                                                                Location__r.Postal_Code__c, Location__r.Street__c
                                                                FROM Event__c  WHERE ID IN: eventIdsSet]
                                                             );
        
        List<Messaging.SingleEmailMessage> emailList = new List<Messaging.SingleEmailMessage>();
        
        for(Event_Attendee__c ea : newRecordList){
            
            Attendees__c att = attendeeMap.get(ea.Attendees__c);
            Event__c evt = eventMap.get(ea.Event__c);
              
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();

            mail.setSubject('Pass for the '+evt.Name__c);
            List<String> toAddress = new List<String>();
            toAddress.add(att.Email__c);
            mail.setToAddresses( toAddress );
            mail.setSenderDisplayName(evt.Organizer__r.Name);
            
            String locaton = 'https://www.google.com/maps/place/'+evt.Location__r.Street__c+' '+evt.Location__r.City__c+' '
                +evt.Location__r.State__c+' '+
                evt.Location__r.Country__c+' '+evt.Location__r.Postal_Code__c;
            String hrefForLocation = '<a href="'+locaton+'"'+'target="_blank">Here</a>';
            String emailBody = 'Dear '+ att.Name + ',<br/><br/>'+
                'Thank you for registering for '+evt.Name__c+' which will be Organized on '+
                evt.Start_Date_Time__c+' & will be held at '+evt.Location__r.Name
                +'.<br/>We are excited to have you,'+ 
                'see you in the event. <br/>'+
                'Find the Google Map Location for the Event '+hrefForLocation+'.<br/><br/><br/>'+
                'Thanks,<br/>'+evt.Organizer__r.Name;
            
            mail.setHtmlBody(emailBody);
            emailList.add(mail);
            
        }
        
        try{
            
            List<Messaging.SendEmailResult> results =  Messaging.sendEmail(emailList, false); 
            for(Messaging.SendEmailResult email : results){
                System.debug(email.isSuccess());
                if(!email.isSuccess()){
                    List<Messaging.SendEmailError> errors = email.getErrors();
                    TransactionLogHandler.doHandleExceptionWithError(JSON.serialize(errors), 'EventAttendeeTriggerHandler');
                }
            }  
        }catch(System.Exception ex){
            TransactionLogHandler.doHandleException(ex, 'EventAttendeeTriggerHandler');
        }
    }
}
```



