const { Icecream } = require('../models/tableSchema')

module.exports = async (req, res) => {
    console.log(req.body)

 
    const { dishName,  priceForRegular,priceForLarge,secureUrl  } = req.body;
    


    if (!dishName ||  !priceForRegular || ! priceForLarge || !secureUrl) {
        return res.status(404).json({ error: "please fill all fields" })
    }

    Icecream.findOne({ dishName: dishName })

        .then((dishExist) => {
          
            if (dishExist) {
                console.log("exist");
                return res.status(421).json({ error: "icecream already exist" })
            } else {



                const icecream = new Icecream({ dishName,priceForRegular , priceForLarge ,secureUrl});
                console.log(icecream);

                icecream.save().then(() => {
                    res.status(201).json({ message: "Icecream added" })
                }).catch((err) => {
                    
                    res.status(500).json({ error: "failed to registered" })
                })
            }

        }).catch((err) => {
            console.log(err);
        });
}