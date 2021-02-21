const mongoose = require('mongoose');
// Connect to db
const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/f8_courses_dev', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
    console.log('Conect to db successfully');
  } catch (error) {
    console.log(error);
  }
};


module.exports = { connect }