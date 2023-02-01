const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const connection = require("../../config/database/connection");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

connection().then(()=> {
    console.log("Connected to databse")
    app.listen(process.env.PORT, () => {
        console.log(`Connection on port ${process.env.PORT}`);
    });
}).catch(err =>{
    console.log(err)
});