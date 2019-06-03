var express = require("express");

var router = express.Router();
// edit burger model to match sequelize
var db = require("../models/");

// get route, edited to match sequelize
router.get("/api/checkins", function(req, res) {
  // replace old function with sequelize function
  db.Checkins.findAll()
    .then(function(checkinData) {
      res.json(checkinData);
    });
});

// post route to create burgers
router.post("/api/checkins", function(req, res) {
  db.Checkins.create({
    username: req.body.username,
    vendor: req.body.vendor,
  })
    // pass the result of our call
    .then(function(result) {
      // log the result to our terminal/bash window
      res.json({ id: result.insertId });
    });
});

module.exports = router;