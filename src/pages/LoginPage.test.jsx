import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { LoginPage } from './LoginPage';
import { renderWithProviders } from '../test/renderWithProviders';

describe('LoginPage', () => {
  it('renders the demo login hints', () => {
    renderWithProviders(<LoginPage />);

    expect(screen.getByRole('textbox')).toHaveValue('student@react-learning.dev');
    expect(screen.getByDisplayValue('123456')).toBeInTheDocument();
    expect(screen.getByText('Demo: student@react-learning.dev')).toBeInTheDocument();
    expect(screen.getByText('Demo: 123456')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login with demo account' })).toBeInTheDocument();
  });
});
