var express = require("express");

var router = express.Router();
// edit burger model to match sequelize
var db = require("../models/");

// get route, edited to match sequelize
router.get("/api/vendors", function(req, res) {
  // replace old function with sequelize function
  db.Vendor.findAll()
    // use promise method to pass the burgers...
    .then(function(vendorData) {
      res.json(vendorData);
    });
});

router.get("/api/vendors", function(req, res) {
  db.Vendor.findAll().then(function(vendorData) {
    res.json(vendorData);
  });
});

// post route to create burgers
router.post("/api/vendors", function(req, res) {
  // edited burger create to add in a burger_name
  db.Vendor.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    restaurant: req.body.restaurant,
    city: req.body.city
  })
    // pass the result of our call
    .then(function(result) {
      // log the result to our terminal/bash window
      res.json({ id: result.insertId });
    });
});

module.exports = router;