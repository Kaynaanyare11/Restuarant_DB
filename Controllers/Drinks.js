const { DrinksValidation, DrinksModel } = require('../Models/Drinks');

const DrinksGetData = async (req, res, next) => {
  try {
    const getdata = await DrinksModel.find();
    res.status(200).send(getdata);
  } catch (error) {
    res.status(404).send(error.message);
  }
};


// post the Drinks
const DrinksPost = async (req, res, next) => {
  try {
    const { error } = DrinksValidation(req.body)
    if (error) return res.status(400).send(error.message)
    const DrinksPosting = new DrinksModel(req.body)
    await DrinksPosting.save()
    res.status(201).send({
      status: true,
      DrinksPosting,
      message: 'succefully inserted '
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
};

module.exports = {
    DrinksPost,
    DrinksGetData

};