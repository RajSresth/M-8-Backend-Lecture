## 1. What is Node Js?

Node.js is an open-source, cross-platform JavaScript runtime environment that allows JavaScript to run outside the browser, primarily on the server side, using the V8 JavaScript engine.

i) Event-driven & non-blocking I/O
ii) Single-threaded JavaScript execution.

## 2. What is Common Js?

CommonJS (CJS) is a JavaScript module system used primarily in Node.js, where modules are loaded synchronously using require() and values are exported using module.exports

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
