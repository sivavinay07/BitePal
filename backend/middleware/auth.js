import jwt from "jsonwebtoken";

const authMiddleware = async (req,res,next) => {
    const {token} = req.headers;
    if (!token) {
        return res.json({success:false,message:"Not Authorized Login Again"});
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        // ensure req.body exists (for POST routes)
        if (!req.body) req.body = {}; 
        req.userId = token_decode.id;  // better practice
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error verifying token"});
    }
}

export default authMiddleware;