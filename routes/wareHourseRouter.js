const express = require('express');
const {
    create_location,
    getWareHouses
} = require('../controllers/wareHouseController');
// const {
//     addProduct
// } = require('../controllers/productController');

const router = express.Router();

// api 1
router.post('/create_location',create_location);
// api 2
router.get('/warehouse/tree',getWareHouses);
// api 3
// router.post('/transaction/receipt',addProduct);


module.exports = {
    wareHouseRouter: router
};
