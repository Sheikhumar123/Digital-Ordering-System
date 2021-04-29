const {Drink} = require("../models/tableSchema")

module.exports = async (req, res) => {
    // req.f
const image = req.file 
console.log(req.body.drinkName);
    const { drinkName, priceForRegular, priceForHalf, priceForLiter } = req.body

    if (!drinkName || !priceForRegular || !priceForHalf || !priceForLiter) {
        return res.status(404).json({ error: "please fill all fields" })
    }

    Drink.findOne({ drinkName: drinkName })

        .then((drinkExist) => {
            // console.log(dishExist);
            if (drinkExist) {
                console.log("exist");
                return res.status(421).json({ error: "drink already exist" })
            } else {





                const drink = new Drink({ drinkName, priceForRegular, priceForHalf, priceForLiter  , image});

                drink.save().then(() => {
                    res.status(201).json({ message: "drink added" })
                }).catch((err) => {
                    res.status(500).json({ error: "failed to registered" })
                })
            }

        }).catch((err) => {
            console.log(err);
        })

    }
