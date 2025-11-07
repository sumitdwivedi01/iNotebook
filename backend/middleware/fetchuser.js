import jwt from "jsonwebtoken";
const JWT_SECRET=`YeahHer0Buddy@14`;

const fetchuser =(req , res , next)=>{
    //Get the user from the jwt token and add a id to req object
    const token= req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please Authenticate using a valid token"});
    }
    try {
        const data=jwt.verify(token , JWT_SECRET);
        req.user=data.user;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({error:"Please Authenticate using a valid token"});
    }
    
}

export default fetchuser;