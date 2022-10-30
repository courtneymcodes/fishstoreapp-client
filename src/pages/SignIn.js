import { logIn } from '../utilities/users-service';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import "./SignIn.css"

export default function SignIn (props) {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
      })

  let navigate = useNavigate()

  const [errorState, setErrorState] = useState('')
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const payload = {
        username: formData.username,
        password: formData.password,
      }

      const user = await logIn(payload);
      props.setUser(user);

    } catch {
      setErrorState('Sign Up Failed - Try Again');
    }
    
    navigate('/cart')
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }


  return (
    <div className="signin-container">
        <h2>Sign In</h2>

        <form autoComplete="off" onSubmit={handleSubmit}>
            <div>
                <label>Enter your username:</label>
                <input 
                type="text" 
                name="username" 
                value={formData.username}
                placeholder="username"
                onChange={handleChange}
                required
                />
                
            </div>
            <div className="signin-password">
                <label htmlFor="password">Enter your password:</label>
                <input type="password" name="password" value={formData.password} placeholder="password" onChange={handleChange}></input>
            </div>
            <button className="signin-button" type="submit">Sign In</button>
        </form>
        <p className="error-message">{errorState}</p>
        <div className="to-signup-div">
            <h2>Don't have an account yet?</h2>
            <Link to="/signup"><button className="signin-button">Sign Up</button></Link>
        </div>

    </div>
  )
}




