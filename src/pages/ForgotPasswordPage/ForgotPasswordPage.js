function ForgotPaswordPage(){
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="card shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Recuperar Contraseña</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="recoverEmail" className="form-label">
                  Ingresa tu correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="recoverEmail"
                  placeholder=""
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Enviar enlace
              </button>
            </form>
            <div className="mt-3 text-center">
              <a href="/">Volver al inicio de sesión</a>
            </div>
          </div>
        </div>
      </div>
    )
    }
    
    
    export default ForgotPaswordPage;