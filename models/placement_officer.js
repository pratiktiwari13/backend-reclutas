/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('placement_officer', {
    placement_officer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    placement_officer_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'placement_officer'
  });
};
