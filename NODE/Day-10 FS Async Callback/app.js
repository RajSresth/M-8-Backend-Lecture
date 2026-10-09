const fs = require("fs");

/**
 * ! Create File
 * ? fs.writeFile(filename, content, error_first_callback) 

fs.writeFile("demo.txt","Hello Developers", (err) => {
    if(err)
    {
        console.log(err);
        return;
    }
    console.log("Demo file created");
});
*/

/**
 * ! Read File
 * ? fs.readFile(filname, character encoding, callback)
 * ? character encoding = utf-8

fs.readFile("demo.txt","utf-8",(err, data)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    else{
        console.log(data);
    }
})
*/

/**
 * ? Update File
 * ! fs.appendFile(filename, content, callback)

    fs.appendFile("demo.js", "Node",(error)=>{
        if(error) return console.log(error);
        console.log("Demo File updated");
    });
*/

/**
 * ? Delete File
 * ! fs.unlink(filename, callback)
    fs.unlink("demo.js",(err)=>{
        if(err) return console.log(err);
        console.log("File Removed");
    })
*/

/**
 * ! Create Folder
 * ? fs.mkdir(folder_name,{recursive: true},callback)
 
    fs.mkdir("src/A/B/C",{recursive: true},(err) =>{
        if(err) return console.log(err);

        console.log("Folder created");
    })
*/

/**
 * ! Remove Folder
 * ? fs.rm(folder_name,{recursive: true}, callback)


fs.rm("src",{recursive: true},(err) => {
    if(err) return console.log(err);
    console.log("Folder Deleted Successfully")
})
 */

/**
 * ! Rename Folder
 * ? fs.rename("old_folder", "new_folder", callback)

if (!fs.existsSync("src")) {
  fs.mkdirSync("src");
}

fs.rename("src", "dist", (err) => {
  if (err) return console.log(err);
  console.log("Folder Renamed");
});
 */

/**
 * ! Copy Folder
 * ? fs.cp("old_folder", "new _folder", {recursive: true}, callback)

fs.cp("dist", "output", { recursive: true }, (err) => {
  if (err) return console.log(err);
  console.log("Copied Successfully");
});
 */

/**
 * callback Hell
 */

fs.mkdir("demo", (err) => {
  if (err) return console.log("folder creation error:", err);

  console.log("1. Folder created");
  fs.writeFile("demo/f1.txt", "Hello Dev", (err) => {
    if (err) return console.log("file creation error:", err);

    console.log("2. File Created");
    fs.readFile("demo/f1.txt", "utf-8", (err, data) => {
      if (err) return console.log("read file error:", err);

      console.log("3. File Read");
      fs.appendFile("demo/f1.txt", `${data} smjh rhe ho`, (err) => {
        if (err) return console.log("update file error:", err);
        console.log("4. File Update");
      });
    });
  });
});
