/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_regional_languages', {
    student_regional_language_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    student_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    regional_language: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'student_regional_languages'
  });
};
