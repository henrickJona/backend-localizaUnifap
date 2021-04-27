const { Model, DataTypes } = require('sequelize');

class Events extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            latitude:DataTypes.STRING,
            longitude: DataTypes.STRING,
            describe:DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Users, {foreignKey: 'userId', as: 'user'});
        this.belongsTo(models.Buildings, {foreignKey: 'buildingId', as: 'building'});
    }
}

module.exports = Events;