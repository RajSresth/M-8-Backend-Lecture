const fs = require("fs");

/**
 * ! 1. Create File
 * ? fs.writeFileSync("filename.ext","content")
 
fs.writeFileSync("demo.txt", "Ya to win h ya to lern h");
fs.writeFileSync("src/script.js", "console.log('Hello Dev')");
*/

/**
 * ! 2. Read File
 * ? fs.readFileSync()
const fileData = fs.readFileSync("demo.txt");
console.log(fileData);            // <buffer 59 61 20 74 6f 20>
console.log(fileData.toString()); // ya to win hai ya to lern h      
console.log(typeof fileData);     // object
console.log(Buffer.isBuffer(fileData)); // true or false

const fileData = fs.readFileSync("src/script.js", "utf-8");
console.log(fileData);
console.log(Buffer.isBuffer(fileData));
*/

/**
 * ! 3. Update File
 * ? fs.appendFileSync()
fs.writeFileSync("demo.txt", "Doraemon\n");
fs.appendFileSync("demo.txt", "Nobita\n");
fs.appendFileSync("demo.txt", "Shizuka\n");
fs.appendFileSync("demo.txt", "Sunio\n");
fs.appendFileSync("demo.txt", "Gian\n");
fs.appendFileSync("src/script.js", "\nconsole.log('Samajh rhe ho 👉');");
 */

/**
 * ! 4. Delete File
 * ? fs.unlinkSync()
 * fs.unlinkSync("demo.txt");
 */

/**
 * ! 5. Rename File or Move File
 * ? fs.renameSync("old file", "new file")
 * fs.renameSync("src/script.js","src/index.js");
 * fs.renameSync("src/index.js", "main.js")
 * fs.renameSync("main.js", "src/index.js");
 */

/**
 * ! 6. Copy File
 * ? fs.copyFileSync("source file path","destination file path")
 * ? fs.mkdirSync("folder name")
 */

fs.mkdirSync("dist");
fs.copyFileSync("src/index.js", "dist/main.js");