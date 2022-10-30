import "./Cart.css";
import { useEffect} from "react";
import { Link } from "react-router-dom";


export default function Cart ({  user, cart, setCart, handleChange, handleClick, cost, setCost, tax, setTax, total, setTotal }) {

    const calcCost = ()=>{
      let amt = 0;
      cart.map((item)=>(
          amt += item.volume * item.price
      ))
      setCost(amt);
  }

  const calcTax = ()=>{
    let amt = 0;
    cart.map((item)=>(
        amt += (item.volume * item.price) *.06
    ))
    setTax(amt);
}

const calcTotal = ()=>{
    let amt = 0;
    cart.map((item)=>(
        amt += (item.volume * item.price) + (item.volume * item.price) *.06
    ))
    setTotal(amt);
}
 

    const handleRemove = (id) =>{
      
      const itemsLeft = cart.filter(item =>{
        return item.id !== id
      })
      setCart(itemsLeft)
    } 
    
    useEffect(()=>{
      calcCost()
      calcTax()
      calcTotal()
  })


  if (cart.length !== 0) {
    return (
      <>
 
   { user && <div className="cart-user-div"><h1 className="cart-hello">Hello, {user?.firstName}</h1><Link to="/orders" className="order-history-link">Order History</Link></div>  }
   

     {
  cart.map((item, index)=>{
    return (

        <div key={index} className="cart-item-container">
          <img className="cart-img" src={item.img} alt={item.name}></img>
          <h3 className="cart-name">{item.name}</h3>

          <span className="cart-volume">{item.volume} x ${item.price}</span>

          <span className="inc-dec">
            <button onClick={()=>handleChange(item, +1)}> + </button>
            <button onClick={()=>handleChange(item, -1)}> - </button> 
          </span>

        
          <img src="https://i.imgur.com/ZtCbRS5.png" alt="fish" className="remove" onClick={()=>handleRemove(item.id)}></img>

          <hr className="cart-hr"></hr>

       
      </div>
    )     
    })}

    <p>Subtotal: ${cost.toFixed(2)}</p>
    <p>tax: ${tax.toFixed(2)}</p>
    
    <h2>Total: ${total.toFixed(2)}</h2>
   <Link to="/checkout"><button>CheckOut</button></Link> 

   
   </>
    )
  }


  if(cart.length === 0) {
    return (
     <>

{ user && <div className="cart-user-div"><h1 className="cart-hello">Hello, {user?.firstName}</h1><Link to="/orders" className="order-history-link">Order History</Link></div>  }
     
    <h3>Your cart is empty. Add some items to your cart.</h3>
    <Link to="/shop"><button>Shop</button></Link>

   
    </>

    )  
     }

}
