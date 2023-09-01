const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', (req, res) => {
    console.log(req.body);
    //TODO: Check if user exists

    let user = new User(req.body);

    user.save()
        .then(createdUser => {
            console.log(createdUser);
            res.status(201).json({_id: createdUser._id});
        })
});

router.post('/login', (req, res) => {
   const {username, password} = req.body;

    User.findOne({username, password})
        .then(user => {
            console.log(user);
            // GENARATE JSON TOKEN
            let token = jwt.sign({
                _id: user._id,
                username: user.username
            }, 'SOMESUPERSECRET', {expiresIn: '2h'});

            res.status(200).json({_id: user._id, username: user.username, token});
        })

})

module.exports = router;