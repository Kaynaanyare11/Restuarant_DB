const mongoose = require('mongoose');
let joi = require('joi');
const DrinksSchema = new mongoose.Schema({
  DrinkName: {
    type: String,
    required: true,
    },
  Price:{
    type: Number,
    required: true,
    }

},{timestamps:true});

const DrinksModel = mongoose.model('Drinks', DrinksSchema);

// va;iadtion
function DrinksValidation(DrinksOBj) {
  let Drinksval = joi.object({
    DrinkName: joi.string().required(),
    Price: joi.number().required(),
  });
  return Drinksval.validate(DrinksOBj);
}

module.exports = {
  DrinksModel,
  DrinksValidation,
};