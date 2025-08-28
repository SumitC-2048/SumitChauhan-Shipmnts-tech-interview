const mongoose = require('mongoose');

const ProductSchmea = new mongoose.Schema({
    // "product_code": "P001",
    //   "qty": 100,
    //   "volume": 2.5,
    //   "location_code": "W-01-BIN1",
    product_code: {
        type: String,
    },
    qty: {
        type: Number,
        // check for greater than 0 quantity
    },
    volume: {
        type: Number
    },
    location_code: {
        type: String
    },
    
});

const Product = mongoose.model('Warehouse',ProductSchmea);

module.exports = Product;
  