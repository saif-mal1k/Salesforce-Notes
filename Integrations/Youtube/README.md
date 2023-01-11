
## Youtube player in SFDC Utility bar
![image](https://user-images.githubusercontent.com/63545175/211721824-94279ddd-7a69-4535-bf07-eafeecfeb238.png)



### HTML
```html
<template>
  <div class="slds-p-around_small">
    <div class="slds-grid slds-wrap searchBar">
      <lightning-input
        placeholder="Search text ...."
        value="{searchItem}"
        onchange="{handleSearchChange}"
        style="width: 80%"
      ></lightning-input>

      <lightning-button
        variant="brand"
        label=" 🔍 "
        onclick="{getlistOfVideos}"
        style="float: right; margin-left: 1px; margin-top: 19px; width: 19%"
      >
      </lightning-button>
    </div>
  </div>

  <template if:true="{ifVideoVisible}">
    <iframe
      class="video"
      src="{currentVideoUrl}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </template>

  <template if:true="{spaceHolder}">
    <div style="width: 100%; height: 50%"></div>
  </template>

  <div class="slds-p-around_small" style="overflow: hidden">
    <template if:true="{ifListVisible}">
      <template for:each="{list}" for:item="item">
        <div key="{item.id.videoId}">
          <article
            class="slds-card"
            style="
              margin: 0px 0px 0px 0px;
              border: 0px;
              padding: 0px 0px 0px 0px;
            "
          >
            <div class="slds-card__header slds-grid" style="overflow: hidden">
              <header
                class="slds-media slds-media_center slds-has-flexi-truncate"
              >
                <div class="slds-col slds-size_6-of-12">
                  <a
                    key="{item.id.videoId}"
                    onclick="{playSelected}"
                    data-value="{item.id.videoUrl}"
                  >
                    <img
                      src="{item.id.imageUrl}"
                      value="{item.id.videoUrl}"
                      class="thumbnail"
                    />
                  </a>
                </div>

                <div
                  class="slds-col slds-size_6-of-12"
                  style="margin-left: 10px"
                >
                  <h2 class="slds-card__header-title">
                    <a
                      key="{item.id.videoId}"
                      data-value="{item.id.videoUrl}"
                      onclick="{playSelected}"
                      class="slds-card__header-link"
                    >
                      <span>{item.id.title}</span>
                    </a>
                  </h2>
                  <!-- <div>{item.Description}</div>-->
                  <span style="font-weight: bold"
                    >By: {item.id.channelTitle}</span
                  >
                </div>
              </header>
            </div>
          </article>
        </div>
      </template>
    </template>
  </div>
</template>

```



### JS
```js
import { LightningElement, track } from "lwc";
export default class Youtube extends LightningElement {
  @track searchItem = "";
  @track ifVideoVisible = false;
  @track spaceHolder = false;
  @track ifListVisible = true;
  @track currentVideoUrl = "";

  handleSearchChange(event) {
    console.log("search txt");
    console.log(event.target.value);

    this.searchItem = event.target.value;
  }

  playSelected(event) {
    console.log("getting video url");

    this.spaceHolder = true;
    // maintain space for video player

    this.ifVideoVisible = true;
    //this.ifListVisible = false;

    console.log("url");
    console.log(event.currentTarget.dataset.value);
    //console.log(event.currentTarget.dataset.value);
    //console.log(event);
    this.currentVideoUrl = event.currentTarget.dataset.value;
  }

  @track list = [];

  getlistOfVideos() {
    this.list = [];

    //console.log("fetching list ....");

    const requestUrl =
      "https://youtube.googleapis.com/youtube/v3/search?maxResults=6&q=" +
      this.searchItem +
      "&safeSearch=strict&type=video&key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

    fetch(requestUrl)
      .then((response) => response.json())
      .then((response) => {
        //console.log(response);
        this.list = response.items;

        //console.log("#### before ");
        //console.log(this.list);

        this.list.forEach((item) => {
          //TODO : currentItem
          item.id.imageUrl =
            "https://i.ytimg.com/vi_webp/" +
            item.id.videoId +
            "/maxresdefault.webp";
          item.id.videoUrl =
            "https://www.youtube-nocookie.com/embed/" +
            item.id.videoId +
            "?autoplay=1&autopause=0";

          const detailsUrl =
            "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
            item.id.videoId +
            "&fields=items(id%2Csnippet)&key=" +
            "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

          fetch(detailsUrl)
            .then((response) => response.json())
            .then((response) => {
              //console.log("details of video:");
              //console.log(item.id.videoId);
              //console.log(response);
              //this.list = response.items;

              item.id.title = response.items[0].snippet.title;
              //console.log("title:");
              //console.log(item.id.title);

              item.id.channelTitle = response.items[0].snippet.channelTitle;
              //console.log("channel name:");
              //console.log(item.id.channelTitle);
            });
        });

        //console.log("####after");
        //console.log(this.list);
      })
      .catch((err) => console.error(err));

    //this.ifVideoVisible = false;
    this.ifListVisible = true;
  }

  // for initial list that appears on component loading
  // this is same as get list of videos method, currently
  // i didn't find any solution for calling get list of videos method directly

  connectedCallback() {
    this.list = [];

    //console.log("fetching list ....");

    const requestUrl =
      "https://youtube.googleapis.com/youtube/v3/search?maxResults=6&q=SFDC&safeSearch=strict&type=video&key=XXXXXXXXXXXXXXXXXXXXXXXXXXXX";

    fetch(requestUrl)
      .then((response) => response.json())
      .then((response) => {
        //console.log(response);
        this.list = response.items;

        //console.log("#### before ");
        //console.log(this.list);

        this.list.forEach((item) => {
          //TODO : currentItem
          item.id.imageUrl =
            "https://i.ytimg.com/vi_webp/" +
            item.id.videoId +
            "/maxresdefault.webp";
          item.id.videoUrl =
            "https://www.youtube-nocookie.com/embed/" +
            item.id.videoId +
            "?autoplay=1&autopause=0";

          const detailsUrl =
            "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
            item.id.videoId +
            "&fields=items(id%2Csnippet)&key=" +
            "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

          fetch(detailsUrl)
            .then((response) => response.json())
            .then((response) => {
              //console.log("details of video:");
              //console.log(item.id.videoId);
              //console.log(response);
              //this.list = response.items;

              item.id.title = response.items[0].snippet.title;
              //console.log("title:");
              //console.log(item.id.title);

              item.id.channelTitle = response.items[0].snippet.channelTitle;
              //console.log("channel name:");
              //console.log(item.id.channelTitle);
            });
        });

        //console.log("####after");
        //console.log(this.list);
      })
      .catch((err) => console.error(err));

    //this.ifVideoVisible = false;
    this.ifListVisible = true;
  }
}
```

### CSS
```css
.thumbnail{
  aspect-ratio: 16 / 9;
  width: 100%;  
}

.video{
    aspect-ratio: 16 / 9;
    width: 94%;
    position: fixed;
    top: 45px;
    z-index: 1;
    left: 8px;
}

.searchBar{
    position: fixed;
    top: 36px;
    width: 102%;
    z-index: 2;

}
```

---


## Youtube player with button to share link as a chatter post
![image](https://user-images.githubusercontent.com/63545175/211796648-3459a0f9-96a2-488b-9d24-380f5c190c66.png)
![image](https://user-images.githubusercontent.com/63545175/211796751-91b33a8e-154c-4708-ae2b-91c07cb1a0a4.png)
![image](https://user-images.githubusercontent.com/63545175/211800516-89ee8b2e-d913-4b91-a583-918afd3eb0f8.png)


### HTML
```html
<template>
  <div class="slds-p-around_small">
    <div class="slds-grid slds-wrap searchBar">
      <lightning-input
        placeholder="Search text ...."
        value="{searchItem}"
        onchange="{handleSearchChange}"
        style="width: 80%"
      ></lightning-input>

      <lightning-button
        variant="brand"
        label=" 🔍 "
        onclick="{getlistOfVideos}"
        style="float: right; margin-left: 1px; margin-top: 19px; width: 19%"
      >
      </lightning-button>
    </div>
  </div>

  <template if:true="{ifVideoVisible}">
    <iframe
      class="video"
      src="{currentVideoUrl}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>

    <div
      style="position: fixed; top: 200px; left: 250px; width: 225px; z-index: 1"
    >
      <lightning-button
        variant="brand"
        label=" 🔗 "
        onclick="{handleSharingOptionBtnClick}"
        style="position: absolute; left: 169px; top: -13px"
      >
      </lightning-button>
      <template if:true="{ifSharingOptionVisible}">
        <lightning-input
          value="{chatterTxt}"
          style="display: inline"
          placeholder="Type your chatter message here"
          name="chatter-txt"
          onchange="{handleFormInput}"
        >
        </lightning-input>

        <lightning-button
          style="position: absolute; left: 159px"
          label="Share"
          onclick="{shareOnChatter}"
        >
        </lightning-button>
      </template>
    </div>
  </template>

  <template if:true="{spaceHolder}">
    <div
      c-youtube_youtube=""
      style="width: 100%; height: 50%; padding: 100px; text-align: center"
    >
      <b>Loading....</b>
    </div>
  </template>

  <div class="slds-p-around_small" style="overflow: hidden">
    <template if:true="{ifListVisible}">
      <template for:each="{list}" for:item="item">
        <div key="{item.id.videoId}">
          <article
            class="slds-card"
            style="
              margin: 0px 0px 0px 0px;
              border: 0px;
              padding: 0px 0px 0px 0px;
            "
          >
            <div class="slds-card__header slds-grid" style="overflow: hidden">
              <header
                class="slds-media slds-media_center slds-has-flexi-truncate"
              >
                <div class="slds-col slds-size_6-of-12">
                  <a
                    key="{item.id.videoId}"
                    onclick="{playSelected}"
                    data-value="{item.id.videoId}"
                  >
                    <img
                      src="{item.id.imageUrl}"
                      value="{item.id.videoUrl}"
                      class="thumbnail"
                    />
                  </a>
                </div>

                <div
                  class="slds-col slds-size_6-of-12"
                  style="margin-left: 10px"
                >
                  <h2 class="slds-card__header-title">
                    <a
                      key="{item.id.videoId}"
                      data-value="{item.id.videoId}"
                      onclick="{playSelected}"
                      class="slds-card__header-link"
                    >
                      <span>{item.id.title}</span>
                    </a>
                  </h2>
                  <!-- <div>{item.Description}</div>-->
                  <span style="font-weight: bold"
                    >By: {item.id.channelTitle}</span
                  >
                </div>
              </header>
            </div>
          </article>
        </div>
      </template>
    </template>
  </div>
</template>

```


### JS
```js
import { LightningElement, track } from "lwc";
import shareOnChatter from "@salesforce/apex/YouTubeController.shareOnChatter";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class Youtube extends LightningElement {
  @track searchItem = "";
  @track ifVideoVisible = false;
  @track spaceHolder = false;
  @track ifListVisible = true;
  @track currentVideoUrl = "";
  @track currentVideoId = "";
  @track ifSharingOptionVisible = false;

  handleSearchChange(event) {
    console.log("search txt");
    console.log(event.target.value);
    this.searchItem = event.target.value;
  }

  playSelected(event) {
    console.log("getting video url");

    this.spaceHolder = true;
    // maintain space for video player

    this.ifVideoVisible = true;
    //this.ifListVisible = false;

    console.log("url");
    console.log(event.currentTarget.dataset.value);
    //console.log(event.currentTarget.dataset.value);
    //console.log(event);
    this.currentVideoId = event.currentTarget.dataset.value;

    this.currentVideoUrl =
      "https://www.youtube-nocookie.com/embed/" +
      event.currentTarget.dataset.value +
      "?autoplay=1&autopause=0";
  }

  @track list = [];

  getlistOfVideos() {
    this.list = [];

    //console.log("fetching list ....");

    const requestUrl =
      "https://youtube.googleapis.com/youtube/v3/search?maxResults=6&q=" +
      this.searchItem +
      "&safeSearch=strict&type=video&key=XXXXXXXXXXXXXXXXXXXXXXXXXX";

    fetch(requestUrl)
      .then((response) => response.json())
      .then((response) => {
        //console.log(response);
        this.list = response.items;

        //console.log("#### before ");
        //console.log(this.list);

        this.list.forEach((item) => {
          //TODO : currentItem
          item.id.imageUrl =
            "https://i.ytimg.com/vi_webp/" +
            item.id.videoId +
            "/maxresdefault.webp";
          item.id.videoUrl =
            "https://www.youtube-nocookie.com/embed/" +
            item.id.videoId +
            "?autoplay=1&autopause=0";

          const detailsUrl =
            "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
            item.id.videoId +
            "&fields=items(id%2Csnippet)&key=" +
            "XXXXXXXXXXXXXXXXXXXXXXXXXX";

          fetch(detailsUrl)
            .then((response) => response.json())
            .then((response) => {
              //console.log("details of video:");
              //console.log(item.id.videoId);
              //console.log(response);
              //this.list = response.items;

              item.id.title = response.items[0].snippet.title;
              //console.log("title:");
              //console.log(item.id.title);

              item.id.channelTitle = response.items[0].snippet.channelTitle;
              //console.log("channel name:");
              //console.log(item.id.channelTitle);
            });
        });

        //console.log("####after");
        //console.log(this.list);
      })
      .catch((err) => console.error(err));

    //this.ifVideoVisible = false;
    this.ifListVisible = true;
  }

  // sharing button
  handleSharingOptionBtnClick() {
    if (!this.ifSharingOptionVisible) {
      this.ifSharingOptionVisible = true;
    } else {
      this.ifSharingOptionVisible = false;
    }
  }

  // for alert | toast msg
  showMessage({ title, message, messageType, mode }) {
    this.dispatchEvent(
      new ShowToastEvent({
        mode,
        title,
        message,
        variant: messageType,
      })
    );
  }

  // for posting message on chatter

  handleFormInput(event) {
    if (event.target.name === "chatter-txt") {
      this.chatterTxt = event.target.value;
    }
  }

  shareOnChatter() {
    if (!this.chatterTxt) {
      this.showMessage({
        message: "Message is required to post on chatter.",
        messageType: "error",
        mode: "pester",
      });
      return;
    }

    //Getting the timezone from current user's site
    shareOnChatter({
      chatterText: this.chatterTxt,
      youTubeUrl: "https://www.youtube.com/watch?v=" + this.currentVideoId,
    })
      .then(() => {
        this.showMessage({
          message: "Link succefully added to chatter...",
          messageType: "success",
          mode: "pester",
        });
        this.chatterTxt = "";
      })
      .catch((error) => {
        let message = error.message || error.body.message;
        this.showMessage({
          message: message,
          messageType: "error",
          mode: "pester",
        });
      });

    this.ifSharingOptionVisible = false;
  }

  // for initial list that appears on component loading
  // this is same as get list of videos method, currently
  // i didn't find any solution for calling get list of videos method directly

  connectedCallback() {
    this.list = [];

    //console.log("fetching list ....");

    const requestUrl =
      "https://youtube.googleapis.com/youtube/v3/search?maxResults=6&q=SFDC&safeSearch=strict&type=video&key=XXXXXXXXXXXXXXXXXXXXXXXX";

    fetch(requestUrl)
      .then((response) => response.json())
      .then((response) => {
        //console.log(response);
        this.list = response.items;

        //console.log("#### before ");
        //console.log(this.list);

        this.list.forEach((item) => {
          //TODO : currentItem
          item.id.imageUrl =
            "https://i.ytimg.com/vi_webp/" +
            item.id.videoId +
            "/maxresdefault.webp";
          item.id.videoUrl =
            "https://www.youtube-nocookie.com/embed/" +
            item.id.videoId +
            "?autoplay=1&autopause=0";

          const detailsUrl =
            "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
            item.id.videoId +
            "&fields=items(id%2Csnippet)&key=" +
            "XXXXXXXXXXXXXXXXXXXXX";

          fetch(detailsUrl)
            .then((response) => response.json())
            .then((response) => {
              //console.log("details of video:");
              //console.log(item.id.videoId);
              //console.log(response);
              //this.list = response.items;

              item.id.title = response.items[0].snippet.title;
              //console.log("title:");
              //console.log(item.id.title);

              item.id.channelTitle = response.items[0].snippet.channelTitle;
              //console.log("channel name:");
              //console.log(item.id.channelTitle);
            });
        });

        //console.log("####after");
        //console.log(this.list);
      })
      .catch((err) => console.error(err));

    //this.ifVideoVisible = false;
    this.ifListVisible = true;
  }
}

```



