const mongoose = require('mongoose');
let joi = require('joi');
const BreakfastSchema = new mongoose.Schema({
  FoodName: {
    type: String,
    required: true,
    },
  Price:{
    type: Number,
    required: true,
    }

},{timestamps:true});

const BreakfastModel = mongoose.model('Breakfast', BreakfastSchema);

// va;iadtion
function BreakfastValidation(BreakfastOBj) {
  let Breakfastval = joi.object({
    FoodName: joi.string().required(),
    Price: joi.number().required(),
  });
  return Breakfastval.validate(BreakfastOBj);
}

module.exports = {
  BreakfastModel,
  BreakfastValidation,
};