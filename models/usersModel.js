const mongoose = require("mongoose");

const usersSchema=new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true,
    },
    role:{
        type:String,
        required:true,
        enum:["admin","user"]
    },
    cart: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product', // Refers to Product model
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            }
        }
    ]
}, { timestamps: true })

module.exports=mongoose.model('users',usersSchema);