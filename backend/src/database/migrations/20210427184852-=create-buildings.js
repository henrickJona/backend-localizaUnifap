'use strict';



module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .then(()=>{
      return queryInterface.createTable('buildings', { 
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
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
        image:{
          type:Sequelize.STRING,
          allowNull:false
        },
        category_id:{
          type:Sequelize.UUID,
          allowNull:false
          ,references: { model: "categories", key: "id" },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
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
    }
    )
      
    
  },

  down: (queryInterface, Sequelize) => {
 
      return queryInterface.dropTable('buildings');
  }
};
