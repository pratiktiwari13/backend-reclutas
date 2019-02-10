/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skill', {
    skill_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    skill_name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'skill',
      timestamps:false
  });
};
