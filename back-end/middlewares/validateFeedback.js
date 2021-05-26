const {Feedback} = require("../models/tableSchema")

module.exports =  (req , res) =>{
    console.log(req.body);
    const { quality, service, comments } = req.body
    // console.log(order);

    if (!quality || !service) {
        return res.status(404).json({ error: "please rate us in stars" })
    }

        const feedback = new Feedback({quality, service, comments  });


                feedback.save().then(() => {
                    res.status(201).json({ message: "feedback added" })
                }).catch((err) => {
                    res.status(500).json({ error: "failed to add feedback" })
                })
            


        
    
}