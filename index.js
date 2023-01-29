const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('It\s working!');
});

app.listen(port, console.log.bind(console, `Server is listening on port ${port}`));