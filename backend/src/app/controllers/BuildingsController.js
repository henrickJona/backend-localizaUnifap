const Buildings = require('../models/Buildings');


module.exports = {

    async store (req, res){
        const { name,latitude,longitude,describe,image,category_id} = req.body;
        const buildings = await Buildings.create({ name,latitude,longitude,describe,image,category_id});
        return res.json(buildings);

    },
    async index (req, res){
        const { id} = req.params
        const buildings = await Buildings.findOne({ where:{id}});
        return res.json(buildings);

    },
    async show (req, res){
        console.log('showbuildings')
        
        const buildings = await Buildings.findAll().then(()=>console.log('tudo clean')).catch((error)=>console.log(error))
        return res.status(200);

    }
};