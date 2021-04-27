'use strict';



module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('events', { 
        id: {
          type: Sequelize.UUID,
    primaryKey: true,
          allowNull:false
        },
        title: {
          type:Sequelize.STRING,
          allowNull:false
        },
        describe: {
          type:Sequelize.STRING,
          allowNull:false
        },
        isVisible: {
          type:Sequelize.BOOLEAN,
          allowNull:false
        },
        userId:{
          type:Sequelize.STRING,
          allowNull:false
        },
        buildingId:{
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
 
      return queryInterface.dropTable('events');
  }
};
