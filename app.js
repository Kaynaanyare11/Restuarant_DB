var express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const app = express()
app.use(express.json())
app.use(cors());
const BreakfastRoute = require('./routes/BreakfastRoute')
const LunchRoute = require('./routes/LunchRoute')
const DrinksRoute = require('./routes/DrinksRoute')
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://employeepaymentuser:i8PQeZX1bVovuUPi@cluster0.wgnqycb.mongodb.net/Online_Restuarant_DB')
  .then(() => console.log('Connected!'));

app.get('/', (req, res) => {
  res.send("is working successfully !")
})

app.use('/Breakfast', BreakfastRoute)
app.use('/Lunch', LunchRoute)
app.use('/Drinks', DrinksRoute)

const Port = 6050
app.listen(Port);
console.log("Welcome", Port);
module.exports = app;
