import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());

const products = [
    {id: 1, item: "Macbook", price: 149000},
    {id: 2, item: "Iphone 18 pro max", price: 179000}
]

app.get("/", (req,res) => {
    console.log("Home Page Route Handler")
    res.send("Home Page");
})

app.get("/products", (req,res) => {
   res.status(200).json(products);
});

app.post("/create-product",(req,res) => {
        const data = req.body;
        console.log(data)

        if(!data)
        {
            return res.status(400).json({
                success: false,
                message: "Data not found"
            })
        }

        if(Array.isArray(data))
        {
           products.push(...data);
           return res.status(201).json({
            success: true,
            message:"Product Created",
            data: products 
        })
        }
        products.push(data);
        return res.status(201).json({
            success: true,
            message:"Product Created",
            data: products 
        })
});

app.put("/update-product/:id",(req,res) => {
    const {id} = req.params;
    const newProduct = req.body;
    const isProductExist = products.findIndex(element => element.id === Number(id) )

    if(!isProductExist)
    {
        return res.status(400).json({
            success: false,
            message: "Product Not Found"
        })
    }
     
     products[isProductExist] = {...newProduct}

    return res.status(200).json({
        success: true,
        message: "Product Updated",
        data: products[isProductExist]
    })
})


const PORT = process.env.PORT || 4600;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})


/**
 * ! Important Status Code
    100 - 199 = Information
    200 - 299 = Success Response
    300 - 399 = Redirectional
    400 - 499 = Client Error
    500 - 599 = Server Error
*/