const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    let authorizationHeader = req.get('Authorization');

    if (authorizationHeader) {
        let token = authorizationHeader.split(' ')[1];

        jwt.verify(toke, 'SOMESUPERSECRET')
            .then(decoded => {
                req.user = decoded;
            })
    }

    next();
};

const isAuth = (req, res, next) => {

};

module.exports = {
    isAuth,
    auth,
}