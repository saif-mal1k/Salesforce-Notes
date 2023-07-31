
***initial setup:***
- add these sites to (remote site settings & CSP trusted sites):
  - https://www.googleapis.com
  - https://youtube.googleapis.com
 
- get api key
	- goto https://console.cloud.google.com/apis/credentials
	- login using Gmail account
	- goto https://console.cloud.google.com/apis/credentials
	- click create credentials
	- select API keys
	- copy the api key i.e just created
	- paste in the code


<br/>

### Use javascript fetch API to make an API call & show the response on UI
![image](https://user-images.githubusercontent.com/63545175/217740071-5b1eacf0-9954-479f-a722-61ad09e86aca.png)


```html
<template>
	<div class="slds-p-around_small">
		<div class="slds-grid slds-wrap searchBar" >
			<lightning-input placeholder="Search text ...." value={searchItem} onchange={handleSearchChange}
				style="width:89%;"></lightning-input>
			<lightning-button variant="brand" label=" 🔍 " onclick={getlistOfVideos}
				style=" margin-left: 2px; margin-top: 19px;">
			</lightning-button>
		</div>

		<template if:true={ifVideoVisible}>
			<iframe class="video" src={currentVideoUrl} title="YouTube video player" frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen></iframe>
		</template>

		<template if:true={ifListVisible}>
			<template for:each={list} for:item="item">
				<a key={item.id.videoId} onclick={playSelected} data-value={item.id.videoId}>
						<img style="width:48%; margin:1%; object-fit: cover; " src={item.id.imageUrl} value={item.id.videoUrl}
						class="thumbnail">
				</a>
			</template>
		</template>
	</div>
</template>
```

```css
.thumbnail{
  aspect-ratio: 16 / 9;
}

.video{
    aspect-ratio: 16 / 9;
    width: 100%;
}

*{
  border-radius: 10px;
}
```

```js

import { LightningElement, track } from 'lwc';

export default class Youtube extends LightningElement {
    @track searchItem = "";
    @track ifVideoVisible = false;
    @track ifListVisible = true;
    @track currentVideoUrl = "";
    @track currentVideoId = "";

    handleSearchChange(event) {
        console.log("search txt");
        console.log(event.target.value);
        this.searchItem = event.target.value;
    }

    playSelected(event) {
        console.log("getting video url");
        console.log(event.currentTarget.dataset.value);
        this.currentVideoId = event.currentTarget.dataset.value;
        this.currentVideoUrl = "https://www.youtube-nocookie.com/embed/" + event.currentTarget.dataset.value + "?autoplay=1&autopause=0";
   
        this.ifVideoVisible = true;
    }

    @track list = [];

    getlistOfVideos() {
        this.list = [];
        console.log("fetching list ....");

        var searchTerm;

        if(this.searchItem == "") { searchTerm = "SFDC" }
        else{searchTerm = this.searchItem}
        
        const requestUrl = "https://youtube.googleapis.com/youtube/v3/search?maxResults=8&q=" + searchTerm + "&safeSearch=strict&type=video&key=XXXXXXXXXXXXXXXXXXXX"

        fetch(requestUrl)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.list = response.items;

                console.log("#### before ");
                console.log(this.list);
                
                this.list.forEach(item => {
                    //TODO : currentItem
                    item.id.imageUrl = "https://i.ytimg.com/vi/" + item.id.videoId + "/hqdefault.jpg";
                    item.id.videoUrl = "https://www.youtube-nocookie.com/embed/" + item.id.videoId + "?autoplay=1&autopause=0";

                });

                console.log("####after");
                console.log(this.list);
            })
            .catch(err => console.error(err));

        this.ifListVisible = true;
    }

    connectedCallback() {
        this.getlistOfVideos();
    }
}

```






<br/>

---

<br/>

### Use Apex Controller to make an API call pass the response to LWC component which will render it on UI

```apex

public class youtubeCallout {
    final Static String apiKey='XXXXXXXXXXXXXXXXXXXXXX';
    
    @AuraEnabled
    public static String getVideos(String searchTerm){
        String baseURL = 'https://youtube.googleapis.com/youtube/v3/search?maxResults=8&q='+searchTerm.replaceAll(' ', '%20')+'&safeSearch=strict&type=video&key='+apiKey;
        Http http = new Http();
        System.debug('BaseUrl'+ baseurl);
        HttpRequest request = new HttpRequest();
        request.setEndpoint(baseURL);
        request.setMethod('GET');
        try{
            HttpResponse httpRes = http.send(request);
            if( httpRes.getStatusCode() == 200 && httpRes.getStatus() =='OK'){
                system.debug('response body'+httpRes.getBody());
                return httpRes.getBody();
            }
            else{
                System.debug('Status Code '+httpRes.getStatusCode());
                return null;
            }                             
        }catch(Exception ex){
            System.debug('Exception error '+ex.getMessage());
            return ex.getMessage();
        }
    }
}

```


```js

import { LightningElement, track } from 'lwc';
import getYtData from '@salesforce/apex/youtubeCallout.getVideos'; // <----------

export default class Youtube extends LightningElement {
    @track searchItem = "";
    @track ifVideoVisible = false;
    @track ifListVisible = true;
    @track currentVideoUrl = "";
    @track currentVideoId = "";

    handleSearchChange(event) {
        console.log("search txt");
        console.log(event.target.value);
        this.searchItem = event.target.value;
    }

    playSelected(event) {
        console.log("getting video url");
        console.log(event.currentTarget.dataset.value);
        this.currentVideoId = event.currentTarget.dataset.value;
        this.currentVideoUrl = "https://www.youtube-nocookie.com/embed/" + event.currentTarget.dataset.value + "?autoplay=1&autopause=0";
   
        this.ifVideoVisible = true;
    }

    @track list = [];

    getlistOfVideos() {
        this.list = [];
        console.log("fetching list ....");

        var searchTerm;

        if(this.searchItem == "") { searchTerm = "SFDC" }
        else{searchTerm = this.searchItem}
        
        getYtData({'searchTerm': searchTerm})           // <----------.
            .then(response => {
                console.log("the response is:");
                console.log(response);
                this.list = JSON.parse(response).items; // <----------'

                console.log("#### before ");
                console.log(this.list);

                this.list.forEach(item => {
                    //TODO : currentItem
                    item.id.imageUrl = "https://i.ytimg.com/vi/" + item.id.videoId + "/hqdefault.jpg";
                    item.id.videoUrl = "https://www.youtube-nocookie.com/embed/" + item.id.videoId + "?autoplay=1&autopause=0";

                });

                console.log("####after");
                console.log(this.list);
            })
            .catch(err => console.error(err));

        this.ifListVisible = true;
    }

    connectedCallback() {
        this.getlistOfVideos();
    }
}

```





