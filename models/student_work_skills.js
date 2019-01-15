/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_work_skills', {
    student_work_skill_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    student_work_experience_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    student_skill: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'student_work_skills'
  });
};
