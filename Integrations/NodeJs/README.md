### ``.env`` file for storing credentials
```
SF_LOGIN_URL = https://login.salesforce.com
SF_USERNAME = XXXXXXXX@XXXXXXXX.XXXX
SF_PASSWORD = XXXXXXXXXXXXXXX
SF_SECURITY_TOKEN = XXXXXXXXXXXXXXXXX
```



### ``new.js`` file for uploading file to salesforce org
```js
// upload file and link it to record using firstpublishlocationid

// required
const jsforce = require("jsforce");
require("dotenv").config();
const fs = require("fs");

// required for multi-part file upload
var FormData = require("form-data");
const mime = require("mime-types");
const axios = require("axios");

// required credentials and parameters
const { SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD, SF_SECURITY_TOKEN } =
  process.env;

// about file & record to link file to
FILE_PATH = "/Users/Dell/Desktop/HorseRide.mp4"; // file to be uploaded
const LinkedEntityIdd = "0035h00000lvEvlAAE"; // record Id of record. to which we want to link file

// main method that log into SFDC, uploads file and links it to a record
const main = async (
  SF_LOGIN_URL,
  SF_USERNAME,
  SF_PASSWORD,
  SF_SECURITY_TOKEN,
  FILE_PATH,
  LinkedEntityIdd
) => {
  const conn = new jsforce.Connection({
    loginUrl: SF_LOGIN_URL,
  });

  // log into salesforce
  console.log("logging in to salesforce ....");

  await conn.login(SF_USERNAME, SF_PASSWORD + SF_SECURITY_TOKEN, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("logged in!");
      console.log(res);

      // read file size scope start
      console.log("reading file size ....");

      fs.stat(FILE_PATH, (err, stats) => {
        if (err) {
          console.error(err);
        } else {
          // read file size scope start

          fileSizeInBytes = stats.size;
          console.log(`File size: ${fileSizeInBytes} bytes`);

          if (fileSizeInBytes > 36000000) {
            // create multi-part form data to send file

            console.log("file size greater than 36 MB");

            const createFormData = (file) => {
              // File
              //console.log("File received:", file);

              // linking it with a record
              console.log("creating the multi-part form data ....");

              const contentVersion = {
                FirstPublishLocationId: LinkedEntityIdd, //Id to which the content version needs to be linked
                Title: FILE_PATH.replace(/^.*[\\\/]/, ""), //get file name from file path
                PathOnClient: FILE_PATH.replace(/^.*[\\\/]/, ""), //get file name from file path
                Origin: "H",
              };
              const form = new FormData();
              form.setBoundary("boundary_string");
              form.append("entity_content", JSON.stringify(contentVersion), {
                contentType: "application/json",
              });
              form.append("VersionData", file, {
                filename: FILE_PATH.replace(/^.*[\\\/]/, ""), //get file name from file path
                contentType: mime.lookup(FILE_PATH.replace(/^.*[\\\/]/, "")), //get file name from file path
              });
              return form;
            };

            // read file, to create multi-part form data
            console.log("reading file, to create multi-part form data ....");

            fs.readFile(FILE_PATH, { encoding: "base64" }, (err, data) => {
              if (err) {
                console.error(err);
                return;
              } else {
                const formData = createFormData(data);

                // upload file as multi-part form data
                console.log("uploading as mult-part form data ....");

                const URL =
                  conn.instanceUrl +
                  "/services/data/v51.0/sobjects/ContentVersion";

                axios({
                  method: "post",
                  maxContentLength: Infinity,
                  maxBodyLength: Infinity,
                  url: URL,
                  headers: {
                    Authorization: "Bearer " + conn.accessToken,
                    "Content-Type": `multipart/form-data; boundary=\"boundary_string\"`,
                  },
                  data: formData,
                });

                console.log("File Uploading ....");

                // uploading as multi-part scope over, inside if
              }
            });
          } else {
            // file size < 36 MB. hence, no need of multi-part form data
            // read file, convert to base64 scope start
            console.log("reading file, converting to base64 ....");

            fs.readFile(FILE_PATH, { encoding: "base64" }, (err, data) => {
              if (err) {
                console.error(err);
                return;
              } else {
                base64Data = data;
                //console.log("base64 Data:", base64Data);

                // upload file scope start
                console.log("uploading file ....");

                conn.sobject("ContentVersion").insert(
                  {
                    Title: FILE_PATH.replace(/^.*[\\\/]/, ""), //get file name from file path
                    PathOnClient: FILE_PATH.replace(/^.*[\\\/]/, ""), //get file name from file path
                    VersionData: base64Data,
                    FirstPublishLocationId: LinkedEntityIdd, //Id to which the content version needs to be linked
                    Origin: "H",
                  },
                  (err, res) => {
                    if (err) {
                      console.log("error:", err);
                    } else {
                      // file uploaded
                      console.log("File uploaded!");
                      console.log(res);

                      // file uploading scope over, inside else
                    }
                  }
                );

                // reading file and converting to base64 scope over, inside else
              }
            });
          } // else scope i.e if file size < 36 MB. that scope over

          // read file size scope over
        }
      });

      // logged in scope over
    }
  });
}; // main method scope over

// calling main method with all the required parameters
main(
  SF_LOGIN_URL,
  SF_USERNAME,
  SF_PASSWORD,
  SF_SECURITY_TOKEN,
  FILE_PATH,
  LinkedEntityIdd
);

```

### Output
![image](https://user-images.githubusercontent.com/63545175/216590880-a3798b2d-9bc0-47a8-8fdf-fd4cb14604bc.png)

![image](https://user-images.githubusercontent.com/63545175/216590934-15af4736-0813-4c15-98e9-2f6ecc8290d9.png)






