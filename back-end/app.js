const env = require('dotenv')
const express = require('express');
// const fileUpload = require('express-fileupload');
var cors = require('cors')
const app = express();
require('./db/conn');


app.use(cors())
app.use(express.json({limit: "50mb"}));
// app.use(fileUpload());
// link the router files
app.use(require('./router/auth'));






env.config()
const PORT= process.env.PORT;



console.log("hello");


app.listen(PORT , ()=>{
    console.log(`server is running at pport no ${PORT}`);
})