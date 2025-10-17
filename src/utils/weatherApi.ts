import type { GeocodingResult, WeatherData } from '../types/weather';
import { getWeatherDescription } from '../utils/weatherCodes';

const GEOCODING_API = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_API = 'https://api.open-meteo.com/v1/forecast';

export const searchLocation = async (query: string): Promise<GeocodingResult[]> => {
  const response = await fetch(`${GEOCODING_API}?name=${encodeURIComponent(query)}&count=5&language=en&format=json`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch location data');
  }

  const data = await response.json();
  
  if (!data.results) {
    return [];
  }

  return data.results.map((result: any) => ({
    name: result.name,
    latitude: result.latitude,
    longitude: result.longitude,
    country: result.country,
  }));
};

export const fetchWeather = async (latitude: number, longitude: number): Promise<WeatherData> => {
  const response = await fetch(
    `${WEATHER_API}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const data = await response.json();
  const current = data.current;

  return {
    temperature: current.temperature_2m,
    weatherCode: current.weather_code,
    windSpeed: current.wind_speed_10m,
    humidity: current.relative_humidity_2m,
    description: getWeatherDescription(current.weather_code),
  };
};
