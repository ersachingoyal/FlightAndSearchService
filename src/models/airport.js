'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, {
        foreignKey: 'cityId',
        onDelete: 'CASCADE'  // this functionality will help to delete the airports too of the particular city , if we anyhow delete the city, so all the aiports belinging to that city will also be deleted using this property
      })
    }
  }
  Airport.init({
    name: {
      type: DataTypes.STRING ,
      allowNull: false
    },
    address: DataTypes.STRING,
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};