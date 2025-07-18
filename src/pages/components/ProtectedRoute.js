import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import Spinner from './Spinner';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  const [fakeLoading, setFakeLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFakeLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && !fakeLoading && !user) {
      Swal.fire({
        icon: 'warning',
        title: 'Acceso restringido',
        text: 'Debes iniciar sesión para acceder a esta página.',
        timer: 2000,
        showConfirmButton: false
      }).then(() => {
        navigate('/', { replace: true });  // Redirige al inicio si no hay usuario
      });
    }
  }, [loading, fakeLoading, user, navigate]);

  if (loading || fakeLoading) {
    return <Spinner />;
  }

  if (!user) {
    return null;  // Ya se manejó la redirección con Swal y navigate
  }

  return children;
}

export default ProtectedRoute;