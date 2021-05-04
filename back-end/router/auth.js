const express = require('express');
const router = express.Router();
const validationDrink = require('../middlewares/validationDrink.js');
const validationPizza = require('../middlewares/validationPizza.js');
const validationSpecialPizza = require('../middlewares/validationSpecialPizza.js');
const validationTable = require('../middlewares/validationTable');
const validationAddOrder = require('../middlewares/validationAddOrder');
const upload = require('../middlewares/upload.js')



require('../db/conn');
const { Table, ReceptionOrder, KitchenOrder} = require('../models/tableSchema')

router.get('/', (req, res) => {
    res.send('hello sheikh from server router');
})

// add table router
router.post('/addtable', validationTable);

// add pizza to database
router.post('/addpizza' ,upload.single('avatar'), validationPizza  );

// add special pizza to database
router.post('/addspecialpizza',upload.single('avatar') , validationSpecialPizza );

// add  drinks to database
router.post('/adddrink', upload.single('avatar'), validationDrink );



// router.post('/loginTable', async (req, res) => {
//     const { tableName, password } = req.body

//     if (!tableName || !password ) {
//         return res.json({ error: "please fill all fields" })
//     }

//     const tableLogin = await Table.findOne({ tableName: tableName });
//     if(!tableLogin){
//         return res.json({error:"invalid cridentials"})
//     }else{

//         console.log(tableLogin.password);
//         if (tableLogin.password === password) {
//             console.log("matched");

//         } else {
//             console.log("not matched ");
//         return res.json({error:"invalid cridentials"})

//         }
//     }         
// })

// signin tables ruter 


router.post('/login', async (req, res) => {
    console.log(req.body);
    try {
        const { tableName, password } = req.body;
        if (!tableName || !password) {
            return res.status(400).json({ error: "please fill the data" })

        }

        const tableLogin = await Table.findOne({ tableName: tableName });
        console.log(tableLogin);

        if (!tableLogin) {
            return res.json({ error: "invalid cridentials" })
        } else {

            console.log(tableLogin.password);
            if (tableLogin.password === password) {
                console.log("matched");
                return res.status(202).json({ message: "hello"})

            } else {
                console.log("not matched ");
                return res.json({ error: "invalid cridentials" })

            }
        }

    } catch (error) {
        console.log(error);
    }
})


// send order to database  
router.post('/addorder', validationAddOrder);;


router.get('/getkitchenorder', async (req, res) => {


    try {

        const orders = await KitchenOrder.find({});
        console.log(orders);
        res.send({data : orders})

    } catch (error) {

    }


})




module.exports = router