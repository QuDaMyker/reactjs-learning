import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation, useNavigate } from 'react-router-dom';

import { loginApi } from '../api/authApi';
import { AppButton } from '../shared/components/AppButton';
import { AppCard } from '../shared/components/AppCard';
import { AppInput } from '../shared/components/AppInput';
import { useAuthStore } from '../stores/authStore';

const loginSchema = z.object({
  email: z.string().email('Enter a valid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const setSession = useAuthStore((state) => state.setSession);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'student@react-learning.dev',
      password: '123456',
    },
  });

  async function onSubmit(values) {
    try {
      const session = await loginApi(values);
      setSession(session);
      navigate(location.state?.from || '/products', { replace: true });
    } catch (error) {
      setError('root', {
        type: 'server',
        message: error.response?.data?.message || 'Login failed.',
      });
    }
  }

  return (
    <div className="page-stack">
      <AppCard
        title="Login page"
        description="Use the demo account to practice protected routes and token refresh."
      >
        <form className="stack" onSubmit={handleSubmit(onSubmit)}>
          <AppInput
            id="email"
            type="email"
            label="Email"
            error={errors.email?.message}
            hint="Demo: student@react-learning.dev"
            {...register('email')}
          />
          <AppInput
            id="password"
            type="password"
            label="Password"
            error={errors.password?.message}
            hint="Demo: 123456"
            {...register('password')}
          />
          {errors.root?.message ? <p className="field-error">{errors.root.message}</p> : null}
          <AppButton type="submit" isBlock disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Login with demo account'}
          </AppButton>
        </form>
      </AppCard>
    </div>
  );
}
