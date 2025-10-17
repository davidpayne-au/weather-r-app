import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../components/LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders loading spinner with accessibility attributes', () => {
    render(<LoadingSpinner />);
    
    const statusElement = screen.getByRole('status');
    expect(statusElement).toBeInTheDocument();
    expect(statusElement).toHaveAttribute('aria-live', 'polite');
    expect(statusElement).toHaveAttribute('aria-label', 'Loading weather data');
  });

  it('displays loading text', () => {
    render(<LoadingSpinner />);
    
    expect(screen.getByText('Loading weather data...')).toBeInTheDocument();
  });
});
