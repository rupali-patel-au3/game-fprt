const express = require('express');
const cors = require('cors');

const app = express();
const Game = require('./model');

const connectDatabase = require('./db');

app.use(cors());

app.get('/games', async (req, res) => {
  try {
    const searchText = req.query.text;
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 30;
    const startIndex = (page - 1) * limit;
    const total = await Game.countDocuments(); // total count of documents
    const regex = new RegExp(searchText, 'gi');
    let query;
    if (searchText) {
      query = Game.find({ Name: { $regex: regex } })
        .skip(startIndex)
        .limit(limit);
    } else {
      query = Game.find().skip(startIndex).limit(limit);
    }

    const data = await query;

    return res.json({
      totalPaginationNumber: Math.round(total / limit),
      data,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      error: error.message,
    });
  }
});

connectDatabase();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
