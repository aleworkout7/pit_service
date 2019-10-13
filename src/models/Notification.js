const { Schema, model } = require('mongoose');

const NotificationSchema = new Schema({
    collaborator: {
        type: String,
        required: true,
    },
    alert: {
        type: Boolean,
        required: true,
    },
    confirmation: { 
        type: Boolean,
        required: true,
    },
    machine: {
        type: String,
        required: true,
    },
    requirement: {
        type: String,
        required: true,
    },
    pedido: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = model('Notification', NotificationSchema);