const { BreakfastValidation, BreakfastModel } = require('../Models/Breakfast');

const BreakfastGetData = async (req, res, next) => {
  try {
    const getdata = await BreakfastModel.find();
    res.status(200).send(getdata);
  } catch (error) {
    res.status(404).send(error.message);
  }
};


// post the Breakfast
const BreakfastPost = async (req, res, next) => {
  try {
    const { error } = BreakfastValidation(req.body)
    if (error) return res.status(400).send(error.message)
    const BreakfastPosting = new BreakfastModel(req.body)
    await BreakfastPosting.save()
    res.status(201).send({
      status: true,
      BreakfastPosting,
      message: 'succefully inserted '
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
};

module.exports = {
    BreakfastPost,
    BreakfastGetData

};