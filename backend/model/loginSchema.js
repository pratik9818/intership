import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
   
   email:{
    type:String,
    require:true,
    unique:true
   },
   password:{
    type:String,
    require:true,
   }

    })
    
    const login = mongoose.model("login", loginSchema)
    export default login;