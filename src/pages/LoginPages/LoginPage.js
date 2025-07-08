// src/components/Login.jsx
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría tu lógica de autenticación (fetch, axios, etc.)
    console.log('Intento de inicio de sesión:', { email, password });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-sm p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h4 className="text-center mb-4">Iniciar Sesión</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Acceder</button>
        </form>

        <div className="text-center mt-3">
          <small className="text-muted d-block">
            ¿Olvidaste tu contraseña?
            {/* Enlace a tu página de recuperación */}
            <a href="/forgot"> Recuperar</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;