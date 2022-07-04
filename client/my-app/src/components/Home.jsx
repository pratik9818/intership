import React from 'react'
import {product} from '../product/product.js'
import Item from './Item.jsx'
function Home({addcart}) {

  return (
    <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
      {
        product.map((dt)=>{
            return <Item price={dt.price} img={dt.url} name={dt.text} addcart={addcart}/>
        })
      }
    </div>
  )
}

export default Home
