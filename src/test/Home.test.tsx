import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home', () => {
  it('renders welcome message', () => {
    render(<Home />);
    
    expect(screen.getByText('Welcome to Weather App')).toBeInTheDocument();
    expect(screen.getByText(/Get real-time weather information/i)).toBeInTheDocument();
  });

  it('displays feature cards', () => {
    render(<Home />);
    
    expect(screen.getByText('Current Weather')).toBeInTheDocument();
    expect(screen.getByText('Search Locations')).toBeInTheDocument();
    expect(screen.getByText('Accurate Data')).toBeInTheDocument();
  });
});
