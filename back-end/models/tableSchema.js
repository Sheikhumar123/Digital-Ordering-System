const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    tableName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }
});
const orderSchema = new mongoose.Schema({
    tableNo: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    totalOrder : [{
        type : Object,
        required: true
    }
    ]
});

const pizzaSchema = new mongoose.Schema({
    dishName: {
        type: String,
        required: true
    },
    dishIngri: {
        type: String,
        required: true
    },
    priceForSmall: {
        type: Number,
        required: true
    },
    priceForMedium: {
        type: Number,
        required: true
    },
    priceForLarge: {
        type: Number,
        required: true
    },
    dishImage: {
        type: String,
        required: true
    }
});

const drinkSchema = new mongoose.Schema({
    drinkName: {
        type: String,
        required: true
    },
    priceForRegular: {
        type: Number,
        required: true
    },
    priceForHalf: {
        type: Number,
        required: true
    },
    priceForLiter: {
        type: Number,
        required: true
    },
    drinkImage: {
        type: String,
        required: true
    }   
})


const Table = mongoose.model('TABLE', tableSchema);
const Pizza = mongoose.model('Pizza', pizzaSchema);
const Specialpizza = mongoose.model('SpecialPizza', pizzaSchema);
const Drink = mongoose.model('Drink', drinkSchema);
const KitchenOrder = mongoose.model('KitchenOrder', orderSchema);
const ReceptionOrder = mongoose.model('ReceptionenOrder', orderSchema);

module.exports = { Table, Pizza , Specialpizza , Drink , KitchenOrder ,ReceptionOrder};