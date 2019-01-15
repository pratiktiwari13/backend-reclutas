/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('report_reason', {
    report_reason_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    reason_text: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'report_reason'
  });
};
