import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testa a Tela de Login', () => {
  it('Se é exibido um "H1" com o texto "CliciApp"', () => {
    renderWithRouter(<App />);
    const clinicAppTitle = screen.getByRole('heading', { level: 1, name: 'ClinicApp' });
    expect(clinicAppTitle).toBeInTheDocument();
  });
});
