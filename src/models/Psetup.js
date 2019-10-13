const { Schema, model } = require('mongoose');

const PsetupSchema = new Schema({
    molde: {
        type: String,
        required: true,
    },
    machine: {
        type: String,
        required: true,
    },
    input: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = model('Psetup', PsetupSchema);