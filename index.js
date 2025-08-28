const express = require('express');
const connectDB = require('./config/db');
const {wareHouseRouter} = require('./routes/wareHourseRouter');
const bodyParser = require('body-parser')
const app= express();

connectDB();

app.use(bodyParser.json()) // for parsing application/json

app.use('/api',wareHouseRouter);

app.listen(process.env.PORT,() => {
    console.log('Server running on localhost:',process.env.PORT);
});