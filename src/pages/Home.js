import { Link } from "react-router-dom";
import './Home.css'


  export default function Home (props) {
  
  
      return(
        <div className="home-div">
          <h1 className="welcome">Welcome to The Fish Shop</h1>
          <Link to="/shop"><img src="https://i.imgur.com/5XDSLkA.png" alt='shop now' className="shop-img"></img></Link>
        </div>
      )
  }