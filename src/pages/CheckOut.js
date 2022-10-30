
import { useNavigate } from "react-router-dom"
import SignIn from "./SignIn"
import './CheckOut.css'
import Axios from "axios"
import { useState } from "react"

export default function CheckOut ({cart, setCart, user, setUser, cost, tax, total}) {
  
  const getDate = () => {
    let date = new Date()
    let currentMonth = date.getMonth()
    let currentDay = date.getDate()
    let currentYear = date.getFullYear();
    let fullDate = `${currentMonth}/${currentDay}/${currentYear}`
    return fullDate
   }


     const [orderDate] = useState(getDate())
     //const [orderItems, setOrderItems] = useState({})
     const [orderTotal] = useState(total.toFixed(2).toString())

    let navigate = useNavigate()

    const saveOrder = () => {
      Axios.post("http://localhost:3001/orders", {
        orderDate,
        orderTotal,
      }).then((response) => {
        setCart([])
        navigate("/checkout/complete");
      });
    };


  return (
    <div>
        {
            user ?
         <div >
            <h1>Order Summary</h1>
            
            { cart.map(item=>{
              return (
                <div className="checkout-div" key={item.id}>
                        <p className="checkout-name">{item.name}</p>
                        <p>{item.volume} x ${item.price}</p>
                </div>
              )
            }) }
            
            <hr></hr>
            <h4>Subtotal: ${cost.toFixed(2)}</h4>
            <h4>Tax: ${tax.toFixed(2)}</h4>
            <h2>Order Total: ${total.toFixed(2)}</h2>
            <button onClick={(event)=>
              saveOrder()
            }>Place Order</button>

         </div>
        
         :
           <SignIn setUser={setUser}/>       
           }
    </div>
  )
}