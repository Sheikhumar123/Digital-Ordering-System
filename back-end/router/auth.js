const express = require('express');
const router = express.Router();
const validationDrink = require('../middlewares/validationDrink.js');
const uploadMulter = require('../middlewares/upload.js')



require('../db/conn');
const { Table, Pizza, Specialpizza, KitchenOrder ,ReceptionOrder} = require('../models/tableSchema')

router.get('/', (req, res) => {
    res.send('hello sheikh from server router');
})
// add table router
router.post('/addtable', (req, res) => {
    const { tableName, password, cpassword } = req.body

    if (!tableName || !password || !cpassword) {
        return res.json({ error: "please fill all fields" })
    }

    Table.findOne({ tableName: tableName })
        .then((tableExist) => {
            if (tableExist) {
                return res.status(422).json({ error: "table already exist" })
            }


            const table = new Table({ tableName, password, cpassword });

            table.save().then(() => {
                res.status(201).json({ message: "table added" })
            }).catch((err) => {
                res.status(500).json({ error: "failed to registered" })
            })

        }).catch((err) => {
            console.log(err);
        })


    console.log(req.body);
    // res.json({message:req.body})
    // res.send('hello routr');
})
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
router.post('/addpizza', async (req, res) => {

    const { dishName, dishIngri, priceForSmall, priceForMedium, priceForLarge } = req.body

    if (!dishName || !dishIngri || !priceForSmall || !priceForMedium || !priceForLarge) {
        return res.status(404).json({ error: "please fill all fields" })
    }

    Pizza.findOne({ dishName: dishName })

        .then((dishExist) => {
            // console.log(dishExist);
            if (dishExist) {
                console.log("exist");
                return res.status(421).json({ error: "Dish already exist" })
            } else {





                const pizza = new Pizza({ dishName, dishIngri, priceForSmall, priceForMedium, priceForLarge });

                pizza.save().then(() => {
                    res.status(201).json({ message: "dish added" })
                }).catch((err) => {
                    res.status(500).json({ error: "failed to registered" })
                })
            }

        }).catch((err) => {
            console.log(err);
        })



});
// add special pizza to database
router.post('/addspecialpizza', async (req, res) => {

    const { dishName, dishIngri, priceForSmall, priceForMedium, priceForLarge } = req.body

    if (!dishName || !dishIngri || !priceForSmall || !priceForMedium || !priceForLarge) {
        return res.status(404).json({ error: "please fill all fields" })
    }

    Specialpizza.findOne({ dishName: dishName })

        .then((dishExist) => {
            // console.log(dishExist);
            if (dishExist) {
                console.log("exist");
                return res.status(421).json({ error: "Dish already exist" })
            } else {





                const specialPizza = new Specialpizza({ dishName, dishIngri, priceForSmall, priceForMedium, priceForLarge });

                specialPizza.save().then(() => {
                    res.status(201).json({ message: "dish added" })
                }).catch((err) => {
                    res.status(500).json({ error: "failed to registered" })
                })
            }

        }).catch((err) => {
            console.log(err);
        })



});
// add  drinks to database
router.post('/adddrink', uploadMulter,  validationDrink );
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