const mongoose = require('mongoose');

const Reference = mongoose.model('Reference', {
    label: { type: String, required: true, unique: true },
    category: String,
    quantity: String,
    price: String,
});

module.exports = Reference;
