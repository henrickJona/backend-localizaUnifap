
var pg = require('pg');

pg.defaults.ssl = true;
module.exports = {
  /* 'postgres://rmsubgrhjhaefh:c2e98479f7d630d36544a4caaf55bac77e2c665616d628b1f5a1837acc672611@ec2-18-215-111-67.compute-1.amazonaws.com:5432/d29seue4u26p3r' */
  username: "rmsubgrhjhaefh",
  password: "c2e98479f7d630d36544a4caaf55bac77e2c665616d628b1f5a1837acc672611",
  database: "d29seue4u26p3r",
  host: 'ec2-18-215-111-67.compute-1.amazonaws.com',
  url:process.env.DATABASE_URL,
  dialect: "postgres",
  ssl:true,
  dialectOptions: {
    ssl: {
      require:true,
      rejectUnauthorized: false,
        
    }

},
  define: {
    timestamps: true,
    underscored: true,
    
  },
  
};
/* module.exports = {
  username: "postgres",
  password: "Jonathan!1",
  database: "testeBackendLocalizaUnifap",
  host: "localhost",
  dialect: "postgres",
  dialectOptions: {
    rejectUnauthorized: false
  },
  define: {
    
    timestamps: true,
    underscored: true,
    
  }
}; */