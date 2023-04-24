

import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import tableRoute from "./routes/tableRoute.js";
import path from "path"
import cors from "cors";
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname,'client','src', 'build' )));

// Serve the index.html file from the food-services directory
app.get('/food-servies', (req, res) => {
  res.sendFile(path.join(__dirname, 'client','src','build','index.html'));
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/tablebook", tableRoute);

connectDB();

app.get('/', (req,res)=>{
    res.send("<h1>Hello </h1>")
})

const PORT =process.env.PORT||8080;

app.listen(PORT,()=>{
    console.log(`server is runing ${PORT}`.bgCyan.white )
})
