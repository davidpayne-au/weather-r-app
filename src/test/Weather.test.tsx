import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Weather from '../pages/Weather';

describe('Weather', () => {
  it('renders weather page', () => {
    render(<Weather />);
    
    expect(screen.getByText('Weather Forecast')).toBeInTheDocument();
    expect(screen.getByLabelText(/Enter a city name/i)).toBeInTheDocument();
  });

  it('has accessible search form', () => {
    render(<Weather />);
    
    const searchForm = screen.getByRole('search');
    expect(searchForm).toBeInTheDocument();
    
    const input = screen.getByLabelText(/Enter a city name/i);
    expect(input).toHaveAttribute('placeholder');
  });

  it('shows error when searching with empty input', async () => {
    const user = userEvent.setup();
    render(<Weather />);
    
    const searchButton = screen.getByRole('button', { name: /search/i });
    await user.click(searchButton);
    
    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(/Please enter a location/i);
    });
  });
});
