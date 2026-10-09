const http = require("http");

// 1. create server
const server = http.createServer((req, res)=>{

    // http://localhost:3000/greet
    if(req.method === "POST" && req.url === "/greet")
    {
        let obj = "";

        req.on("data", (chunk) => {
            obj = obj + chunk.toString();
        })
       
        req.on("end", ()=>{
            let {fullname} = JSON.parse(obj);
            return res.end(`Good Morning ${fullname}`);
       })
       return;
    }

    if(req.method === "GET" && req.url ==="/")
    {
        return res.end("Server chal raha h bhai")
    }
})

// 2. To run server
server.listen(3000,()=>{
    console.log("Server is running");
})