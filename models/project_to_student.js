/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project_to_student', {
    project_to_student_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    project_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    student_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    project_role: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'project_to_student'
  });
};
