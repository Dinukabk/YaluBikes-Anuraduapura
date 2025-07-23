import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLogin } from '../authAPI';
import { Button, Form } from 'react-bootstrap';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [login, { isLoading }] = useLogin();
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      await login(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {error && <div className="alert alert-danger">{error}</div>}
      
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          {...register('email', { required: 'Email is required' })}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          {...register('password', { required: 'Password is required' })}
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </Button>
    </Form>
  );
}