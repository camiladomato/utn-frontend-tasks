import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registrando usuario:', { name, email, password });

  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Crear Cuenta</h2>
        <p className="register-subtitle">Registrate para gestionar tus tareas de UTN</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre Completo</label>
            <input 
              type="text" 
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              required 
            />
          </div>

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
              placeholder="Mínimo 6 caracteres"
              required 
            />
          </div>

          <button type="submit" className="btn-register">
            Registrarse
          </button>
        </form>

        <Link to="/login" className="link-to-login">
          ¿Ya tenés cuenta? Iniciá sesión
        </Link>
      </div>
    </div>
  );
}