const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    stock: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    category: { type: String, required: true },
    file: { 
        data: Buffer, 
        contentType: String 
    }
}, { timestamps: true });

module.exports = mongoose.model('products', productsSchema);
