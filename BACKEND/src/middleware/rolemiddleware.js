

const isAuthorize = (...roles) => {
   
    return (req , res , next) =>{
        if(!roles.include(req.user.role))
        {
            return res.status(403).json({message : "access denied"});
        };

        next();
    };
};

export default isAuthorize ;