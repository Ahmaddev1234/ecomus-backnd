const responseFunction = (res, statusCode, message, data = null,success=false) => {
    res.status(statusCode).json({
        success,
        message,
        data
    });
};

module.exports=responseFunction;
