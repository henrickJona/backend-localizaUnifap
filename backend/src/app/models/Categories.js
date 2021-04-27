const { Model, DataTypes } = require('sequelize');

class Categories extends Model{
    static init(sequelize){
        super.init({
            title: DataTypes.STRING,
        }, {
            sequelize
        })
    }
   
}

module.exports = Categories;