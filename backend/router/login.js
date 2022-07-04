// import login from "../model/loginSchema.js"
import singup from "../model/signupSchema.js"
import express from "express"
const loginrouter = express.Router()
loginrouter.post('/login', async (req,res)=>{
    try {
        
       
        const password = req.body.password
        console.log(password);
        const email = req.body.email
        console.log(email);
        const useremail= await singup.findOne({email:email})
        console.log(useremail);
       
        if(password===useremail.password){    
        res.json("ok")
       }else{
        res.json("password is not matching")
       }
   } catch (error) {
       res.status(400).send("please fill your details correctly")
   }
})

export default loginrouter;
