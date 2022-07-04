import axios from 'axios'

const url = 'http://localhost:5000'
export const authenticationsignup = async(data)=>{
    
    // console.log(data);
   
    try {

        alert(`welcome to e-commerce website  ${data.name}`)
        return await axios.post(`${url}/signup`, data)  
        
       
    } 
    catch (error) {
        console.log("some error in authentication", error);
    }
}