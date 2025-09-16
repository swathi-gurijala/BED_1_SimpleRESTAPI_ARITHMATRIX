const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// ✅ Connect to MongoDB (replace with your MongoDB URI if using Atlas)
mongoose.connect("mongodb+srv://swathigurijala:Swathi1403@productcluster.kylhwha.mongodb.net/productdb?retryWrites=true&w=majority&appName=ProductCluster", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Atlas Connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));


// ✅ Routes
app.use("/api/products", productRoutes);

// ✅ Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// ✅ Test route for browser
app.get("/", (req, res) => {
  res.send("🚀 Product API is running! Use /api/products to access products");
});

