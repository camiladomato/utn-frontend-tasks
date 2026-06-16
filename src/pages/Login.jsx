import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Intentando iniciar sesión con:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Iniciar Sesión</h2>
        <p className="login-subtitle">Gestor de Tareas - UTN</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@correo.com"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required 
            />
          </div>

          <button type="submit" className="btn-login">
            Ingresar
          </button>
           <Link to="/register" style={{ display: 'block', textAlign: 'center', marginTop: '20px', color: 'var(--primary)', textDecoration: 'none', fontSize: 'var(--font-sm)', fontWeight: '500' }}>
          ¿No tenés cuenta? Registrate acá
        </Link>
        </form>
       
      </div>
      
    </div>
  );
}