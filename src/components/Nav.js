import {Link} from 'react-router-dom'
import './Nav.css'

export default function Nav (props) {
    return (
        <>
          <div className="nav-div">
            <img src='https://i.imgur.com/T8MuNuk.png' alt="logo" className="nav-img"></img>
            <nav className="nav">
                <Link to="/"><div className="nav-link">Home</div></Link>
                <Link to="/shop"><div className="nav-link">Shop</div></Link>
                <Link to="/about"><div className="nav-link">About Us</div></Link>
                <Link to="/reviews"><div className="nav-link">Customer Reviews</div></Link>
                <Link to="/contact"><div className="nav-link">Contact Us</div></Link>
            </nav>
            </div>
      <hr className='nav-hr'></hr>
      </>
    )
}
