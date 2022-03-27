## index
- <a href="#comments">Comments</a>
- <a href="#data-types">Data types</a>
- <a href="#collections">Collections</a>
  - <a href="#collections">List</a>
  - <a href="#collections">Set</a>
  - <a href="#collections">Map</a>
- <a href="#comparison-operator">Comparison Operator</a>
- <a href="#conditional-statements">Conditional Statements</a>
  - <a href="#if-else-statement">If else Statements</a>
  - <a href="#switch-statements">Switch Statements</a>
- <a href="#logical-operators">Logical Operators</a>
- <a href="#looping">Looping</a>
  - <a href="#while-loop">While Loop</a>
  - <a href="#do-while-loop">Do While Loop</a>
  - <a href="#for-loop">for loop</a>


<!--
- <a href="#"></a> 
-->


<br/>

### Comments
```apex
  // this is single line comment
```

```apex
  /* this is 
    multi- line comment */
```

<br/>

### Data Types
<table>
 <tr>
<td width="155px">

<b>Data Type</b>
</td>
<td>

<b>Description</b>
</td>
<td width="310px">

<b>Example</b>
</td>
</tr>
 <tr>
<td>

**Integer**
</td>
<td>

_A positive or negative number that doesn’t have a decimal point._
</td>
<td>

``Integer num = 12;``
</td>
    </tr>
    <tr>
<td>
  
**Decimal**
</td>
<td>
  
_A positive or negative number that has a decimal point._
</td>
<td>
  
``Decimal num = 12.22222;``
</td>
    </tr>
    <tr>
<td>
  
**String**
</td>
<td>
  
_A series of characters surrounded by single quotes. This can include any text as short as one letter to sentences._
</td>
<td>
  
``String whatAmI = 'A String';``
</td>
    </tr>
    <tr>
<td>
  
**Boolean**
</td>
<td>
  
_Typically either true or false. In Apex, null (empty) is also a valid value. Boolean is commonly used with checkboxes._
</td>
<td>
  
``Boolean doSomething = False;``
</td>
    </tr>
    <tr>
<td>
  
**ID (Salesforce ID)**
</td>
<td>
  
_Any valid 18-character Salesforce record ID._
</td>
<td>
  
``Id contactId = '00300000003T2PGAA0';``
</td>
    </tr>
</table>


<br/>


### Collections
<table>
 <tr>
<td width="100px">

<b>Collections</b>
</td>
<td width="300px">

<b>Description</b>
</td>
<td>

<b>Example</b>
</td>
</tr>
<tr>
<td>

<b> List </b>
</td>
<td>

- Ordered collection
- allow duplicate values
</td>
<td>

<a href="#"><img src="../images/List.png" width="90%"></a>
  
<a href="#"><img src="../images/List2.png" width="90%"></a>
</td>
</tr>
</tr>
<tr>
<td>

<b> Set </b>
</td>
<td>

- unordered collection
- Unique elements
</td>
<td>

```apex
  Set<String> My_String = new Set<String>();
```  
```apex
  Set<String> My_String = new Set<String>{'a', 'b', 'c'};  
```  
</td>
</tr>
</tr>
<tr>
<td>

<b> Map </b>
</td>
<td>

- Collection of Key, Value Pairs
</td>
<td>

```apex
  Map<key_datatype, value_datatype> map_name = new map<key_datatype, value_datatype>();
```
```apex
  Map<Integer, String> My_Map = new Map<Integer, String>{1 => 'a', 2 => 'b', 3 => 'c'};
```
</td>
</tr>
</table>


<br/>


### Comparison Operator

| Operator |	Description |	Syntax |	Result |
|----------|--------------|--------|---------|
| < |Less than |1 < 2 |TRUE|
| <= |Less than or equal to |1 <= 2 , 3 <= 3 |TRUE|
| == |Equal to |10 == 10 |TRUE|
| != , <> |Not equal to |10 != 0 , 10 <> 11 |TRUE|
| > | Greater than | 11 > 10 | TRUE|
| >= | Greater than or equal to | 40 >=10 , 40 >= 40 | TRUE|



### Conditional Statements

#### if-else Statement
```apex
if(condition is true) {
    //do this
} else {
    //do this
}
```


#### if-else if Statement
```apex
String waterLevel = 'half';
  
if(waterLevel == 'empty') {
    System.debug('Fill the tea kettle');
    waterLevel = 'full';
} else if(waterLevel == 'half') {
    System.debug('Fill the tea kettle');
    waterLevel = 'full';
} else { /*This statement only runs if line 3 and line 6 result in false.*/
    System.debug('The tea kettle is full');
}
```


#### Switch Statements
```apex
switch on expression {
    when value1 { //single value
        //code block 1
    }
    when value2, value3 { //multiple values
        //code block 2
    }
}
```


<br/>


### Logical Operators
<table>
<tr>
<td>Operator</td>
<td>OR</td>
<td>AND</td>
</tr>
<tr>
<td>Operator symbol</td>
<td> || </td>
<td>&amp;&amp;</td>
</tr>
<tr>
<td>
 Pseudocode	
</td>
<td>
  
```apex
  If X or Y, do this.
  Otherwise, do that.	
```
</td>
<td>
  
```apex
  If X and Y, do this.
  Otherwise, do that.
```
</td>
</tr>
<tr>
<td>
APEX code
</td>
<td>
  
```apex
if(X || Y) {
//do this
} else {
//do this
}
```
</td>
<td>
  
```apex
if(X && Y) {
//do this
} else {
//do this
}
```
</td>
</tr>
</table>


<br/>


### Looping

#### while loop
```apex
While(condition) {
    //run this block of code
}
```

#### Do while loop
```apex
Do {
    //run this block of code
} while(condition);
```


#### For loop
```apex  
for (initialization; Boolean_exit_condition; increment) statement;
```
```apex  
for (variable : array_or_set) statement;
```
```apex  
for (variable : [inline_soql_query]) statement;
```

<br/>
  
***Note: 💡  All loops allow for loop control structures:-***
```apex
  break; exits the entire loop
  continue; skips to the next iteration of the loop
```





<br/>

<br/>

<br/>

<br/>

---

references: 
1. [built Apex coding skills](https://trailhead.salesforce.com/en/content/learn/trails/build-apex-coding-skills)


---
