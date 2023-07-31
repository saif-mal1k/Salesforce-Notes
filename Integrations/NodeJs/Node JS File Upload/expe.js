// const axios = require("axios");
// var FormData = require("form-data");
// const getStream = require("get-stream");
// const mime = require("mime-types");







const jsforce = require("jsforce");
require("dotenv").config();
const fs = require("fs");
SF_LOGIN_URL = "https://login.salesforce.com"
SF_USERNAME = "saifmalik3300@curious-moose-wpu4rn.com"
SF_PASSWORD = "saifmalik@1q2wazsx"
SF_SECURITY_TOKEN = "3lCT2ycNTkc64w28YXLQGVAbz"
FILE_PATH = "/Users/Dell/Desktop/solution.docx";
const LinkedEntityIdd = "0035h00000lvEvlAAE";
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
  console.log("logging in to salesforce ....");
  await conn.login(SF_USERNAME, SF_PASSWORD + SF_SECURITY_TOKEN, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("logged in!");
      console.log(res);
      console.log("reading file size ....");
      fs.stat(FILE_PATH, (err, stats) => {
        if (err) {
          console.error(err);
        } else {
          fileSizeInBytes = stats.size;
          console.log(`File size: ${fileSizeInBytes} bytes`);
          console.log("reading file, converting to base64 ....");
          fs.readFile(FILE_PATH, { encoding: "base64" }, (err, data) => {
            if (err) {
              console.error(err);
              return;
            } else {
              base64Data = data;
              console.log("uploading file ....");
              conn.sobject("ContentVersion").insert(
                {
                  Title: FILE_PATH.replace(/^.*[\\\/]/, ""),
                  PathOnClient: FILE_PATH.replace(/^.*[\\\/]/, ""),
                  VersionData: base64Data,
                  FirstPublishLocationId: LinkedEntityIdd,
                  Origin: "H",
                },
                (err, res) => {
                  if (err) {
                    console.log("error:", err);
                  } else {
                    console.log("File uploaded!");
                    console.log(res);
                  }
                }
              );
            }
          });
        }
      });
    }
  });
};

main(
  SF_LOGIN_URL,
  SF_USERNAME,
  SF_PASSWORD,
  SF_SECURITY_TOKEN,
  FILE_PATH,
  LinkedEntityIdd
);





















/* for reading a file in js

const fs = require('fs');

fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
if (err) {
console.error(err);
return;
}
console.log(data);
});

*/

/* http get request
const axios = require('axios')

// Make request
axios.get('https://jsonplaceholder.typicode.com/posts/1')

// Show response data
.then(res => console.log(res.data))
.catch(err => console.log(err))

*/

/*

var formData = {
name: 'file1',
file: {
value:  fs.createReadStream('C:/kristian/Devbeasts-small.png'),
options: {
    filename: 'Logo_flame.png',
    contentType: 'image/png'
}
}
};

request.post({url:'http://localhost/uploads', formData: formData}, 
function cb(err, httpResponse, body) {
if (err) {
    return console.error('upload failed:', err);
}
console.log('Upload successful!  Server responded with:', body);
}
);

*/

/* 

// FILE UPLOAD

const conn = new jsforce.Connection({
loginUrl: "https://login.salesforce.com",
});

const username = "saifmalik3300@curious-moose-wpu4rn.com";
const password = "saifmalik@1q2wazsx3lCT2ycNTkc64w28YXLQGVAbz";

const main = async () => {
// login to SFDC
console.log("logging in to salesforce.com");

await conn.login(username, password);
await fs.readFile("/Users/Dell/Desktop/solution.pdf", (err, data) => {

// upload file without sending as multi-part form
console.log("Data:", data);

conn.sobject("ContentVersion").insert({
    Title: "title.pdf",
    PathOnClient: "title.pdf",
    VersionData: data,
    FirstPublishLocationId: "0065h00000G8e8oAAB", //Id to which the content version needs to be linked
    Origin: "H",
});

console.log("File Uploaded..");

});

};

main();

*/















// // LOG INTO SFDC & QUERY CONTENT VERSION RECORDS

// const main = async () => {
//   const conn = new jsforce.Connection({
//     loginUrl: SF_LOGIN_URL,
//   });

//   console.log("logging in to salesforce....");

//   await conn.login(SF_USERNAME, SF_PASSWORD + SF_SECURITY_TOKEN, (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res);
//     }
//   });

//   console.log("querying Content Version records from salesforce....");

//   await conn.query("SELECT id,title FROM contentVersion", (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res);
//     }
//   });

//   console.log("creating contact record in to salesforce....");

//   await conn.create(
//     "Contact",
//     {
//       FirstName: "VS",
//       LastName: "code",
//     },
//     (err, res) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(res);
//       }
//     }
//   );

//   console.log("creating contact record another way....");

//   await conn.sobject("Contact").insert({
//     FirstName : "MyName",
//     LastName:"IsKHAN"
//   },(err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res);
//     }
//   });

// };

// main();















// // log in , upload file, get contentDocumentId, create content Document link

// const conn = new jsforce.Connection({
//   loginUrl: SF_LOGIN_URL,
// });

// conn.login(SF_USERNAME, SF_PASSWORD + SF_SECURITY_TOKEN, (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// setTimeout(() => {
//   // upload file
//   console.log("uploading file");

//   conn.sobject("ContentVersion").insert(
//     {
//       Title: "name.txt",
//       PathOnClient: "name.txt",
//       VersionData: "/Users/Dell/Desktop/solution.pdf",
//       FirstPublishLocationId: "0035h00000lvEvlAAE", //Id to which the content version needs to be linked
//       Origin: "H",
//     },
//     (err, res) => {
//       if (err) {
//         console.log(err);
//       } else {
//         //console.log(res);
//         console.log("ContentVersionId:",res.Id);

//         // file uploaded
//         console.log("File uploaded");

//         //query uploaded file
//         console.log("querying to get ContentDocumentId for uploaded file");

//         conn.query(
//           "SELECT Id, ContentDocumentId, title FROM contentversion WHERE id = " + "'"
//             +res.id+"'",
//           (err, res) => {
//             if (err) {
//               console.log(err);
//             } else {
//               //console.log(res);
//               console.log("ContentDocumentId:",res.records[0].ContentDocumentId);

//               conn.sobject("ContentDocumentLink").insert(
//                 {
//                     "ContentDocumentId":res.records[0].ContentDocumentId,
//                     "LinkedEntityId":"0035h00000lvEvlAAE"
//                 },
//                 (err, res) => {
                    
//                     if (err) {
//                         console.log(err);
//                       } else {

//                         console.log(res);

//                       }
//                 }
//                 );
//             }
//           }
//         );
//       }
//     }
//   );
// }, 2000);





























// // upload file and link it to record using firstpublishlocationid

// const jsforce = require("jsforce");

// require("dotenv").config();
// const { SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD, SF_SECURITY_TOKEN } = process.env;



// FILE_NAME = "upload.pdf";
// FILE_PATH = "/Users/Dell/Desktop/solution.pdf";


// const LinkedEntityIdd = "0035h00000lvEvlAAE";



// // main method that LOG into SFDC, upload file, query uploaded file, create content document link
// const main = async (SF_LOGIN_URL , SF_USERNAME, SF_PASSWORD, SF_SECURITY_TOKEN, LinkedEntityIdd ) => {
//   const conn = new jsforce.Connection({
//     loginUrl: SF_LOGIN_URL,
//   });


//   // log into salesforce
//   console.log("logging in to salesforce....");

//   await conn.login(SF_USERNAME, SF_PASSWORD + SF_SECURITY_TOKEN, (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res);
//     }
//   });



//   // upload file
//   console.log("uploading file");

//   await conn.sobject("ContentVersion").insert(
//     {
//       Title: FILE_NAME,
//       PathOnClient: FILE_NAME,
//       VersionData: FILE_PATH,
//       FirstPublishLocationId: LinkedEntityIdd, //Id to which the content version needs to be linked
//       Origin: "H",
//     },
//     (err, res) => {
//       if (err) {
//         console.log(err);
//       } else {

//         //ContentVersionIdd = res.Id;

//         console.log(res);
//         //console.log("ContentVersionId:",res.id);

//         // file uploaded
//         console.log("File uploaded!");
//       }
//     });  

// };

// main(SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD, SF_SECURITY_TOKEN, LinkedEntityIdd);




































// // log in , upload file, get contentDocumentId, create content Document link

// const conn = new jsforce.Connection({
//     loginUrl: SF_LOGIN_URL,
//   });
  
//   conn.login(SF_USERNAME, SF_PASSWORD + SF_SECURITY_TOKEN, (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res);
//     }
//   });
  
//   setTimeout(() => {
//     // upload file
//     console.log("uploading file");
  
//     conn.sobject("ContentVersion").insert(
//       {
//         Title: "name.txt",
//         PathOnClient: "name.txt",
//         VersionData: "/Users/Dell/Desktop/solution.pdf",
//         FirstPublishLocationId: "0035h00000lvEvlAAE", //Id to which the content version needs to be linked
//         Origin: "H",
//       },
//       (err, res) => {
//         if (err) {
//           console.log(err);
//         } else {
//           //console.log(res);
//           console.log("ContentVersionId:",res.Id);
  
//           // file uploaded
//           console.log("File uploaded");
  
//         }
//       }
//     );
//   }, 2000);





























/* references:
- https://www.youtube.com/watch?v=81e1fPcR14c
- 

*/
