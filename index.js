const express = require('express');
// const cors = require('./middlewares/cors');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const port = 5000;
const app = express();

//#region Middlewares
app.use(cors());
app.use(express.json());
//#endregion

app.get('/', (req, res) => {
    res.json({ message: 'It\s working!' });
});

app.use(routes);

app.listen(port, console.log.bind(console, `Server is listening on port ${port}`));