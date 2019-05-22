var db = require("../models");

module.exports = function (app) {

  app.get("/api/customers", function (req, res) {
    db.customer.findAll({}).then(function (customerData) {
      res.json(customerData);
    });
  });

  app.post("/api/customers", function (req, res) {
    console.log(req.body);

    db.customer.create({
     username:req.body.username,
     password:req.body.password,
     email: req.body.email,
     firstName: req.body.firstName,
     lastName: req.body.lastName
    }).then(function (customerData) {
      res.json(customerData);
    })
  });
}