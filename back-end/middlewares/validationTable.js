const { Table } = require("../models/tableSchema")

module.exports = (req, res) => {
    console.log(req.body);
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
   
}