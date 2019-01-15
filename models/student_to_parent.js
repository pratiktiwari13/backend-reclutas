/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_to_parent', {
    student_to_parent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    student_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    parent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'student_to_parent'
  });
};
