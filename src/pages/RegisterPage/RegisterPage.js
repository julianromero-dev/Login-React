import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulario = () => {
  return (
    <div className="bg-lightfire min-vh-100 d-flex justify-content-center align-items-center py-5">
      <div className="card shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Formulario</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="nombres" className="form-label">Nombres</label>
              <input type="text" className="form-control" id="nombres" placeholder="Ingresa tu nombre" />
            </div>
            <div className="mb-3">
              <label htmlFor="apellidos" className="form-label">Apellidos</label>
              <input type="text" className="form-control" id="apellidos" placeholder="Ingresa tu apellido" />
            </div>
            <div className="mb-3">
              <label htmlFor="fecha_nacimiento" className="form-label">Fecha de nacimiento</label>
              <input type="date" className="form-control" id="fecha_nacimiento" />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="inputPassword" placeholder="Contraseña" required />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Repetir contraseña</label>
              <input type="password" className="form-control" id="confirmPassword" placeholder="Repite tu contraseña" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">Número de teléfono</label>
              <input type="tel" className="form-control" id="telefono" placeholder="+57" />
            </div>
            <div className="mb-3">
              <label htmlFor="sexo" className="form-label">Sexo</label>
              <select className="form-select" id="sexo">
                <option defaultValue>Selecciona una opción</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Prefiero no decirlo</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="nacionalidad" className="form-label">Nacionalidad</label>
              <select className="form-select" id="nacionalidad">
                <option defaultValue>Selecciona tu nacionalidad</option>
                <option value="colombia">Colombia</option>
                <option value="argentina">Argentina</option>
                <option value="brasil">Brasil</option>
                <option value="usa">Estados Unidos</option>
                <option value="canada">Canadá</option>
                <option value="mexico">México</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
