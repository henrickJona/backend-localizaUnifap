const Categories = require('../models/Categories');


module.exports = {

    async store (req, res){
        const { title} = req.body;
        console.log('passou')
        const categorie = await Categories.create({ title});
        console.log('passou2')

        return res.json(categorie);

    }
};