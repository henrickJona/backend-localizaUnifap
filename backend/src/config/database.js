
var pg = require('pg');
pg.defaults.ssl = true;
module.exports = {
  username: "fmcpsmkkasbhuk",
  password: "4a1709b13794eb8886276d829a0925be0bd5b019143f0c3f6e5a2640942e9561",
  database: "d9ckkmpm2aqv0i",
  host: "ec2-54-198-73-79.compute-1.amazonaws.com",
  dialect: "postgres",
  dialectOptions: {
    rejectUnauthorized: false
  },
  define: {
    timestamps: true,
    underscored: true,
    
  }
};
