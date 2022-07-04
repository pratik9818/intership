import axios from 'axios'

const url = 'http://localhost:5000'

export const authenticationlogin = async(data)=>{
    
    try {
           
        return await axios.post(`${url}/login`, data)  
    } catch (error) {
        console.log("some error in authentication", error);
    }
}