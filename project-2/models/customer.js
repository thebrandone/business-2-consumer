module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 160]
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 160]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 160]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 160]
            }
        },
        firstName:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 160]
            }
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 160]
            }
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
  