const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // with streaming
  const readStream = fs.createReadStream("input.txt", {encoding: "utf-8"});
  const writeStream = fs.createWriteStream("output.txt");
  readStream.pipe(writeStream);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});

