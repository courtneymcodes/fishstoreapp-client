import { useParams } from "react-router-dom"
import data from '../data'
import FishCard from '../components/FishCard'
import './FishDetails.css'

export default function ProductDetails ({ item, handleClick }) {
    
  const params = useParams()

  const currentFish = data.filter(fish => {
    return fish.name === params.fishName
  }) 

    return (
      <section>
      {
          currentFish.map((item)=>(
              <FishCard item={item} key={item.id} handleClick={handleClick}/>
          ))
      }
    </section>
    )
    }