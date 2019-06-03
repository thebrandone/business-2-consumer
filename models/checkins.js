module.exports = function(sequelize, DataTypes) {
    var Checkins = sequelize.define("Checkins", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
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