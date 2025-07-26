import { Modal } from 'react-bootstrap';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function AuthModal({ show, onHide, mode = 'login' }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {mode === 'login' ? 'Login' : 'Register'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {mode === 'login' ? <LoginForm /> : <RegisterForm />}
      </Modal.Body>
    </Modal>
  );
}