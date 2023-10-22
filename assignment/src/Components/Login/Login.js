import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'plot123@gmail.com' && password === 'plot456') {
      navigate('/home');
    } else {
      alert('Invalid email or password. Try "plot123@gmail.com" and "plot456".');
    }
  };

  return (
    <> <Navbar />
    <div className="container mt-5">
     
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card">
            
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <img src="/images/Group 234.png" alt="Logo" width="300" height="50" />
              <div className="form-group mt-4 mb-4">
                <label >Email:</label>
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="btn bg-dark btn-primary m-3 p-2 btn-block border-0"
                onClick={handleLogin}
              >
                Login
              </button>
              <div className="mt-3 text-center">
                <div>Don't have an account?<span><a href="/register" className="text-info">Register </a></span></div>
              </div>
              <div className="mt-1 text-center">
                <a href="/forgot-password" className="text-info">Forgot password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
