module.exports = function(sequelize, DataTypes) {
    var Checkins = sequelize.define("Checkins", {
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
        },
    });
    return Checkins;
  };