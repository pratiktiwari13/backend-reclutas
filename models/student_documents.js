/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_documents', {
    student_document_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    student_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    aadhar_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aadhar_image: {
      type: "MEDIUMBLOB",
      allowNull: true
    },
    pan_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pan_image: {
      type: "MEDIUMBLOB",
      allowNull: true
    },
    passport_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    passport_image: {
      type: "MEDIUMBLOB",
      allowNull: true
    },
    driving_licence_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    driving_licence_image: {
      type: "MEDIUMBLOB",
      allowNull: true
    },
    bank_account_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    bank_account_image: {
      type: "MEDIUMBLOB",
      allowNull: false
    },
    caste_certificate: {
      type: "MEDIUMBLOB",
      allowNull: true
    },
    birth_certificate: {
      type: "MEDIUMBLOB",
      allowNull: true
    },
    leaving_certificate: {
      type: "MEDIUMBLOB",
      allowNull: true
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
    tableName: 'student_documents'
  });
};
