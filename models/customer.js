module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
      username: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1, 160]
          },
          primaryKey: true
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
      }
  });
  return Customer;
};