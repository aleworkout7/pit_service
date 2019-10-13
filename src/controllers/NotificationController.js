const axios = require('axios');
const Notification = require('../models/Notification');

module.exports = {
    async index(req, res){
        const notifications = await Notification.find();
        return res.json(notifications);
    },

    async store(req, res){
        const { 
            collaborator,
            alert,
            confirmation,
            machine,
            requirement,
            pedido 
        } = req.body;
        
        const notification = await Notification.create({
            collaborator,
            alert,
            confirmation,
            machine,
            requirement,
            pedido,
        });

        return res.json(notification);
    }
};