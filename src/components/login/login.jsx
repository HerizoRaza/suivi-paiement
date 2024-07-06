import React,{ useState } from 'react';
import './login.module.css'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Logique de soumission du formulaire ici
      console.log('Email:', email);
      console.log('Password:', password);
    };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;