const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    let authorizationHeader = req.get('Authorization');

    if (authorizationHeader) {
        let token = authorizationHeader.split(' ')[1];

        try {
           const decoded = jwt.verify(token, 'SOMESUPERSECRET');
           req.user = decoded;
        } catch (error) {
            console.error(error);            
        }
    }

    next();
};

const isAuth = (req, res, next) => {

};

module.exports = {
    isAuth,
    auth,
}