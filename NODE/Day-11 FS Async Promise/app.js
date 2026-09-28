const fs = require("fs/promises");

fs.mkdir("Demo")
  .then((data) => {
    console.log("data:", data);
    console.log("Folder Created");
  })
  .catch((error) => console.log(error));
