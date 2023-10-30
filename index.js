const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./Config/db');
const bookRouter = require('./Routes/bookRouter');
const cors = require("cors")
dotenv.config()

const app = express();
    
// connceting MongoDB
connectDB()

app.use(cors())
app.use(express.json())
app.use("/", bookRouter) 

  

app.listen(process.env.PORT, () => {
    console.log("Server Running PORT ", process.env.PORT);
})
