/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faculty', {
    faculty_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    faculty_first_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    faculty_middle_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    faculty_last_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    faculty_designation: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    faculty_department: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    faculty_phone: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    faculty_photo: {
      type: "MEDIUMBLOB",
      allowNull: false
    },
    faculty_is_permanent: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    }
  }, {
    tableName: 'faculty'
  });
};
