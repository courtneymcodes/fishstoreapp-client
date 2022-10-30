import axios from "axios";
import { useEffect, useState } from 'react'


export default function OrderHistory(props) {
 
  const [pastOrders, setPastOrders] = useState([])

  //const url = "https://thefishshop.herokuapp.com/orders"

  const url = "http://localhost:3001/orders"

  useEffect(()=> {
    axios.get(url).then((response) => {
      setPastOrders(response.data)
      console.log(response.data)
    })
  },[])


  return ( 
  <>
    <h1>Order History</h1>
    {pastOrders.map((order, index) => {
          return (
            <div key={index}>
                <h3>{order.orderDate}</h3>
                <p>Total: {order.orderTotal}</p>
                <hr></hr>
            </div>
        )
        })}
 </>
  )
}
