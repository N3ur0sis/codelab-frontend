import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../app/page'; // Assurez-vous que le chemin est correct

// Mock de fetch si nécessaire
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  }),
) as jest.Mock;

describe('Home Page', () => {
  it('renders the heading', async () => {
    render(<Home />);
    await waitFor(() => {
      const heading = screen.getByText(/Liste des utilisateurs/i);
      expect(heading).toBeInTheDocument();
    });
  });
});
