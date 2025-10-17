import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('About', () => {
  it('renders about page content', () => {
    render(<About />);
    
    expect(screen.getByText('About Weather App')).toBeInTheDocument();
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Technology Stack')).toBeInTheDocument();
  });

  it('displays feature list', () => {
    render(<About />);
    
    expect(screen.getByText(/Real-time weather data/i)).toBeInTheDocument();
    expect(screen.getByText(/Search for any city worldwide/i)).toBeInTheDocument();
    expect(screen.getByText(/Accessibility-compliant interface/i)).toBeInTheDocument();
  });
});
