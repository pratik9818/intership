import mongoose from "mongoose";

const Signup_schema = new mongoose.Schema({
    name:{
    type:String,
    required:true,
   
    },
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
    
    const singup = mongoose.model("singup", Signup_schema)
    export default singup;