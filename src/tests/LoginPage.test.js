import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testa a Tela de Login', () => {
  it('Se é exibido um "H1" com o texto "CliciApp"', () => {
    renderWithRouter(<App />);
    const clinicAppTitle = screen.getByRole('heading', { level: 1, name: 'ClinicApp' });
    expect(clinicAppTitle).toBeInTheDocument();
  });

  it('Se é exibido um Input com o placeholder "Email"', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByRole('textbox');
    expect(emailInput).toHaveAttribute('placeholder', 'Email');
  });

  it('Se é exibido um Input com o placeholder "Senha"', () => {
    renderWithRouter(<App />);
    const passwordInput = screen.getByPlaceholderText('Senha');
    expect(passwordInput).toHaveAttribute('placeholder', 'Senha');
  });

  it('Se é exibido um Botão com o texto "Entrar"', () => {
    renderWithRouter(<App />);
    const logInButton = screen.getByRole('button', { name: 'ENTRAR' });
    expect(logInButton).toBeInTheDocument();
  });

  it(`Se é exibido um Texto dizendo "Email ou senha inválidos"
   quando não insere um email ou senha corretos`, async () => {
    renderWithRouter(<App />);
    const logInButton = screen.getByRole('button', { name: 'ENTRAR' });
    fireEvent.click(logInButton);
    const invalidEmailText = await screen.findByText('Email ou senha inválidos');
    expect(invalidEmailText).toBeInTheDocument();
  });
});
