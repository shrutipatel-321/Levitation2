// db.js
//password:HKIeUTaE81ypOvgP
//username:shrutipatel2688
//mongodb+srv://shrutipatel2688:<password>@cluster0.ehf3cvw.mongodb.net/?retryWrites=true&w=majority
// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
