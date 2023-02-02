const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const connection = require("../../config/database/connection");
const routes = require("../routes");
const isAuthenticated = require("../middlewares/isAuthenticated");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(routes);

app.get("/",isAuthenticated,(req,res)=>{
    const user = req.user;
    console.log(user)
    res.status(200).json({user});
});

connection().then(()=> {
    console.log("Connected to database")
    app.listen(process.env.PORT, () => {
        console.log(`Connection on port ${process.env.PORT}`);
    });
}).catch(err =>{
    console.log(err)
});