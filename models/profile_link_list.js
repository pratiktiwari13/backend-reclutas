/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profile_link_list', {
    profile_link_list_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    profile_link_list_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    profile_link_list_icon: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'profile_link_list'
  });
};
