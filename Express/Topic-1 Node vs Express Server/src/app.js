const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express Server");
});

app.get("/products", (req, res) => {
  const products = [
    { id: 101, item: "iphone 18 pro max", price: 179000 },
    { id: 102, item: "macbook m5", price: 139000 },
  ];
  res.json(products);
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/shop", (req, res) => {
  res.send("Shop Page");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
