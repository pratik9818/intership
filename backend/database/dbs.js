import mongoose from "mongoose";

const connection = async()=>{
    const URL = "mongodb+srv://pratik:sKrZednXjJ0aDqmP@intership-project.kxfkzbc.mongodb.net/?retryWrites=true&w=majority"
    try {
    await mongoose.connect(URL, {useUnifiedTopology:true , useNewUrlParser:true,})
        console.log("sucessfull");
    } catch (error) {
        console.log('error while connecting with the database', error.message);
    }
}
export default connection
