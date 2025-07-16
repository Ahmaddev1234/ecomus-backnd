const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./config/db_connection');
const users = require('./routes/userRoutes');
const owners = require('./routes/ownerRoutes');
const products = require('./routes/productRoutes');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();


const PORT = process.env.PORT || 3000;


const allowedOrigins = [
  "http://localhost:5173",  
  "https://ecomus-tan.vercel.app/", 
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/users", users);
app.use("/products", products);
app.use("/owners", owners);


connection();


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
