const Users = require('../models/Users');



module.exports = {

    async store (req, res){
        const { name,email,password} = req.body;

        const user = await Users.create({ name, email,password});


        return res.json(user);

    }
};