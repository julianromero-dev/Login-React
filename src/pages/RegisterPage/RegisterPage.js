import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    sexo: '',
    telefono: '',
    email: '',
    password: '',
    confirmPassword: '',
    nacionalidad: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    for (const key in formData) {
      if (formData[key] === '') {
        Swal.fire("Campos incompletos", "Por favor llena todos los campos.", "warning");
        return;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire("Correo inválido", "Escribe un correo válido.", "error");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Swal.fire("Contraseña", "Las contraseñas no coinciden.", "error");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Guardar datos adicionales en Firestore
      await setDoc(doc(db, 'usuarios', user.uid), {
        nombres: formData.nombres,
        apellidos: formData.apellidos,
        fechaNacimiento: formData.fechaNacimiento,
        sexo: formData.sexo,
        telefono: formData.telefono,
        email: formData.email,
        estado: 'pendiente',  // Campo para activar o desactivar luego
        nacionalidad: formData.nacionalidad
      });

      Swal.fire("¡Registro exitoso!", "Usuario registrado correctamente.", "success").then(() => {
        window.location.href = "/";
      });
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Swal.fire("Error", "Este correo ya está registrado.", "error");
      } else {
        console.error(error);
        Swal.fire("Error", "No se pudo registrar el usuario.", "error");
      }
    }
  };

  return (
    <div className="bg-lightfire min-vh-100 d-flex justify-content-center align-items-center py-5">
      <div className="card shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Formulario</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombres" className="form-label">Nombres</label>
              <input 
                type="text" 
                className="form-control" 
                id="nombres" 
                name="nombres" 
                value={formData.nombres} 
                onChange={handleChange} 
                placeholder="Ingresa tu nombre" 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="apellidos" className="form-label">Apellidos</label>
              <input 
                type="text" 
                className="form-control" 
                id="apellidos" 
                name="apellidos" 
                value={formData.apellidos} 
                onChange={handleChange} 
                placeholder="Ingresa tu apellido" 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="fechaNacimiento" className="form-label">Fecha de nacimiento</label>
              <input 
                type="date" 
                className="form-control" 
                id="fechaNacimiento" 
                name="fechaNacimiento" 
                value={formData.fechaNacimiento} 
                onChange={handleChange} 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">Contraseña</label>
              <input 
                type="password" 
                className="form-control" 
                id="inputPassword" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                placeholder="Contraseña" 
                required 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Repetir contraseña</label>
              <input 
                type="password" 
                className="form-control" 
                id="confirmPassword" 
                name="confirmPassword" 
                value={formData.confirmPassword} 
                onChange={handleChange} 
                placeholder="Repite tu contraseña" 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="name@example.com" 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">Número de teléfono</label>
              <input 
                type="tel" 
                className="form-control" 
                id="telefono" 
                name="telefono" 
                value={formData.telefono} 
                onChange={handleChange} 
                placeholder="+57" 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="sexo" className="form-label">Sexo</label>
              <select 
                className="form-select" 
                id="sexo" 
                name="sexo" 
                value={formData.sexo} 
                onChange={handleChange}
              >
                <option value="">Selecciona una opción</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Prefiero no decirlo</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="nacionalidad" className="form-label">Nacionalidad</label>
              <select 
                className="form-select" 
                id="nacionalidad" 
                name="nacionalidad" 
                value={formData.nacionalidad} 
                onChange={handleChange}
              >
                <option value="">Selecciona tu nacionalidad</option>
                <option value="colombia">Colombia</option>
                <option value="argentina">Argentina</option>
                <option value="brasil">Brasil</option>
                <option value="usa">Estados Unidos</option>
                <option value="canada">Canadá</option>
                <option value="mexico">México</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
