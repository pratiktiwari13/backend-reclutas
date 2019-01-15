/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branch', {
    branch_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    branch_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'branch'
  });
};
