const { Model, DataTypes } = require('sequelize');

class Buildings extends Model{
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
        this.belongsTo(models.Categories, {foreignKey: 'categoryId', as: 'category'});

    }
}

module.exports = Buildings;