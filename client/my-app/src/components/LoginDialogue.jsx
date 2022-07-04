import React, {useState} from 'react'
import {Dialog, Box, Typography,TextField,Button,styled } from '@mui/material';
import { authenticationsignup } from './service/Api';
import { authenticationlogin } from './service/LoginApi';


    const Container = styled(Box)`
    display:flex;
    flex-direction:row;
    `

    const RightBox = styled(Box)`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:250px;
    height:400px;
    justify-content:center;
    padding:0px 24px
    `
    const Image = styled(Box)`
    background: #707070 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width:250px;
    height:400px;
    padding: 22px 10px;
    & > p, & > h5 {
        color: white;
        font-weight: 600
    }
`;


    const Text = styled(TextField)`
    width:100%;
    magin:auto;
    `
    const LoginButton = styled(Button)`
    text-transform: none;
    background:	#00BFFF;
    color: black;
    height: 48px;
    border-radius: 2px;
    width:240px;
   box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
   margin-bottom:8px;
   margin-top:9px;
    `
    
    
   
    let  signupintialvalue = {
      name:"",
      email:"",
      password:""
      
    }
    
    let initialvalue={
      login:{
        view:"login",
        heading:"login",
        subheading:"get access to your order, wishlist and recomendation"
      },
    signup:{
      view:"signup",
      heading:"look like you're new here!",
        subheading:"signup with youe mobile number to get started"
    }
    }
    
    function LoginDialogue({open, setopen}) {
    const [account, setaccount] = useState(initialvalue.login)
    const [signup, Setsignup] = useState(signupintialvalue)
    
   
     
    const changetheme = ()=>{
      setaccount(initialvalue.signup)
    }
    const toogleclose = ()=>{
      setopen(false)
      setaccount(initialvalue.login)
    }
    const onInputChange = (e)=>{
      Setsignup({...signup, [e.target.name]: e.target.value});
      
    }
    const signupuser = async()=>{
     const res = await authenticationsignup(signup)
     
     toogleclose()
     
    
    }


    let  signupintialvalue1 = {
        email:"",
        password:""
      }
    
        const [login, Setlogin] = useState(signupintialvalue1)
        const onInputChangebutton = (e)=>{
            Setlogin({...login, [e.target.name]: e.target.value});
            // console.log(login);
          }
          const loginuser = async()=>{
            const res = await authenticationlogin(login)
           
          
            toogleclose()
            alert(`welcome back ${signup.name}`)
           }
  return (
   <Dialog open={open} onClose={toogleclose}>

    <Container>
        <Image>
     <Typography variant="h5">{account.heading}</Typography>
          <Typography style={{marginTop: 20}}> {account.subheading}</Typography>
      </Image>

   {account.view === "login"?
         <RightBox>
         <Text onChange={onInputChangebutton} name="email"variant="standard" label="enter email"/>
         <Text onChange={onInputChangebutton}  name="password"variant="standard" label="enter password"/>
        
         <LoginButton onClick={loginuser}>Login</LoginButton>
        
        
         <Button style={{marginTop:7, fontSize:13, color:"blue"}} onClick={()=>changetheme()}>new to flipkart? create an account</Button>
        
         </RightBox>  
         :
         <RightBox>
         
         
         <Text variant="standard" onChange={onInputChange}  name="name" label="ENTER USERNAME"/>
         <Text variant="standard"  onChange={onInputChange}  name="email" label="ENTER EMAIL"/>
         <Text variant="standard"  onChange={onInputChange}  name="password" label="ENTER PASSWORD"/>
        
         
         <LoginButton  onClick={signupuser}>signup</LoginButton>       
         </RightBox>
  }

    </Container>

   </Dialog>
  )
}

export default LoginDialogue
