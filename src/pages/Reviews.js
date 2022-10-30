import axios  from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Reviews.css"
//const BASE_URL=(process.env.REACT_APP_API_URL || "http://localhost:3001") + '/reviews' 

export default function Reviews (props) {
  
  const [reviewsList, setReviewsList] = useState([])

  const url = "https://thefishshop.herokuapp.com/reviews"

  useEffect(()=> {
    axios.get(url).then((response) => {
      setReviewsList(response.data)
      console.log(response.data)
    })
  },[])

  // useEffect(()=> {
  //   axios.get(BASE_URL).then((response) => {
  //     setReviewsList(response.data)
  //   })
  // }, [])
  
    return(
      <div className="reviews-list-container">
          <h1>Customer Reviews</h1>
          <Link to="/reviews/create"><button className="write-review">Write a customer review</button></Link>
          <hr></hr>
          {reviewsList.map((review) => {
          return (
            <div key={review.name}>
            <h4>{review.rating}</h4>
            <h4>{review.review}</h4>
            <h4>-{review.name}</h4>
            <hr></hr>
            </div>
        )
        })}
      </div>
    )
  }
        
    
    