import {Link} from 'react-router-dom'
import './Header.css'

export default function Header ({ user, setUser, length, warning }) {

    const handleLogOut = () => {
        localStorage.setItem('token', '' )
        setUser(null)
    }

    return (
        <>
        <div className="header-links">
            <Link to="/signin"><button className="header-buttons">Sign In</button></Link>
            { user && <button className="header-buttons" onClick={handleLogOut}>Log Out</button> }
            <Link to="/cart"><img src="https://i.imgur.com/5A8AKgI.png" className="cart-icon-img" alt="cart"></img></Link>  
            <span className='cart-num'>{length}</span>  
           <br></br>
        </div>
           {
            warning && <div className="warning">Item is already in your cart</div>
           }
          

        </>
    )
}
