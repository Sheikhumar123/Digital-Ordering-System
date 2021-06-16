const { Burger } = require('../models/tableSchema')

module.exports = async (req, res) => {
    console.log(req.body)

 
    const { dishName, dishIngri, price ,secureUrl } = req.body;
    


    if (!dishName || !dishIngri || !price || !secureUrl) {
        return res.status(404).json({ error: "please fill all fields" })
    }

    Burger.findOne({ dishName: dishName })

        .then((dishExist) => {
          
            if (dishExist) {
                console.log("exist");
                return res.status(421).json({ error: "Burger already exist" })
            } else {



                const burger = new Burger({ dishName, dishIngri, price ,secureUrl});
                console.log(burger);

                burger.save().then(() => {
                    res.status(201).json({ message: "burger added" })
                }).catch((err) => {
                    
                    res.status(500).json({ error: "failed to registered" })
                })
            }

        }).catch((err) => {
            console.log(err);
        });
}





