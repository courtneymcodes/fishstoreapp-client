import './App.css';
import Header from "./components/Header"
import Nav from "./components/Nav"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ShopMain from "./pages/ShopMain"
import FishDetails from "./pages/FishDetails"
import About from "./pages/About"
import Reviews from "./pages/Reviews"
import CreateReview from "./pages/CreateReview"
import Contact from "./pages/Contact"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Cart from "./pages/Cart"
import Missing from "./pages/Missing"
import { useState } from 'react';
import CheckOut from './pages/CheckOut';
import CheckOutComplete from './pages/CheckOutComplete';
import { getUser} from './utilities/users-service';
import OrderHistory from './pages/OrderHistory';

function App() {

  const [user, setUser] = useState(getUser())
  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState(false)
  
  const [cost, setCost] = useState(0)
  const [tax, setTax] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClick = (item) => {
    let isPresent = false
    cart.forEach((product)=>{
      if (item.id === product.id)
      isPresent = true
    })
    if (isPresent){
      setWarning(true)
      setTimeout(()=>{
        setWarning(false)
       }, 2000)
       return
      }
    setCart([...cart, item])  
  }

  
  const handleChange = (item, num) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += num;
		
		if (tempArr[ind].volume === 0)
			tempArr[ind].volume = 1;
		setCart([...tempArr])
	}


  return (
    <div className="App">
    <Header length={cart.length} warning={warning} user={user} setUser={setUser}/>   
    <Nav />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/shop' element={<ShopMain handleClick={handleClick} />}/>
      <Route path='/shop/:fishName' element={<FishDetails handleClick={handleClick}/>} />
      <Route path='/about' element={<About />}/>
      <Route path='/reviews' element={<Reviews />}/>
      <Route path='/reviews/create' element={<CreateReview />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/signin' element={<SignIn user={user} setUser={setUser}/>}/>
      <Route path='/signup' element={<SignUp user={user} setUser={setUser} />} />
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} user={user} handleClick={handleClick} cost={cost} setCost={setCost} tax={tax} setTax={setTax} total={total} setTotal={setTotal}/>} />
      <Route path='/checkout' element={<CheckOut cart={cart} setCart={setCart} user={user} setUser={setUser} cost={cost} tax={tax} total={total} setCost={setCost} setTax={setTax} setTotal={setTotal} />} />
      <Route path='/checkout/complete' element={<CheckOutComplete />}/>
      <Route path='/orders' element={<OrderHistory />} />

      <Route path='*' element={<Missing />} /> 
    </Routes>
    </div>
  );
}

export default App;
