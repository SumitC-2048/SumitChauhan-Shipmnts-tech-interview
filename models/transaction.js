const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
//     "transaction_date": “2025-07-10”,
//   "warehouse_code": "W-01",
//   "products": [
//     {
//       "product_code": "P001",
//       "qty": 100,
//       "volume": 2.5,

    transaction_date: {
        type: Date,
        default: Date.now
    },
    warehouse_code: {
        type: String,
    },
    products: {
        type: [{}]
    }
});

const Transaction = mongoose.model('transaction',TransactionSchema);
module.exports = Transaction;

