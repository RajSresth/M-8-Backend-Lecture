const fs = require("fs");
const http = require("http");



const server = http.createServer((req,res)=>{

    if(req.url === "/")
    {
        // Without stream
        fs.readFile("input.txt","utf-8", (err,data) => {
            if(err)
            {
                console.log("Error:",err);
            }
            else{
                
                res.write(data);
                res.end()
            }
        })
    }
    
})

server.listen(3000, () =>{
    console.log(`Server is running on http://localhost:3000`)
})