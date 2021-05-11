const Events = require('../models/Events');


module.exports = {

    async store (req, res){
        const { title,describe,user_id,building_id,start_date_time, end_date_time} = req.body;
        const events = await Events.create({title,describe,user_id,building_id,start_date_time,end_date_time});
        return res.json(events);

    },
    async index (req, res){
        const { id} = req.params;
        const events = await Events.findOne({ where:{id}});
        return res.json(events);

    },
    async show (req, res){
        console.log('jjj')
        const events = await Events.findAll();
        if(!events){
            return res.status(400).send({error:'Nenhum evento cadastrado!'})
        }
        return res.json(events);

    },async delete (req, res){
        const { id} = req.params;
        console.log('jjj')
        
        const events = await Events.destroy({ where:{id}});
       
        return res.status(200).json({ msg: 'sucesso' });

    },async put (req, res){
        const { id} = req.params;
        console.log('jjj')
        const { title,describe,user_id,building_id,start_date_time, end_date_time} = req.body;
        const events = await Events.update({title,describe,user_id,building_id,start_date_time, end_date_time },{ where:{id}});
       
        return res.status(200).json({ msg: 'sucesso' });

    }
};