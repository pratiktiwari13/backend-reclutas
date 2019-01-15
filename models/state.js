/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('state', {
    state_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    state_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    state_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'state'
  });
};
