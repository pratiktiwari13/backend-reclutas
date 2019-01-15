/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news_like', {
    news_like_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    news_feed_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dislike: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'news_like'
  });
};
