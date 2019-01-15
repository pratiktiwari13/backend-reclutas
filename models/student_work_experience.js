/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_work_experience', {
    student_work_experience_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    student_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    letter_of_recomendation: {
      type: "MEDIUMBLOB",
      allowNull: true
    },
    work_role: {
      type: DataTypes.STRING(255),
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
    tableName: 'student_work_experience'
  });
};
