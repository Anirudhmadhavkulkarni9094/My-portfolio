// Login.js
import React, { useState } from 'react';
import '../Resources/StyleSheet/Login.css';

function Login({ authorize}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === "Anirudhkulkarni9094@gmail.com" && password === "Anirudh9094") {
      authorize();
    
    }
  };

  return (
    <div className='form'>
      <form>
        <div className='form_comp'>
          <label>Email</label>
          <input type='text' onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className='form_comp'>
          <label>Password</label>
          <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
      </form>
      <button className='btn btn-primary' onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
