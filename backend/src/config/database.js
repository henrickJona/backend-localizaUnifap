
var pg = require('pg');

pg.defaults.ssl = true;
module.exports = {
  /* 'postgres://rmsubgrhjhaefh:c2e98479f7d630d36544a4caaf55bac77e2c665616d628b1f5a1837acc672611@ec2-18-215-111-67.compute-1.amazonaws.com:5432/d29seue4u26p3r' */
  username: "wvdvmlemdvpkbo",
  password: "6c8bf4c5616240cd8ade894217883a6202bde0b53824365f049d71b13580dfb2",
  database: "d4co529bn2hmca",
  host: 'ec2-52-87-107-83.compute-1.amazonaws.com',
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