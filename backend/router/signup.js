import singup from "../model/signupSchema.js"
import express from "express"
const router = express.Router()

router.post(`/signup`, async(req,res)=>{
    let  user = req.body
    console.log(user);
    let signupuser = await singup.create(user)
    console.log(signupuser); 
    res.status(201).json(signupuser)   
});

export default router;
