// const { mkdir, writeFile, readFile, appendFile } = require("fs/promises");
// const fs = require("fs");

/**
 * ! promise way => promise hell
 
mkdir("demo")
  .then(() => {
    console.log("1. Folder Created");

    writeFile("demo/f1.txt", "Hello Developers")
      .then(() => {
          console.log("2. File created");

          readFile("demo/f1.txt", "utf-8")
            .then((data) => console.log("3. File Read:", data))
            .catch((error) => console.log("Read file error:", error));
      })
      .catch((error) => {
        console.log("File creation error:", error);
      });
  })
  .catch((error) => {
    console.log("Folder creation error:", error);
  });
*/

/**
 * ! Way-1
 const multiTask = async () => {
    try {
      if(!fs.existsSync("demo"))
      {
         await  mkdir("demo");
        console.log("1. Folder Created ✅");

        await writeFile("demo/f1.txt", "Hello Hello Hello");
        console.log("2. File Created ✅");
        
        const fileData = await readFile("demo/f1.txt", "utf-8");
        console.log("3. Read File ✅", fileData);

        await appendFile("demo/f1.txt",`${fileData}\nNamaste Namaste Namaste`)
        console.log("4. Update File ✅")
      }
      else{
        console.log("🚨⚠️ Operation are already implemented");
      }
    } catch (error) {
      console.log("Error: ❌",error)
    }
}
multiTask()
*/
/**
 * ! Way-2
 *  ! IIFE
(
  async function ()
  {
      try {
        // Folder create
        await mkdir("src");
        console.log("1. Folder created");

        // File create
        await writeFile("src/index.js", "console.log('Hello World')\n");
        console.log("2. File created");

        // File read
        const fileData = await readFile("src/index.js","utf-8");
        console.log("3. File Read:",fileData);

        // File update
        await appendFile("src/index.js", "console.log('Namaste')");
        console.log("4. File Updated");
      } catch (error) {
        console.log("Error:",error); 
      }
  }
)()
  */

// const fs = require("fs");
import fs from "fs";

console.log("start");

fs.writeFile("t1.txt", "Hello", (err) => {
  if (err) console.log(err);
  else console.log("File created");
});
fs.writeFile("t2.txt", "Hello", (err) => {
  if (err) console.log(err);
  else console.log("File created");
});
fs.writeFile("t3.txt", "Hello", (err) => {
  if (err) console.log(err);
  else console.log("File created");
});
fs.writeFile("t4.txt", "Hello", (err) => {
  if (err) console.log(err);
  else console.log("File created");
});

console.log("end");

/**
 * ! Promise import ?
 * ! import, export  __filename, __dirname
 */
