const router = require("express").Router();
let users = require("../models/users.model");
router.get("/", (req, res) => {
  users
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});
router.post("/add", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const newUser = new users({ name, email, password });
  newUser
    .save()
    .then((data) => {
      res.json(data);
      res.json("user add!");
    })
    .catch((err) => {
      if (err) throw err;
    });
});

module.exports = router;
