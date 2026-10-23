
export const checkAdmin = (req,res,next) => {
    const userRole = req.headers["x-role"];
    console.log("userRole:", userRole);


    if(!userRole)
    {
        const error = new Error("Role is not defined");
        error.status = 400;
        return next(error);
    }

    if(userRole !== "admin")
    {
        const error = new Error("Unauthorized User");
        error.status = 401;
        return next(error);
    }

     next();
}