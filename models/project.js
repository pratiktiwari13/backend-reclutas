/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project', {
    project_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    project_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    project_faculty_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    project_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    project_start: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    project_end: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    project_link: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'project'
  });
};
