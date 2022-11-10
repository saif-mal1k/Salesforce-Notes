<details>
<summary> <b>Question:</b> Is Lightning Components built on the MVC pattern? </summary> 
<p>

No. Lightning Components is View-Controller-Controller-Model, or perhaps View-Controller-Controller-Database.

Because components will have a client-side controller in addition to the server-side controller.
</p>
</details>


<br/>

## Remember: 
different resources in a component bundle are **“auto-wired”** to each other. the **wiring takes the form of the ``v`` and ``c`` value providers**. They’re automatically created and made available within components, so the controller can reference the component and vice versa.

<table>
<tr>
<td align="center" width="40%">

.cmp
</td>
<td align="center" width="40%">

.js
</td>
</tr>
<tr>
<td colspan="2">

![image](https://user-images.githubusercontent.com/63545175/201015209-69d1960c-3c5e-4368-8713-6a112d91026f.png)

</td>
</tr>
</table>




### example
<table>
<tr>
<td>
  
![image](https://user-images.githubusercontent.com/63545175/169796799-e847baf4-7668-46f9-ab92-bb20d37c0ecf.png)

</td>  
</tr>
</table>


<br/>


<br/>


<br/>


<br/>


<br/>


<br/>


---

***reference:***
1. [Aura Components Basics | Handle Actions with Controllers](https://trailhead.salesforce.com/content/learn/modules/lex_dev_lc_basics/lex_dev_lc_basics_controllers)
2. [Handling Events with Client-Side Controllers](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm?_ga=2.49763119.865651692.1667559514-1022251765.1662354198) ????
