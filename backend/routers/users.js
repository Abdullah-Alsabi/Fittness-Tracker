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
  const program1 = 0;
  const program2 = 0;
  const program3 = 0;
  const height = 0;
  const weight = 0;

  const newUser = new users({
    name,
    email,
    password,
    program1,
    program2,
    program3,
    height,
    weight,
  });
  newUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});
// ------------------------
router.put("/edit/:id", (req, res) => {
  users.findById(req.params.id).then((user) => {
    if (req.body.name != undefined) user.name = req.body.name;
    if (req.body.height != undefined) user.height = req.body.height;
    if (req.body.weight != undefined) user.weight = req.body.weight;
    if (req.body.program1 != undefined) user.program1 = req.body.program1;
    if (req.body.program2 != undefined) user.program2 = req.body.program2;
    if (req.body.program3 != undefined) user.program3 = req.body.program3;
    user
      .save()
      .then((data) => res.json(data))
      .catch((err) => {
        if (err) throw err;
      });
  });
});
module.exports = router;
