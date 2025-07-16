const responseFunction=require('../utils/responseFunction')

const authorizeRoles=(...allowedRoles)=>{
    return (req,res,next)=>{
        if(!allowedRoles.includes(req.userrole)){
             return responseFunction(res,403,"Access denied",null,false);
        }
        next();
    }
}

module.exports=authorizeRoles;