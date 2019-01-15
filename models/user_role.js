/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_role', {
    user_role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'user_role'
  });
};
