const { KitchenOrder } = require('../models/tableSchema') 

module.exports = async (req, res) => {

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
                // const receptionorder = new ReceptionOrder({ tableNo, total, totalOrder });

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



}