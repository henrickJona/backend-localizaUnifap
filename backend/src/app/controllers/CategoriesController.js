const Categories = require('../models/Categories');


module.exports = {

    async store (req, res){
        const { title} = req.body;

        const categorie = await Categories.create({ title});


        return res.json(categorie);

    }
};