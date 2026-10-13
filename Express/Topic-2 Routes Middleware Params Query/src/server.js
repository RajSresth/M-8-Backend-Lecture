import express from "express";
import dotenv from "dotenv"
dotenv.config();
const app = express();

const PORT = process.env.PORT || 4600;

app.use((req,res,next) => {
    console.log("Middleware");
    next()
})


app.get("/", (req,res) => {
    console.log("Home Page Route Handler")
    res.send("Home Page");
})

app.get("/products", (req,res) => {
    console.log("Products Page Route Handler");
    res.send("Products Page")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})