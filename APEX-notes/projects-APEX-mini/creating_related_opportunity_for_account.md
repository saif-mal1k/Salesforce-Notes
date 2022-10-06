
```apex
   
public class MyFirstDemo {
    public static void createOppForAcc(){ 
        List<Account> accList [SELECT Id, Name FROM Account WHERE CreatedDate = THIS_WEEK]; 
        List<Opportunity> oppToBeCreated = new List<Opportunity>();
        if(!accList.isEmpty()) {
            for (Account acc accList) {
                Opportunity opp = new Opportunity();
                opp.Name = acc.Name;
                opp.closeDate = System.today();
                opp. StageName 'Prospecting'; 
                opp.AccountId = acc.Id;
                oppToBeCreated.add(opp);
            }
        }
        if (!oppToBeCreated.isEmpty()) { 
            insert oppToBeCreated; 
        }
    }
}    


```

