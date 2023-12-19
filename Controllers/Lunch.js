const { LunchValidation, LunchModel } = require('../Models/Lunch');

const LunchGetData = async (req, res, next) => {
  try {
    const getdata = await LunchModel.find();
    res.status(200).send(getdata);
  } catch (error) {
    res.status(404).send(error.message);
  }
};


// post the Lunch
const LunchPost = async (req, res, next) => {
  try {
    const { error } = LunchValidation(req.body)
    if (error) return res.status(400).send(error.message)
    const LunchPosting = new LunchModel(req.body)
    await LunchPosting.save()
    res.status(201).send({
      status: true,
      LunchPosting,
      message: 'succefully inserted '
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
};

module.exports = {
    LunchPost,
    LunchGetData

};