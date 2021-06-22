const { TotalOrder, ReceptionOrder , KitchenOrder } = require("../models/tableSchema")

module.exports = async (req, res) => {
    console.log(req.body);

    const { tableName } = req.body
    KitchenOrder.findOne({tableNo: tableName })
    .then((kitchenOrderExist) =>{
        if (kitchenOrderExist) {
            return res.status(400).json({error: "your order is in process you cant generate bill now"})
            
        }else{

            ReceptionOrder.findOneAndDelete({ tableNo: tableName })
                .then((tableExist) => {
                    console.log(tableExist);
        
                    const { tableNo, total, time, date, totalOrder } = tableExist
        
                    const order = new TotalOrder({ tableNo, total, time, date, totalOrder })
        
                    order.save().then(() => {
                        console.log("order added");
                    }).catch((err) => {
                        console.log("order not added");
                    })
                }).catch((err) => {
                    console.log(err);
                })
        }
    })

}