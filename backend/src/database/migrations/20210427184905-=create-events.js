'use strict';



module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .then(()=>{
      return queryInterface.createTable('events', { 
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
        describe: {
          type:Sequelize.STRING,
          allowNull:false
        },
        user_id:{
          type:Sequelize.UUID,
          allowNull:false,
          references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        },
        building_id:{
          type:Sequelize.UUID,
          allowNull:false,
          references: { model: "buildings", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        },
        start_date_time:{
          type:Sequelize.DATE,
          allowNull:false
        },
        end_date_time:{
          type:Sequelize.DATE,
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
    }

    )
      
    
  },

  down: (queryInterface, Sequelize) => {
 
      return queryInterface.dropTable('events');
  }
};
