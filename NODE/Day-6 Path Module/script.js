const path = require("path");


/**
 * ! 1. path.join(arg1, ar2, arg3) => relative path

const relativePath = path.join("parent","child", "abc");
const absolutePath = path.join(__dirname, "parent", "child", "abc");

console.log("relativePath:",relativePath); 
console.log("absolutePath:",absolutePath);
*/

/**
 * ! 2. path.resolve()

const resolvePathOutput = path.resolve("xyz.txt")
console.log("resolvePathOutput:",resolvePathOutput);
// "F:\Premium Batch\M-8 Premium Backend 15 Sep\NODE" + "\xyz.txt"
// F:\Premium Batch\M-8 Premium Backend 15 Sep + "\xyz.txt"
 */

/**
 * ! path.dirname()
    const resolvePath = path.resolve("app.js");
    resolvePath = "F:\Premium Batch\M-8 Premium Backend 15 Sep\NODE\Day-6 Path Module" + "\app.js"
    const dirOutput = path.dirname(resolvePath);
    console.log("dirOutput:",dirOutput);
    dirOutput = " F:\Premium Batch\M-8 Premium Backend 15 Sep\NODE\Day-6 Path Module"
*/

/**
*   ! path.basename(path, exclude extension)
*   ! path.extName(path)
const baseOutput = path.basename(__filename, ".js");
const extensionOutput = path.extname(__filename);

console.log("baseOutput:",baseOutput);
console.log("extensionOutput:", extensionOutput);
*/

/**
 * ! path.parse(path)
 
let parseObj = path.parse(__filename);
console.log("parseObj:",parseObj);

* ! path.format(parseObj)
const formatOutput = path.format(parseObj);
console.log("formatOutput:",formatOutput);
*/

/**
 * ! path.isAbsolute(path) => true or false
const relativePath = path.join("parent","child","xyz.txt");
const absolutePath = path.join(__dirname, "parent","child","xyz.txt");

const output1 = path.isAbsolute(relativePath);
const output2 = path.isAbsolute(absolutePath);

console.log("output1:",output1);
console.log("output2:",output2);
*/

/**
 * ! path.normalize()
 */

const x = "F:\\Premium Batch\\M-8 Premium Backend 15 Sep\\NODE\\Day-6 Path Module\\..\\Day-5 Node Server\\server.js"

const normalizeOutput = path.normalize(x);
console.log("normalizeOutput:",normalizeOutput);
// normalizeOutput
// F:\Premium Batch\M-8 Premium Backend 15 Sep\NODE\Day-5 Node Server\server.js