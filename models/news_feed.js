/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news_feed', {
    news_feed_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    news_feed_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    news_feed_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    news_feed_media: {
      type: "LONGBLOB",
      allowNull: true
    },
    link_meta: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'news_feed'
  });
};
