import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { loadUser } from '../features/auth/authSlice';
import AppRoutes from './AppRoutes';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  if (isLoading) return <div className="loader">Loading...</div>;

  return (
    <div className="app">
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;