 import express from "express";
 import User from "../modles/User.js";
 import {body , validationResult} from "express-validator";
 import bcrypt from "bcryptjs";
 import jwt from "jsonwebtoken";
 import fetchuser from "../middleware/fetchuser.js"; 
const router = express.Router();

const JWT_SECRET=`YeahHer0Buddy@14`;

//Route 1 : create a user using: POST "api/auth/createuser" .Doesn't require AUTH 
 router.post('/createuser',[
   body('name','Enter a Valid name ').isLength({min:3}),
   body('password','Password must have atleast 5 characters').isLength({min:5}),
   body('email','Please Enter a Valid email').isEmail()

 ] ,async (req , res)=>{
  //if there is any error return bad req and print the error message
    let success = false;
    const error =validationResult(req);
    if(!error.isEmpty()){
      return res.status(400).json({ success ,errors: error.array()});
    }
    try{

      //check whether the user with this email already exists
      let user = await User.findOne({email:req.body.email})
      if(user){
        return res.status(400).json({ success ,error:"This email already exist"});
      }
      const salt= await bcrypt.genSalt(15);
      const secPass = await bcrypt.hash(req.body.password,salt);

      //create a new user 
      user = await User.create({
        name:req.body.name,
        password:secPass,
        email:req.body.email
      });
      const data = {
        user:{
          id:user.id
        }
      }
      success=true;
      const authToken = jwt.sign(data ,JWT_SECRET);
      res.json({success,authToken});
    }catch(error){
      console.error(error.message);
      res.status(500).send({success ,error:"Internal server error"});
    }
    
 })

 //Route 2 : Authenticate preexisting user using: POST "api/auth/login" .Doesn't require AUTH with email and password 
  router.post('/login',[
   body('password','Password must have atleast 5 characters').exists(),
   body('email','Please Enter a Valid email').isEmail()

 ] ,async (req , res)=>{
  let success=false;
     const error =validationResult(req);
    if(!error.isEmpty()){
      return res.status(400).json({success,errors: error.array()});
    }

    const{email,password}=req.body;
    try {
      let user = await User.findOne({email});
      if(!user){
        return res.status(500).send({success ,error:"Please try to login with correct credentials"});
      }
      const passwordCompare = await bcrypt.compare(password , user.password);//matching current password with the pre exist password of the user it will internally matches and handles all the hasesh and all , returns true and false
      if(!passwordCompare){
        return res.status(500).send({success ,error:"Please try to login with correct credentials"});
      }
      
        const data = {
        user:{
          id:user.id
        }
      }
      const authToken = jwt.sign(data ,JWT_SECRET);
      success=true;
      res.json({success ,authToken});

    } catch(error){
      console.error(error.message);
      res.status(500).send({success ,error:"Internal server error"});
    }
 })

 //Route 3 : Get logged in user Details : POST "api/auth/getuser" Login required
 router.post('/getuser', fetchuser ,async (req , res)=>{
 try {
  const userId = req.user.id;
  const user =await User.findById(userId).select("-password");
  res.send(user);
  
 } catch(error){
      console.error(error.message);
      res.status(500).send({error:"Internal server error"});
    }
  })
 
 export default router;