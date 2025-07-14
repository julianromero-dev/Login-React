import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Deseas cerrar sesión?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        await signOut(auth);
        await Swal.fire({
          icon: 'success',
          title: 'Sesión cerrada',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error al cerrar sesión',
          text: error.message,
        });
      }
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <img src={`${process.env.PUBLIC_URL}/images.jpg`} alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
        <span className="navbar-brand">Ico</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link active">Inicio</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Perfil</span>
              </li>
            </ul>
            <button className="btn btn-outline-light" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>

      <div className="container mt-5 text-center">
        <h1>Bienvenido a mi página</h1>
      </div>
    </div>
  );
}

export default DashboardPage;