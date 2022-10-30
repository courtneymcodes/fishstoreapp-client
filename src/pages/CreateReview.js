import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateReview.css";

export default function CreateReview(props) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [headline, setHeadline] = useState("");
  const [review, setReview] = useState("");

  const navigate = useNavigate();

  const createReview = () => {
    Axios.post("http://localhost:3001/reviews", {
      name,
      rating,
      headline,
      review,
    }).then((response) => {
      navigate("/reviews");
    });
  };

  return (
    <div className="create-review-container">
      <h1>Write a review</h1>

      <form action="/reviews/create" method="POST">
        <div className="review-name-div">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
        </div>
        <div className="rating-div">
          <h2>How would you rate your experience?</h2>
          <input
            type="radio"
            name="rating"
            id="1star"
            value="1 Star"
            onChange={(event) => {
              setRating(event.target.value);
            }}
          ></input>
          <label htmlFor="1star">1 Star</label>
          <input
            type="radio"
            name="rating"
            id="2stars"
            value="2 Stars"
            onChange={(event) => {
              setRating(event.target.value);
            }}
          ></input>
          <label htmlFor="2star">2 Stars</label>
          <input
            type="radio"
            name="rating"
            id="3stars"
            value="3 Stars"
            onChange={(event) => {
              setRating(event.target.value);
            }}
          ></input>
          <label htmlFor="3stars">3 Stars</label>
          <input
            type="radio"
            name="rating"
            id="4stars"
            value="4 Stars"
            onChange={(event) => {
              setRating(event.target.value);
            }}
          ></input>
          <label htmlFor="4stars">4 Stars</label>
          <input
            type="radio"
            name="rating"
            id="5stars"
            value="5 Stars"
            onChange={(event) => {
              setRating(event.target.value);
            }}
          ></input>
          <label htmlFor="5stars" required>
            5 Stars
          </label>
        </div>
        <div className="headline-div">
          <label htmlFor="headline">Add a headline:</label>
          <input
            type="text"
            id="headline"
            name="headline"
            placeholder="Headline..."
            onChange={(event) => {
              setHeadline(event.target.value);
            }}
          ></input>
        </div>
        <div className="review-message-div">
          <label htmlFor="review">Add your review:</label>
          <textarea
            id="review"
            name="review"
            rows="10"
            cols="22"
            placeholder="Your review..."
            onChange={(event) => {
              setReview(event.target.value);
            }}
          ></textarea>
        </div>
        <button
          className="review-submit"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            createReview();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
