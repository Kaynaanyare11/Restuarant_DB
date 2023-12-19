const mongoose = require('mongoose');
let joi = require('joi');
const LunchSchema = new mongoose.Schema({
  FoodName: {
    type: String,
    required: true,
    },
  Price:{
    type: Number,
    required: true,
    }

},{timestamps:true});

const LunchModel = mongoose.model('Lunch', LunchSchema);

// va;iadtion
function LunchValidation(LunchOBj) {
  let Lunchval = joi.object({
    FoodName: joi.string().required(),
    Price: joi.number().required(),
  });
  return Lunchval.validate(LunchOBj);
}

module.exports = {
  LunchModel,
  LunchValidation,
};