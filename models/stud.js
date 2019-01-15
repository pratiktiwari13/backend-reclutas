/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stud', {
    stud_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    stud_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    stud_number: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    stud_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'stud'
  });
};
