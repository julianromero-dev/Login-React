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
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
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
                <a className="nav-link" href='/users'>Users </a>
              </li>
            </ul>
            <button className="btn btn-outline-light" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>

        <div id="carouselExampleCaptions" className="carousel slide" style={{maxWidth: 900, margin: 'auto'}}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/51900/lamborghini-aventador_svj-2019-1600-02.jpg?resize=640:*" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/revuelto/og.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://media.cnn.com/api/v1/images/stellar/prod/190903111552-01-lamborghini-sian.jpg?q=w_1110,c_fill" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      
    
  );
}

export default DashboardPage;