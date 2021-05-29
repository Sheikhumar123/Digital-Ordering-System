const express = require('express');
const router = express.Router();
const validationDrink = require('../middlewares/validationDrink.js');
const validationPizza = require('../middlewares/validationPizza.js');
const validationSpecialPizza = require('../middlewares/validationSpecialPizza.js');
const validationTable = require('../middlewares/validationTable');
const validationAddOrder = require('../middlewares/validationAddOrder');
const validateFeedback = require('../middlewares/validateFeedback');
const jwt = require("jsonwebtoken")



require('../db/conn');
const { Table, ReceptionOrder, Pizza, Specialpizza, Drink, KitchenOrder, Admin, Cheif, Feedback } = require('../models/tableSchema')

router.get('/', (req, res) => {
    res.send('hello sheikh from server router');
})

router.post("/addfeedback" , validateFeedback )

// add table router
router.post('/addtable', validationTable);

// add pizza to database
router.post('/addpizza', validationPizza);

// add special pizza to database
router.post('/addspecialpizza', validationSpecialPizza);

// add  drinks to database
router.post('/adddrink', validationDrink);

// send order to database  
router.post('/addorder', validationAddOrder);;

// get feedback to admin
router.get('/getfeedback' ,async  (req , res) =>{

    try {

        const feedback = await Feedback.find({});
        res.send({ data: feedback })

    } catch (error) {

    }
})

// signin tables ruter 


router.post('/login', async (req, res) => {
    console.log(req.body);
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: "please fill the data" })

        }

        if (username === "admin") {
            const adminLogin = await Admin.findOne({ username: username });
            console.log(adminLogin + "hello");
            if (!adminLogin) {
                return res.json({ error: "invalid cridentials" })
            } else {

                console.log(adminLogin.password);
                if (adminLogin.password === password) {
                    console.log("matched");
                    return res.status(202).json({ data: adminLogin })

                } else {
                    console.log("not matched ");
                    return res.json({ error: "invalid cridentials" })

                }
            }
        } else if (username === "chief") {
            const cheifLogin = await Cheif.findOne({ username: username });
            console.log(cheifLogin);
            if (!cheifLogin) {
                return res.json({ error: "invalid cridentials" })
            } else {

                console.log(cheifLogin.password);
                if (cheifLogin.password === password) {
                    console.log("matched");
                    return res.status(202).json({ data: cheifLogin })

                } else {
                    console.log("not matched ");
                    return res.json({ error: "invalid cridentials" })

                }
            }
        } else {
            const tableLogin = await Table.findOne({ username: username });
            console.log(tableLogin);
            if (!tableLogin) {
                return res.json({ error: "invalid cridentials" })
            } else {

                console.log(tableLogin.password);
                if (tableLogin.password === password) {
                    console.log("matched");
                    const token =  await tableLogin.generateAuthToken()
                    console.log(token);

                    res.cookie("jwToken" , token ,{
                        expires: new Date(Date.now() + 5*60*1000),
                        httpOnly : true
                    })
                    return res.status(202).json({ data: tableLogin })

                    // const token = jwt.sign({name : tableLogin.username},process.env.TOKEN_SECRET);
                    // console.log(token)
                    // return res.status(202).json({ data: {name:tableLogin.username,token:token} })

                } else {
                    console.log("not matched ");
                    return res.json({ error: "invalid cridentials" })

                }
            }
        }

    } catch (error) {
        console.log(error);
    }
})




router.get('/getkitchenorder', async (req, res) => {


    try {

        const orders = await KitchenOrder.find({});
        res.send({ data: orders })

    } catch (error) {

    }


})


router.get('/getpizza', async (req, res) => {


    try {

        const orders = await Pizza.find({});
        // console.log(orders);
        res.send({ data: orders })

    } catch (error) {

    }


})

router.get('/getspecialpizza', async (req, res) => {


    try {

        const orders = await Specialpizza.find({});
        // console.log(orders);
        res.send({ data: orders })

    } catch (error) {

    }


})


router.get('/getdrink', async (req, res) => {


    try {

        const orders = await Drink.find({});
        // console.log(orders);
        res.send({ data: orders })

    } catch (error) {

    }


})




module.exports = router