import { useParams } from "react-router-dom"
import data from '../data'
import './ProductDetails.css'

export default function ProductDetails () {
    
  const params = useParams()

  const currentFish = data.filter(fish => {
    return fish.name == params.fishName
  }) 
   const { name, img, price, description } = currentFish[0]
   

    return(
      
      <div className="fish-div">
          <img className='product-details-img' src={img} alt='fish'></img>
          <h3 className="details-name">{name}</h3>
          <hr className="details-hr"></hr>
          <h3 className='details-price'>Price: {price}</h3>
          <button className='add-to-cart'>ADD TO CART</button>
          <hr className="details-hr"></hr>
          <p className='details-description'>Description: {description}</p>  
        
       </div>
      
    )
}