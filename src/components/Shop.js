import { Link } from 'react-router-dom'
import './Shop.css'

export default function Shop ( {item, handleClick }) { 
    const {img, name, price} = item
  
    return (
        <div className="all-fish">
               <Link to={`/shop/${name}`}>
               <img className='fish-list-img' src={img} alt='fish'></img>
               <h3 className="name">Name: {name}</h3>
               <h3 className='price'>Price: ${price}</h3>
               </Link>
               <button className="all-fish-button"onClick={()=>handleClick(item)} >Add To Cart</button>
        </div>
    )
}

