require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const paymentRoute = require('./routes/paymentRoute');

const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', paymentRoute);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
