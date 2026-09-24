const fs = require("fs");

/**
 * ! 1. Create Folder
 * ? fs.mkdirSync("folder name")
fs.mkdirSync("logs");
fs.mkdirSync("logs/parent/child/subchild", {recursive: true})
*/

/**
 * ! 2. Delete Folder
 * ? fs.rmdirSync() - old (depricated)
 * ? fs.rmSync() - new
fs.rmSync("logs",{recursive: true});
*/

/**
 * ! 3. Rename Folder
 *  ? fs.renameSync("old folder", "new folder")
    fs.mkdirSync("logs/parent/child/subchild", {recursive: true})
    fs.renameSync("dist/parent/logs", "dist/parent/src");
*/

/**
 * ! 4. Copy Folder
 * fs.cpSync("old path", "new path")
 * fs.cpSync("dist/parent/child", "output", {recursive: true});
 */

/**
 * ! 5. Read Folder
 * ? fs.readDirSync()
const data = fs.readdirSync("dist")
console.log(data)
*/

/**
 * ! 6. Check Folder Exist or not
 * ? fs.existsSync("folder or file")
    const isFileExist = fs.existsSync("dist/logs");
    console.log(isFileExist);
*/

/**
 * ! 7. Folder Status
 * ? fs.statSync("folder or file")
 */

if (!fs.existsSync("output")) {
  fs.mkdirSync("output");
  fs.writeFileSync("output/index.js", "console.log('Namaste Developers')");
}

const fileStatus = fs.statSync("output");
const date = new Date(fileStatus.ctime);

const dd = date.getDate().toString().padEnd(2, "0");
const mm = (date.getMonth() + 1).toString().padStart(2, "0");
const yy = date.getFullYear();

const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

console.log(`${dd}-${mm}-${yy}`);
console.log(`${hour}:${minute}:${second}`);
