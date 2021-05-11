const Users = require('../models/Users');
const authConfig = require("../../config/auth.json");
const EnviaEmail = require('../services/EnviaEmail.js')
/* import EnviaEmail from '../services/EnviaEmail' */
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 864000
  });
}

module.exports = {
  
    async store (req, res){
        const { email,password} = req.body;
        const user = await Users.findOne({where:{email}})
        if(!user){
            return res.status(400).send({error: 'Usuario não encontrado'})
        }
        if(!await bcrypt.compare(password, user.password)){
            return res.status(400).send({error: 'Senha invalida!'})
        }
        user.password = undefined;
        return res.send({
            user,
            token: generateToken({ id: user.id })
          });

    },async sendEmail(req,res){
      const {email} = req.params;
     
    
        const user = await Users.findOne({where:{email}})
        if(!user){
          return res.status(400).send({error: 'Email não encontrado'})
        }
        function generatePassword() {
          var length = 8,
              charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
              retVal = "";
          for (var i = 0, n = charset.length; i < length; ++i) {
              retVal += charset.charAt(Math.floor(Math.random() * n));
          }
          return retVal;
      }
      const newPassword = generatePassword();
      const hashedPassword = await bcrypt.hash(newPassword,12)
      const changePassword = await Users.update({password:hashedPassword},{where:{email}})
      
      const envia = await EnviaEmail.sendEmail(email,newPassword)
      return res.status(200).send({ok: 'Email envidao'})
              
      
    },async mudarSenha(req,res){
      const {id} = req.params;
      const {password,newPassword} = req.body;
     
    
        const user = await Users.findOne({where:{id}})
        if(!user){
          return res.status(400).send({error: 'Usuario não encontrado'})
        }
        if(!await bcrypt.compare(password, user.password)){
          return res.status(400).send({error: 'Senha invalida!'})
      }
       
  
      const hashedPassword = await bcrypt.hash(newPassword,12)
      const changePassword = await Users.update({password:hashedPassword},{where:{id}})
      
     
      return res.status(200).send({ok: 'Email envidao'})
              
      
    },
};