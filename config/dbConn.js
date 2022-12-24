const mongoose = require('mongoose');

const connectDB = async () => {
  mongoose.set('strictQuery', false); // Added by Bing
  try {
    await mongoose.connect(process.env.DATABASE_URI);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
