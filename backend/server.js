import express from 'express';
import cors from 'cors';
const app = express();
import connection from "./database/dbs.js"
import router from "./router/signup.js"
import loginrouter from "./router/login.js"
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connection()
const port = process.env.port || 5000;
app.use('/', router)
app.use('/', loginrouter)


if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
    const path = require("path")
    app.get("*", (res,req)=>{
        res.sendFile(path.resolve(__dirname, "client","build","index.html"))
    })
}

try {
    app.listen(port,()=>{
        console.log(`working ${port}`)
    })
} catch (error) {
    console.log("this is error", error);
}

