/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parents', {
    parent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    parent_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    parent_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    parent_phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    parent_occupation: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    parent_income: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    parent_gender: {
      type: DataTypes.STRING(255),
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
    tableName: 'parents'
  });
};
