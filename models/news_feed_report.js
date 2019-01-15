/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news_feed_report', {
    news_feed_report_id: {
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
    report_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'news_feed_report'
  });
};
