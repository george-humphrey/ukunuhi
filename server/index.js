const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3009;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});