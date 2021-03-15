const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const formidableMiddleware = require('express-formidable');

var app = express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(formidableMiddleware())

const contactRouter = require('./routes/contact')

app.use('/contact', contactRouter);

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`Server working on http://localhost:${port}/`);
})