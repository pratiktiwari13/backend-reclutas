/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caste_category', {
    caste_category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    caste_category_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    tableName: 'caste_category'
  });
};
