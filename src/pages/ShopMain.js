
import Shop from "../components/Shop"
import data from "../data"
import './ShopMain.css'



export default function ShopMain ({ item, handleClick }) {

   return(    
  <div className="all-fish-container">
  {
      data.map((item)=>(
          <Shop item={item} key={item.id} handleClick={handleClick}/>
      ))
  }
</div>
)
}