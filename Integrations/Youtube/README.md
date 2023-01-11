
## Youtube player in SFDC Utility bar


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
      "&safeSearch=strict&type=video&key=";

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
            "https://www.youtube.com/embed/" +
            item.id.videoId +
            "?autoplay=1&autopause=0";

          const detailsUrl =
            "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
            item.id.videoId +
            "&fields=items(id%2Csnippet)&key=" +
            "AIz";

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

