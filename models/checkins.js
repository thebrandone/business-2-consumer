module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("checkins", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 160]
            }
        },
        vendor:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 160]
            }
        }
    });
    return Customer;
  };