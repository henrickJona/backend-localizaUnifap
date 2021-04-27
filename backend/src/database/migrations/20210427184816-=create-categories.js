'use strict';



module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('categories', { 
        id: {
          type: Sequelize.UUID,
    primaryKey: true,
          allowNull:false
        },
        title: {
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
 
      return queryInterface.dropTable('categories');
  }
};
