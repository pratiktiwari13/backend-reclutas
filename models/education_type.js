/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('education_type', {
    education_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    education_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'education_type'
  });
};
