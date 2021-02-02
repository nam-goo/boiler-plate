const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
//몽구스
mongoose
  .connect(
    'mongodb+srv://namgoo:abcd1234@boilerplate.7tlvd.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello world'));

app.listen(port, () => console.log(`listening on port ${port}!`));
