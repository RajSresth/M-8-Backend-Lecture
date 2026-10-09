## 1. What is Node Js?

Node.js is an open-source, cross-platform JavaScript runtime environment that allows JavaScript to run outside the browser, primarily on the server side, using the V8 JavaScript engine.

i) Event-driven & non-blocking I/O
ii) Single-threaded JavaScript execution.

## 2. What is Common Js?

CommonJS (CJS) is a JavaScript module system used primarily in Node.js, where modules are loaded synchronously using **require()** and values are exported using **module.exports**

## 3. What is ES Module or Module Js?

ES Modules (ESM) is JavaScript's standardized module system that uses import and export to share code between modules.

**Named import export**
A named import is used to import a specific exported value from a module by using the same exported name inside { }.

```
// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from "./math.js";
```

**Default export import**
Default export allows a module to export one primary value that can be imported using any name without curly braces.

```
// math.js
 function add(a, b) {
  return a + b;
}
export default add;

// app.js
import addition from "./math.js";
```

## 3. Difference between common js and module js?

**1. CommonJS (CJS)**
CommonJS is a module system primarily used in Node.js.
It uses require() to import modules.
It uses module.exports or exports to export modules.
Modules are generally loaded synchronously.

**2. Module JS / ES Modules (ESM)**
ES Modules is the standard JavaScript module system defined by ECMAScript.
It uses import to import modules.
It uses export to export modules.
It supports static module analysis and asynchronous module loading.

## 4. What do you mean by Asynchronous loading?

Asynchronous loading means a module/resource is loaded without blocking the execution of other JavaScript code. The program can continue executing while the required resource is being fetched.

```
import("./math.js").then((response) => {
  console.log(response.add(10, 20));
});

or
// using async await
const add = await (() =>  import("./A.js"))

console.log("Other code");
```

```
output:
Other code
30
```

## 5. What is Module Function Executor?

- In Node.js (CommonJS modules), the “module function executor” refers to the automatic function wrapper that Node.js uses to execute every module.

- Before Node.js runs a module’s code, it wraps the entire file contents inside a function like this:

```
(function (exports, require, module, __filename, __dirname) {
  // Your module code actually lives here
});
```

## 6. What is **filename and **dirname?

1. **\_\_filename:**
   The full absolute path of the current JavaScript file (including the filename).

```
  Example: /Users/you/project/app.js
```

2. **\_\_dirname:**
   The full absolute path of the folder that contains the current JavaScript file.

```
  Example: /Users/you/project
```

## 7. What is Path modules?

The path module is a built-in Node.js tool that helps you work with file and folder paths (join them, get the directory name, filename, extension, etc.) in a safe and cross-platform way.

1. **path.join():** Joins path segments safely.
2. **path.resolve():** Resolves to an absolute path.
3. **path.dirname():** Returns the directory name of a path.
4. **path.basename():** Returns the last portion of a path (filename).
5. **path.extname():** Returns the file extension.
6. **path.parse():** Parses a path into an object.
7. **path.format():** Builds a path string from an object.
8. **path.isAbsolute():** Checks if a path is absolute.
9. **path.normalize():** path.normalize() cleans a path string by resolving . and .. segments and removing extra separators, returning a simplified path.


## 8. What is callback hell?
Callback Hell is a situation where multiple callbacks are nested inside each other, making code hard to read, understand, and maintain.

```
getUser(() => {
  getOrders(() => {
    getPayment(() => {
      sendEmail(() => {
        console.log("Done");
      });
    });
  });
});
```

## 9. What is promise hell?
Promise Hell is a situation where multiple .then() chains become deeply nested or unnecessarily complex, making Promise-based code difficult to read and maintain.

```
getUser()
  .then(user => {
    return getOrders(user).then(orders => {
      return getPayment(orders).then(payment => {
        console.log(payment);
      });
    });
  });
```

## 10. what is fs module?
FS (File System) module is a built-in Node.js module used to create, read, write, update, and delete files and folders.

FS module provides three ways to perform file system operations in Node.js: 
1. synchronous
2. callback-based asynchronous
3. Promise-based asynchronous methods.

- **readFile:** → For Reading the file
- **writeFile:** → Write/Overwrite
- **appendFile:** → Add data in file
- **unlink:** → Delete file
- **mkdir:** → Create folder
- **rm:** → Delete folder
- **readdir:** → Read folder contents
- **rename:** → Rename/Move file and folder
- **exists:** → check file or folder exists or not
- **stat:** → Get file information

## 11. What is crypto module?
he crypto module is Node.js’s built-in module for performing cryptographic operations such as hashing, encryption/decryption (symmetric and asymmetric), digital signatures, and generating cryptographically secure random values.

- **crypto.createHash(algorithm):**
- **crypto.createHmac(algorithm, key):**
- **crypto.randomBytes():**
- **crypto.randomUUID():**
- **crypto.pbkdf2():**

## 12. What is Stream in Node Js?
Streams in Node.js are a way to read or write data in small chunks instead of processing the entire data at once.

## 13. What is pipe in nodejs?
pipe() is used to connect a Readable Stream to a Writable Stream so that data automatically flows from the source to the destination.

```
readableStream.pipe(writableStream);
```

## 13. How many types of stream in nodejs?
**1. Readable Stream**
A Readable Stream is used to read data in chunks from a source.
Example: Reading a file using fs.createReadStream().

**2. Writable Stream**

A Writable Stream is used to write data in chunks to a destination.
Example: Writing data to a file using fs.createWriteStream().

**3. Duplex Stream**
A Duplex Stream can both read and write data independently.
Example: A TCP socket.

**4. Transform Stream**
A Transform Stream is a Duplex Stream that reads data, transforms it, and produces the transformed output.
Example: Compression using zlib.createGzip().