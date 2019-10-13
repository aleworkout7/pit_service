const axios = require('axios');
const Psetup = require('../models/Psetup');

module.exports = {
    async index(req, res){
        const psetups = await Psetup.find();
        return res.json(psetups);
    },

    async store(req, res){
        const { molde, machine, input } = req.body;
        
        const psetup = await Psetup.create({
            molde,
            machine,
            input
        });

        return res.json(psetup);
    }
};