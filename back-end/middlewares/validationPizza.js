const { Pizza } = require('../models/tableSchema')

module.exports = async (req, res) => {
    console.log(req.body)

    console.log(req.file.filename);
    const { dishName, dishIngri, priceForSmall, priceForMedium, priceForLarge } = req.body;
    const dishImage = req.file.filename

    if (!dishName || !dishIngri || !priceForSmall || !priceForMedium || !priceForLarge || !dishImage) {
        return res.status(404).json({ error: "please fill all fields" })
    }

    Pizza.findOne({ dishName: dishName })

        .then((dishExist) => {
            // console.log(dishExist);
            if (dishExist) {
                console.log("exist");
                return res.status(421).json({ error: "Dish already exist" })
            } else {



                const pizza = new Pizza({ dishName, dishIngri, priceForSmall, priceForMedium, priceForLarge, dishImage });

                pizza.save().then(() => {
                    res.status(201).json({ message: "dish added" })
                }).catch((err) => {
                    res.status(500).json({ error: "failed to registered" })
                })
            }

        }).catch((err) => {
            console.log(err);
        });
}





