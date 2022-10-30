//import { useParams } from 'react-router-dom'
import './FishCard.css'


export default function FishDetails ( { item, handleClick}) { 
  const {name, img, price, description} = item
 // const params = useParams()

  // const currentFish = data.filter(fish => {
  //   return fish.name == params.fishName
  // }) 
   


    return (
      <div className="fish-div">
      <img className='product-details-img' src={img} alt='fish'></img>
      <h3 className="details-name">{name}</h3>
      <hr className="details-hr"></hr>
      <h3 className='details-price'>Price: ${price}</h3>
      <button className='add-to-cart' onClick={()=>handleClick(item)} >Add To Cart</button>
      <hr className="details-hr"></hr>
      <p className='details-description'>Description: {description}</p>  
    
   </div>

    )
}
