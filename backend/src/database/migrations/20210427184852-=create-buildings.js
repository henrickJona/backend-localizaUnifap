'use strict';



module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('buildings', { 
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
                allowNull:false
        },
        name: {
          type:Sequelize.STRING,
          allowNull:false
        },
        latitude:{
          type:Sequelize.STRING,
          allowNull:false
        },longitude:{
          type:Sequelize.STRING,
          allowNull:false
        },
        describe:{
          type:Sequelize.STRING,
          allowNull:false
        },
        categoryId:{
          type:Sequelize.STRING,
          allowNull:false
        },
        createdAt:{
          type:Sequelize.DATE,
          allowNull:false
        },
        updatedAt:{
          type:Sequelize.DATE,
          allowNull:false
        }
        });
    
  },

  down: (queryInterface, Sequelize) => {
 
      return queryInterface.dropTable('buildings');
  }
};
