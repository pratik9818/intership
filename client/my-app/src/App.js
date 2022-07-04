import React, {useState} from 'react'
import Cart from './components/Cart'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  const [show, setshow] = useState(true)
  const [shows, setshows] = useState(false)

  const [cart, setcart] = useState([])
  const addcart = (name, img,price)=>{
   
   setshows(true)
    cart.push(name,img,price)
  console.log(cart);
  }

  
  return (
    <>
      <Navbar setshow={setshow}/>
      {show?  <Home addcart={addcart}/>: shows? <Cart name={cart[0]} img={cart[1]} price={cart[2]} />: <div class="alert alert-danger" role="alert">please, add too cart something</div>}
      
    </>
  )
}

export default App
