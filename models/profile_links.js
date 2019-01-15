/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profile_links', {
    profile_link_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    profile_link_list_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    student_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    profile_link: {
      type: DataTypes.TEXT,
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
    tableName: 'profile_links'
  });
};
