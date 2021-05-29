const env = require('dotenv')
const express = require('express');
var cookieParser = require('cookie-parser')
// const fileUpload = require('express-fileupload');
var cors = require('cors')
const app = express();
require('./db/conn');


app.use(cors())
app.use(express.json({limit: "1mb"}));
app.use(cookieParser())


// link the router files
app.use(require('./router/auth'));








env.config()
const PORT= process.env.PORT;



app.listen(PORT , ()=>{
    console.log(`server is running at pport no ${PORT}`);
})