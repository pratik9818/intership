import React from 'react'
import {
  Link
} from "react-router-dom";
function Item({img, name, addcart, price}) {
  return (
    <div className='shadow-lg p-3 mb-5 bg-body rounded my-4'>
      <div className="card " style={{width:200, height:200 , margin:"60px 30px", textAlign:"center", border:"none"}} >
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{name} price: {price}$</h5>
              <Link to="/" class="btn btn-dark btn-sm my-4 " onClick={()=> addcart(name,img,price)}>Add to cart </Link>
            </div> 
          </div>
    </div>
  )
}

export default Item
