import { useForm } from 'react-hook-form';
import { useRegister } from '../authAPI';
import TextInput from '../../../components/ui/forms/TextInput';
import PrimaryButton from '../../../components/ui/buttons/PrimaryButton';
import ReCAPTCHA from '../../../components/ui/forms/reCAPTCHA';

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [registerUser, { isLoading, error }] = useRegister();

  const onSubmit = async (data) => {
    await registerUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Full Name"
        {...register('name', { required: 'Name is required' })}
        error={errors.name?.message}
      />

      <TextInput
        label="Email"
        type="email"
        {...register('email', { 
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        })}
        error={errors.email?.message}
      />

      <TextInput
        label="Password"
        type="password"
        {...register('password', { 
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters'
          }
        })}
        error={errors.password?.message}
      />

      <ReCAPTCHA action="register" />

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <PrimaryButton type="submit" isLoading={isLoading}>
        Register
      </PrimaryButton>
    </form>
  );
}