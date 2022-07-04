import React from 'react'
import {
  Link
} from "react-router-dom";
import CustomButton from './CustomButton';

function Navbar({setshow}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" onClick={(e)=>setshow(true)}>E-commerce</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ">
      
        <li className="nav-item"  >
          <Link className="nav-link active" aria-current="page" to="/cart" onClick={()=>setshow(false)}><ion-icon size="large" name="cart-outline"></ion-icon></Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login"><CustomButton/></Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
