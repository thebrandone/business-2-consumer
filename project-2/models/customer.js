module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: {

        },
        email: {

        },
        city: {

        },
        restaurant: {

        },
        visits: {

        },
        review: {
            
        }
    });
    return Customer;
  };
  