const express = require('express');
const router = express.Router();
const validationDrink = require('../middlewares/validationDrink.js');
const validationPizza = require('../middlewares/validationPizza.js');
const validationSpecialPizza = require('../middlewares/validationSpecialPizza.js');
const validationTable = require('../middlewares/validationTable');
const upload = require('../middlewares/upload.js')



require('../db/conn');
const { Table, Specialpizza, KitchenOrder ,ReceptionOrder} = require('../models/tableSchema')

router.get('/', (req, res) => {
    res.send('hello sheikh from server router');
})
// add table router
router.post('/addtable', validationTable)
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





// add pizza to database
router.post('/addpizza' ,upload.single('avatar'), validationPizza  )






// add special pizza to database
router.post('/addspecialpizza',upload.single('avatar') , validationSpecialPizza )





// add  drinks to database
router.post('/adddrink', upload.single('avatar'), validationDrink );




// send order to database  
router.post('/addorder', async (req, res) => {

    //    console.log( req.body);


    const { tableNo, total, totalOrder } = req.body
    // console.log(order);

    if (!totalOrder) {
        return res.status(404).json({ error: "please fill all fields" })
    }

    KitchenOrder.findOne({ tableNo: tableNo })

        .then((orderExist) => {
            // console.log(dishExist);
            if (orderExist) {
                console.log("exist");
                return res.status(421).json({ error: "table already exist" })
            } else {





                const kitchenorder = new KitchenOrder({ tableNo, total, totalOrder });
                const receptionorder = new ReceptionOrder({ tableNo, total, totalOrder });

                kitchenorder.save().then(() => {
                    res.status(201).json({ message: "order added" })
                }).catch((err) => {
                    res.status(500).json({ error: "failed to registered" })
                })
                // receptionorder.save().then(() => {
                //     res.status(201).json({ message: "order added" })
                // }).catch((err) => {
                //     res.status(500).json({ error: "failed to registered" })
                // })
            }

        }).catch((err) => {
            console.log(err);
        })



});





router.get('/getkitchenorder', async (req, res) => {


    try {

        const orders = await KitchenOrder.find({});
        console.log(orders);
        res.send({data : orders})

    } catch (error) {

    }


})




module.exports = router