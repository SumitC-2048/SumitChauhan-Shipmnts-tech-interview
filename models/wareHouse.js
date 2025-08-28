const mongoose = require('mongoose');

const WareHouseSchema = new mongoose.Schema({
    location_code: {
        type: String,
        unique: true,
    },
    parent_location_code: {
        type: String,  
    },
    type: {
        type: String
    }
});

const WareHouse = mongoose.model('Warehouse',WareHouseSchema);

module.exports = WareHouse;