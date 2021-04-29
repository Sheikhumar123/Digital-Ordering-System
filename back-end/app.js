const env = require('dotenv')
const mongoose = require('mongoose')
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
require('./db/conn');

// const table = require("./models/tableSchema")

app.use(express.json());
app.use(fileUpload());
// link the router files
app.use(require('./router/auth'));


// const DB = 'mongodb+srv://SheikhUmar123:SheikhUmar5522@cluster0.8wfvk.mongodb.net/digitalresturant?retryWrites=true&w=majority'
//  const DB = process.env.DATABASE
env.config()
const PORT= process.env.PORT;

// dotenv.config({path:'./config.env'})
// mongoose.connect(DB , {
//     useNewUrlParser: true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false,
// }).then(()=>{
//     console.log('connection sucesssfull');
// }).catch((err) =>{
//     console.log('no connection');
// })

// app.get('/' , (req , res)=>{
//     res.send('hello sheikh from server');
// })
console.log("hello");


app.listen(PORT , ()=>{
    console.log(`server is running at pport no ${PORT}`);
})