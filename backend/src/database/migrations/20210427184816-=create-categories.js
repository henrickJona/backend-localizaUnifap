'use strict';



module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .then(()=>{
      return queryInterface.createTable('categories', { 
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
    primaryKey: true,
          allowNull:false
        },
        title: {
          type:Sequelize.STRING,
          allowNull:false
        },
        created_at:{
          type:Sequelize.DATE,
          allowNull:false
        },
        updated_at:{
          type:Sequelize.DATE,
          allowNull:false
        }
        });
    })
     
    
  },

  down: (queryInterface, Sequelize) => {
 
      return queryInterface.dropTable('categories');
  }
};
