import React,{useState} from 'react'

function Cart({name, img, price}) {
    const [quantity, setquantity] = useState(0)
    const [state, setstate] = useState(true)
    const increment = ()=>{
        setquantity(quantity + 1)
    }
    const decrement =()=>{
        setquantity(quantity - 1)
    }
    const changestate = ()=>{
      setstate(false)

        
    }
  return (
    <div>
        {state? 
      <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{dispaly:"flex", flexDirection:"row", alignItems:"center", width:400 ,margin:" 30px auto"}} >
      <img src={img} style={{width:100, height:100}} className="card-img-top" alt="add to cart something"/>
      <div className="card-body">
       <div>
       <h5 className="card-title">{name} </h5>
        <h5>price: {price}$</h5>  
     <div>
        Quantity:
     <button type="button" class="btn btn-dark mx-2 btn-sm"onClick={()=>increment()}>+</button>
     
     {quantity}
     <button type="button" class="btn btn-dark mx-2 btn-sm"onClick={()=>decrement()}>-</button>
     <button type="button" class="btn btn-danger mx-2 btn-sm" onClick={()=>changestate()}>delete</button>
     
     </div>
       </div>
      </div>
    </div>: <div class="alert alert-danger" role="alert">please, add too cart something</div>  
      }
    
    </div>
  )
}

export default Cart
