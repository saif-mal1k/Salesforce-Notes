### Trigger
```apex
trigger PropertiesTrigger on Properties__c (after insert,after update ) {
    if(trigger.isInsert || trigger.isUpdate){
        if(trigger.isAfter ){
            PropertiesTriggerHandler.SentEmail(trigger.new);
        }
    }
}
```



<br/>



### Trigger Handler

```apex
public class PropertiesTriggerHandler {
    
 //send email on creation of a new building
    public static void SentEmail(List<Properties__c> buiList) {
        List<messaging.email> emailList = new List<messaging.email>();
        List<account> accList=new List<account>();  
        for (Properties__c bui : buiList) {

            accList.addAll([SElECT id,(SElECT id,name,email from contacts) from account where id=:bui.Current_Owner__c]);
        }

        for(Account acc: accList){
            for(contact con:acc.contacts){
               // emailAdd.add(con.email);

                // check null condition
                if(con.Email!= null){
                    Messaging.SingleEmailMessage emailMsg = new Messaging.SingleEmailMessage();
                    //get all email address
                    String[] toAddress = new String[]{con.Email};
                        system.debug('email'+toAddress);
                        emailMsg.setToAddresses(toAddress);
                    String emailSub = 'Welcome to BruntWood ' + con.Name;
                    emailMsg.setSubject(emailSub);
                    String disName = 'Bruntwood';
                    emailMsg.setSenderDisplayName(disName);
                    // insert body of email.
                    String content = 'Welcome Mr.' + con.Name + '<br/><br/>' +
                        'We are Happy to serve you!!<br/><br/>' +
                        'Feel free to contact for further details.<br/><br/>'+
                        '<br/><br/><br/> it is an automated mail. DO NOT REPLY! <br/>';

                    emailMsg.setHtmlBody(content);
                    emailList.add(emailMsg);
                }
            }
            if(emailList!=null){
            Messaging.sendEmail(emailList);
            }
        }

    }    

}

```

