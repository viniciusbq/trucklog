import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Home } from './';

export {};

describe('Forms of HomePage', () => {
  it('renders a name input', async () => {
    render(<Home />);

    let nameInput = screen.getByPlaceholderText(/digite aqui seu nome/i);

    expect(nameInput).toBeInTheDocument();
  });

  it('renders a email input', async () => {
    render(<Home />);

    let emailInput = screen.getByPlaceholderText(/digite aqui seu e\-mail/i);

    expect(emailInput).toBeInTheDocument();
  });
});
