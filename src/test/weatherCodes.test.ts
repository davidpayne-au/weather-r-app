import { describe, it, expect } from 'vitest';
import { getWeatherDescription } from '../utils/weatherCodes';

describe('weatherCodes', () => {
  it('returns correct description for clear sky', () => {
    expect(getWeatherDescription(0)).toBe('Clear sky');
  });

  it('returns correct description for rain', () => {
    expect(getWeatherDescription(61)).toBe('Slight rain');
    expect(getWeatherDescription(63)).toBe('Moderate rain');
    expect(getWeatherDescription(65)).toBe('Heavy rain');
  });

  it('returns correct description for snow', () => {
    expect(getWeatherDescription(71)).toBe('Slight snow');
  });

  it('returns Unknown for unrecognized code', () => {
    expect(getWeatherDescription(999)).toBe('Unknown');
  });
});
