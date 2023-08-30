const router = require('express').Router();

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

module.exports = router;