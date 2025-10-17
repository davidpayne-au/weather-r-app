import { useState } from 'react';
import type { GeocodingResult, WeatherData } from '../types/weather';
import { searchLocation, fetchWeather } from '../utils/weatherApi';
import LoadingSpinner from '../components/LoadingSpinner';
import './Weather.css';

const Weather = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locations, setLocations] = useState<GeocodingResult[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<GeocodingResult | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchError('Please enter a location');
      return;
    }

    setLoading(true);
    setError(null);
    setSearchError(null);
    setLocations([]);
    setSelectedLocation(null);
    setWeatherData(null);

    try {
      const results = await searchLocation(searchQuery);
      if (results.length === 0) {
        setSearchError('No locations found. Please try a different search.');
      } else {
        setLocations(results);
      }
    } catch (err) {
      setSearchError('Failed to search locations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLocationSelect = async (location: GeocodingResult) => {
    setSelectedLocation(location);
    setLoading(true);
    setError(null);

    try {
      const weather = await fetchWeather(location.latitude, location.longitude);
      setWeatherData(weather);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <main className="weather-content">
        <h1 className="weather-title">Weather Forecast</h1>
        
        <form onSubmit={handleSearch} className="search-form" role="search">
          <label htmlFor="location-search" className="search-label">
            Enter a city name
          </label>
          <div className="search-input-group">
            <input
              id="location-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g., London, New York, Tokyo"
              className="search-input"
              aria-describedby={searchError ? 'search-error' : undefined}
              aria-invalid={searchError ? true : false}
            />
            <button type="submit" className="search-button" disabled={loading}>
              Search
            </button>
          </div>
          {searchError && (
            <p id="search-error" className="error-message" role="alert">
              {searchError}
            </p>
          )}
        </form>

        {locations.length > 0 && !selectedLocation && (
          <div className="locations-list" role="region" aria-label="Search results">
            <h2 className="locations-title">Select a location:</h2>
            <ul className="location-items">
              {locations.map((location, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLocationSelect(location)}
                    className="location-button"
                    aria-label={`Get weather for ${location.name}, ${location.country}`}
                  >
                    <span className="location-name">{location.name}</span>
                    <span className="location-country">{location.country}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {loading && <LoadingSpinner />}

        {error && (
          <div className="error-message" role="alert">
            {error}
          </div>
        )}

        {weatherData && selectedLocation && !loading && (
          <div className="weather-display" role="region" aria-label="Weather information">
            <h2 className="weather-location">
              {selectedLocation.name}, {selectedLocation.country}
            </h2>
            <div className="weather-cards">
              <div className="weather-card weather-card-main">
                <div className="weather-icon" aria-hidden="true">
                  🌡️
                </div>
                <div className="weather-info">
                  <p className="weather-label">Temperature</p>
                  <p className="weather-value" aria-label={`Temperature is ${weatherData.temperature} degrees Celsius`}>
                    {weatherData.temperature}°C
                  </p>
                </div>
              </div>
              
              <div className="weather-card">
                <div className="weather-icon" aria-hidden="true">
                  💧
                </div>
                <div className="weather-info">
                  <p className="weather-label">Humidity</p>
                  <p className="weather-value" aria-label={`Humidity is ${weatherData.humidity} percent`}>
                    {weatherData.humidity}%
                  </p>
                </div>
              </div>
              
              <div className="weather-card">
                <div className="weather-icon" aria-hidden="true">
                  💨
                </div>
                <div className="weather-info">
                  <p className="weather-label">Wind Speed</p>
                  <p className="weather-value" aria-label={`Wind speed is ${weatherData.windSpeed} miles per hour`}>
                    {weatherData.windSpeed} mph
                  </p>
                </div>
              </div>
              
              <div className="weather-card weather-card-full">
                <div className="weather-icon" aria-hidden="true">
                  ☁️
                </div>
                <div className="weather-info">
                  <p className="weather-label">Conditions</p>
                  <p className="weather-value">{weatherData.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Weather;
