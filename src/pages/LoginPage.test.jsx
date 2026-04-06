import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { LoginPage } from './LoginPage';
import { renderWithProviders } from '../test/renderWithProviders';

describe('LoginPage', () => {
  it('renders the demo login hints', () => {
    renderWithProviders(<LoginPage />);

    expect(screen.getByLabelText('Email')).toHaveValue('student@react-learning.dev');
    expect(screen.getByLabelText('Password')).toHaveValue('123456');
    expect(screen.getByRole('button', { name: 'Login with demo account' })).toBeInTheDocument();
  });
});
