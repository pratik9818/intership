import React ,{useState}from 'react'
import{Box, Button ,styled} from '@mui/material'
import LoginDialogue from "./LoginDialogue"

const ButtonBox = styled(Box)`
display:flex;
&>button, &>p, &>div{
    margin-right:40px;
    font-size:14px;

`

const LoginButton = styled(Button)`
padding:3px 23px;
margin-left:25px;
border-radius:none;
background-color:white;
color:blue;
font-weight:bold;
border-radius:2px;
box-shadow;nonw;
text-transform:none;
`

function CustomButton() {

  const [open, setopen] = useState(false)

  const toggle = ()=>{
    
      setopen(true)
    
  }
  return (
        <ButtonBox>
        {    
            <LoginButton variant='contained' onClick={toggle}>Login</LoginButton>  
         }
<LoginDialogue open={open} setopen={setopen}/>

        </ButtonBox>
  )
}

export default CustomButton
