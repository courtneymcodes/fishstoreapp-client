
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { signUp } from "../utilities/users-service";

export default function SignUp (props) {
  const [errorState, setErrorState] = useState("");

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirm: ""
  });

  const [disable] = useState(
    formData.password !== formData.confirm
  );

  //const navigate = useNavigate();
  //     navigate("/signin");
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        username: formData.username,
        password: formData.password,
      };
      const user = await signUp(payload);
      props.setUser(user);
    } catch {
      setErrorState("Sign Up Failed - Try Again");
    }
    navigate("/cart");
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="signup-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="signup-name">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            required
            onChange={handleChange}
          ></input>
        </div>
        <div className="signup-email">
          <label className="email-label" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label className="username-label" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="password-div">
          <label className="password-label" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label className="confirm-label" htmlFor="confirm">
            Confirm:
          </label>
          <input
            type="password"
            name="confirm"
            value={formData.confirm}
            required
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit" disabled={disable}>Sign Up</button>
      </form>
      <p className="error-message">{errorState}</p>
    </div>
  )
}

