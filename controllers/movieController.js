const router = require("express").Router();
const Movie = require("../models/Movie");
const { isAuth } = require("../middlewares/auth");

router.get("/", isAuth, async (req, res) => {
  let movies = await Movie.find();

  res.json(movies);
});

router.post("/", isAuth, (req, res) => {
  console.log(req.body);

  let movie = new Movie(req.body);

  movie.save().then((createdMovie) => {
    res.status(201).json({ _id: createdMovie._id });
  });
});

module.exports = router;
