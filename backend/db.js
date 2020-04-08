const mongoose = require('mongoose');

const url =
  'mongodb+srv://rupali:rupali@cluster0-daupn.mongodb.net/games?retryWrites=true&w=majority';

const connectDatabase = async () => {
  await mongoose.connect(url, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  console.log(`Database connected`);
};
module.exports = connectDatabase;
