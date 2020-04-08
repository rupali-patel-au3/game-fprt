const mongoose = require('mongoose');
const data = require('./data');

const Games = require('./model');

const url =
  'mongodb+srv://rupali:rupali@cluster0-daupn.mongodb.net/games?retryWrites=true&w=majority';

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const importDt = async () => {
  try {
    await Games.create(data);
    console.log('Imported');
  } catch (error) {
    console.log(error.message);
  }
};

importDt();
