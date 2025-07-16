const jwt = require('jsonwebtoken');
const responseFunction=require('../utils/responseFunction')

function checkAuth(req, res, next) {
    const token = req.cookies.token;
    
    if (!token) {
        return responseFunction(res, 400, "Please login to continue", null, false);
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return responseFunction(res, 400, "Please login to continue", null, false);
        }
        
        req.userid = decoded.id; 
        req.userrole = decoded.role; 
        next();
    });
}

module.exports = checkAuth;
