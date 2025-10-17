import './Home.css';

const Home = () => {
  return (
    <div className="page-container">
      <main className="home-content">
        <h1 className="home-title">Welcome to Weather App</h1>
        <p className="home-description">
          Get real-time weather information for any location around the world.
        </p>
        <div className="features">
          <div className="feature-card">
            <span className="feature-icon" role="img" aria-label="Current weather">
              🌤️
            </span>
            <h2>Current Weather</h2>
            <p>View current temperature, humidity, and wind conditions</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon" role="img" aria-label="Search locations">
              🔍
            </span>
            <h2>Search Locations</h2>
            <p>Find weather data for any city worldwide</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon" role="img" aria-label="Accurate data">
              📊
            </span>
            <h2>Accurate Data</h2>
            <p>Powered by Open-Meteo API for reliable information</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
