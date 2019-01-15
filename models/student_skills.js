module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_skills', {
    student_skill_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    student_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    student_skill: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
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
    tableName: 'student_skills'
  });
};
