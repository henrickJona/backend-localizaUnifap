const Users = require('../models/Users');
const bcrypt = require('bcryptjs')


module.exports = {

    async store (req, res){
        const { name,email,password} = req.body;
        try{
            console.log('passous')
            if(await Users.findOne({where:{email}})){
                return res.status(400).send({error:'Este email já está cadastrado!'})
            }
            console.log('passou')
            const hashedPassword = await bcrypt.hash(password,12)
            const user = await Users.create({ name, email, password:hashedPassword});
            return res.json(user);
        }catch(err){
            return res.status(400).send({error:'falha no registro!'})
        }
        
    }
};