const express=require('express');
const router=express.Router();
const productsSchema=require('../models/productsModel');
const responseFunction=require('../utils/responseFunction');
const multer  = require('multer')
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });
const isLoggedIn=require('../middlewares/isLoggedIn')
const authorizeRoles=require("../middlewares/roleCheck");



router.post('/addproducts',isLoggedIn,authorizeRoles("admin"),upload.single('file'),async(req,res)=>{
    try{
    const {name,price,description,stock,discount,category}=req.body;
    const file = req.file;
        if(!file){
            return responseFunction(res,400,"Please select a file",null,false);
        }


    const product=new productsSchema({
        name,
        price,
        file:{
            data: file.buffer,
            contentType: file.mimetype
        },
        description,
        stock,
        discount,
        category
    })

    await product.save();
    return responseFunction(res,200,"Product created successfully",null,true);
}
catch(err){
    return responseFunction(res,500,"Internal server error",null,false);
}

    
})

module.exports = router;