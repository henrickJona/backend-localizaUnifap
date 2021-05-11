const { Model, DataTypes } = require('sequelize');

class Events extends Model{
    static init(sequelize){
        super.init({
            title: DataTypes.STRING,
            describe:DataTypes.STRING,
            start_date_time:DataTypes.STRING,
            end_date_time:DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Users, {foreignKey: 'user_id', as: 'user'});
        this.belongsTo(models.Buildings, {foreignKey: 'building_id', as: 'building'});
    }
}

module.exports = Events;