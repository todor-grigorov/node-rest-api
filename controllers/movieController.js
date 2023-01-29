const router = require('express').Router();

router.post('/movie', (req, res) => {
    res.json({ ok: true });
});

module.exports = router;