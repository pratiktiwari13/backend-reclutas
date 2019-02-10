/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    user_token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_email_verified: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    is_fully_registered: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    is_first_login: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    user_profile_pic: {
      type: "LONGBLOB",
      allowNull: true
    },
    user_cover_pic: {
      type: "LONGBLOB",
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'users',
      timestamps:false
  });
};
