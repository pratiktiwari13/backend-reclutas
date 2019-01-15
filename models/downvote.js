/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('downvote', {
    downvotw_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    project_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    faculty_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    student_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'downvote'
  });
};
