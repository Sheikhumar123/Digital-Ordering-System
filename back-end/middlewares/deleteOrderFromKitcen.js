const { KitchenOrder } = require("../models/tableSchema")

module.exports = async (req, res) => {
    console.log(req.body);

    const { tableName } = req.body
    KitchenOrder.findOneAndDelete({tableNo: tableName })
    .then((kitchenOrderExist) =>{
        if (kitchenOrderExist) {
            return res.status(202).json({message: "send notification to reception"})
            
        }else{

            return res.status(400).json({error: "not deleted"})
           
        }
    })

}