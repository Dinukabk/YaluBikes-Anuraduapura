import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import i18n from './i18n';
import store from './store';
import AppRoutes from './AppRoutes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Header />
          <main>
            <AppRoutes />
          </main>
          <Footer />
          <ToastContainer position="bottom-right" />
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  );
}

export default App;