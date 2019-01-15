/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project_snapshots', {
    project_snapshots_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    project_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    project_snapshot: {
      type: "MEDIUMBLOB",
      allowNull: false
    }
  }, {
    tableName: 'project_snapshots'
  });
};
