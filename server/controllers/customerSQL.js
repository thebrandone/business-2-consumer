var express = require("express");
var router = express.Router();
var db = require("../models");



  router.get("/api/customers", function (req, res) {
    db.customer.findAll({}).then(function (customerData) {
      console.log("hello")
      res.json(customerData);
    });
  });
  router.post("/api/customers", function (req, res) {
    // console.log(req.body);

    db.customer.create({
     username:req.body.username,
     password:req.body.password,
     email: req.body.email,
     customer_first: req.body.firstName,
     customer_last: req.body.lastName
    }).then(function (customerData) {
      res.json({ id: customerData.insertId });
    })
  });
  module.exports = router;