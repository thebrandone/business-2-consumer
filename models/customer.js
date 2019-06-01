// Burger models

// The burger has a burger_name attribute of type DataTypes.String
// and a devoured attribute that is false by default

// module.exports = function(sequelize, DataTypes) {
//   var Burger = sequelize.define("Customer", {
//     burger_name: DataTypes.STRING,
//     devoured: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     }
//   });
//   return Burger;
// };

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