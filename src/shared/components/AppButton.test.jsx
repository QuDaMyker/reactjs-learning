import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { AppButton } from './AppButton';

describe('AppButton', () => {
  it('renders its label', () => {
    render(<AppButton>Open products</AppButton>);

    expect(screen.getByRole('button', { name: 'Open products' })).toBeInTheDocument();
  });

  it('calls click handlers', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<AppButton onClick={handleClick}>Run action</AppButton>);
    await user.click(screen.getByRole('button', { name: 'Run action' }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
