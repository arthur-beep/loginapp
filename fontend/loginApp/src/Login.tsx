import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import Validation from './LoginValidation'
import axios from "axios";

function Login() {

  const [inputs, setInputs] = useState({
    email:'',
    password:'',
});

const [errors, setErrors] = useState({})
const navigate = useNavigate();

const handleInput =(event) => {
    setInputs(prev => ({...prev, [event.target.name]: [event.target.value]}))
}

const handleSubmit =(event) => {
    event.preventDefault();
    setErrors(Validation(inputs));
    if(errors.email ==="" && errors.password === "") {
      axios.post('http://localhost:5000/Login', inputs)
      .then(res => { 
        if(res.data === "Success") {
          navigate('./Home');
        }else {
          alert("No record existed");
        }
    })
      .catch(err => console.log(err));
    }
    
}
    
return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
      <form action='' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="mb-3">
          <label><strong>Email address</strong></label>
          <input
            type="email"
            name='email'
            onChange={handleInput}
            className="form-control round-0"
            placeholder="Enter email"
          />
          {errors.email && <span className='text-danger'>{errors.email}</span>}
        
        </div>
        <div className="mb-3">
        <label><strong>Password</strong></label>
          <input
            type="password"
            name='password'
            onChange={handleInput}
            className="form-control"
            placeholder="Enter password"
          />
          {errors.password && <span className='text-danger'>{errors.password}</span>}
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </div>
        <p>You agree to our terms and conditions</p>
        <Link to='/Signup' className='btn-btn-default border w-100 bg-light rounded-0'>Create Account</Link>
        
      </form>
      </div>
      </div>
  )
}

export default Login;