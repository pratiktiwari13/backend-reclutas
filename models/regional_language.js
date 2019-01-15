/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regional_language', {
    regional_language_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    regional_lang_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    regional_lang_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'regional_language'
  });
};
