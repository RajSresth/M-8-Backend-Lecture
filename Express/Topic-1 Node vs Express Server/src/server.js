const http = require("http");

const server = http.createServer((req,res) => {
    res.end("Hello From Server");
})


const PORT = 4600;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})