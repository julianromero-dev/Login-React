import React from 'react';
import Swal from 'sweetalert2';
import { auth, googleProvider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

function LoginPage() {
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "¡BIENVENIDO!",
          text: `Sesión iniciada con Google: ${user.email}`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          window.location.href = "/dashboard";
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Error", "No se pudo iniciar sesión con Google.", "error");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg rounded">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>

              <form id="loginForm">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password" placeholder="Contraseña" required />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Ingresar</button>
                </div>

                <div className="mt-3">
                  <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="btn btn-outline-success w-100 d-flex align-items-center justify-content-center gap-2"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons8-logo-de-google.svg`}
                      alt="Google"
                      style={{ width: '20px', height: '20px' }}
                    />
                    Iniciar sesión con Google
                  </button>

                </div>
              </form>

              <div className="mt-4 text-center">
                <a href="/register" className="text-decoration-none">¿No tienes cuenta? Regístrate</a><br />
                <a href="/forgot" className="text-decoration-none">¿Olvidaste tu contraseña?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
