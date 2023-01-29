const cors = (req, res, next) => {
    // res.setHeaders('Access-Control-Allow-Origin', 'http://localhost:3000, http://localhost:5000');
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers',
        'Content-Type, Authorization');

    next();
};

module.exports = cors;