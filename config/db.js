const { connect } = require('http2');
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI,{});
    console.log('MongoDB connnected');
  }catch(err){
    console.log('Fail to connect to MongoDB');
  }
}

module.exports = connectDB;