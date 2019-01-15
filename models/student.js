/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student', {
    student_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    student_first_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    student_last_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    student_enrollment_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    student_branch: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    student_phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    student_gender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    student_dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    student_blood_group: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    student_mother_toungue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    student_religion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    student_sub_caste: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    student_nationality: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    student_cast_category: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    student_maritial_status: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    student_physically_challenged: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    student_place_of_birth: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    student_photo: {
      type: "MEDIUMBLOB",
      allowNull: true
    },
    student_signature_photo: {
      type: "MEDIUMBLOB",
      allowNull: true
    },
    student_address_flat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    student_address_street: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    student_address_city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    student_address_state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    student_address_pincode: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'student'
  });
};
