const express = require('express');
// const cors = require('./middlewares/cors');
const cors = require('cors');
const routes = require('./routes');

const port = 5000;
const app = express();

//#region Middlewares
app.use(cors());
//#endregion

app.get('/', (req, res) => {
    res.json({ message: 'It\s working!' });
});

app.use(routes);

app.listen(port, console.log.bind(console, `Server is listening on port ${port}`));