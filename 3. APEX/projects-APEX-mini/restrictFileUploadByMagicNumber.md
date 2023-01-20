
### restricting the upload of a file by finding the magic number on each content version i.e being uploaded

```apex

trigger contentVersionTrigger on ContentVersion (after insert) {
    
    if(trigger.isBefore){
        if(trigger.isInsert){
            system.debug('Before Insert Trigger Started');
            
            for (ContentVersion attachment: trigger.new){
                system.debug(trigger.new);                
                system.debug('\n attachment:'+attachment);
                
                Blob blb = attachment.VersionData;
                
                String magicString = EncodingUtil.convertToHex(blb); 
                system.debug('\n magicString: '+magicString);
                
                String magicNumbers = magicString.substring(0,8);
                system.debug('\n magicNumbers in hex: '+magicNumbers);
                
                if(magicNumbers == '89504e47'){
                    attachment.adderror('this file can\'t be uploaded');
                    
                }
                
            }
            
        }
    }
    
    
    if(trigger.isAfter){
        if(trigger.isInsert){
            system.debug('After Insert Trigger Started');
            
            for (ContentVersion attachment: trigger.new){
                system.debug(trigger.new);                
                system.debug('\n attachment:'+attachment);
                
                Blob blb = attachment.VersionData;
                
                String magicString = EncodingUtil.convertToHex(blb); 
                system.debug('\n magicString: '+magicString);
                
                String magicNumbers = magicString.substring(0,8);
                system.debug('\n magicNumbers in hex: '+magicNumbers);
                
                if(magicNumbers == '89504e47'){
                    attachment.adderror('this file can\'t be uploaded');
                    
                }
                
            }
            
        }
    }
    
    
    
}

```


