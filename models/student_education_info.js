/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_education_info', {
    student_education_info_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    student_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    education_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    institute_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    passout_year: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    admission_year: {
      type: "YEAR(4)",
      allowNull: false
    },
    student_result: {
      type: DataTypes.FLOAT,
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
    tableName: 'student_education_info'
  });
};
