const express = require('express');
const router = express.Router();
const validationDrink = require('../middlewares/validationDrink.js');
const validationPizza = require('../middlewares/validationPizza.js');
const validationSpecialPizza = require('../middlewares/validationSpecialPizza.js');
const validationTable = require('../middlewares/validationTable');
const validationAddOrder = require('../middlewares/validationAddOrder');
const validateFeedback = require('../middlewares/validateFeedback');
const validateLogin = require('../middlewares/validateLogin');
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

// signin router 

router.post('/login', validateLogin)


// get feedback to admin
router.get('/getfeedback' ,async  (req , res) =>{

    try {

        const feedback = await Feedback.find({});
        res.send({ data: feedback })

    } catch (error) {

    }
})





router.get('/getkitchenorder', async (req, res) => {


    try {

        const orders = await KitchenOrder.find({});
        res.send({ data: orders })

    } catch (error) {

    }


})


router.get('/receptionorder', async (req, res) => {


    try {

        const orders = await ReceptionOrder.find({});
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