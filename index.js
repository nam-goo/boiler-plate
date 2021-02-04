const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require('./models/User');
console.log(config);
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extend: true }));

//application/json
app.use(bodyParser.json());
const mongoose = require('mongoose');
//몽구스
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello world'));

app.post('/register', (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) {
      return res.json({ succenss: false, err });
    }
    return res.status(200).json({ succenss: true });
  });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
