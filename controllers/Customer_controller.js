var express = require("express");

var router = express.Router();
// edit burger model to match sequelize
var db = require("../models/");

// get route, edited to match sequelize
router.get("/api/customers", function(req, res) {
  // replace old function with sequelize function
  db.Customer.findAll()
    // use promise method to pass the burgers...
    .then(function(customerData) {
      res.json(customerData);
    });
});

// post route to create burgers
router.post("/api/customers", function(req, res) {
  // edited burger create to add in a burger_name
  db.Customer.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
    // pass the result of our call
    .then(function(result) {
      // log the result to our terminal/bash window
      res.json({ id: result.insertId });
    });
});

// // put route to devour a burger
// router.put("/api/burgers/:id", function(req, res) {
//   // update one of the burgers
//   db.Burger.update({
//     devoured: true
//   },
//   {
//     where: {
//       id: req.params.id
//     }
//   }
//   ).then(function(result) {
//     // Send back response and let page reload from .then in Ajax
//     res.sendStatus(200);
//   });
// });

module.exports = router;
