import './About.css';

const About = () => {
  return (
    <div className="page-container">
      <main className="about-content">
        <h1 className="about-title">About Weather App</h1>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Weather App provides accurate, real-time weather information to help you plan your day.
            Built with modern web technologies and powered by the Open-Meteo API, we deliver
            reliable weather data for locations worldwide.
          </p>
        </div>
        <div className="about-section">
          <h2>Features</h2>
          <ul className="feature-list">
            <li>Real-time weather data from Open-Meteo API</li>
            <li>Search for any city worldwide</li>
            <li>Current temperature, humidity, and wind speed</li>
            <li>Responsive design for all devices</li>
            <li>Accessibility-compliant interface</li>
          </ul>
        </div>
        <div className="about-section">
          <h2>Technology Stack</h2>
          <p>
            This application is built using React with TypeScript, Vite for build tooling,
            React Router for navigation, and Vitest for testing. The design follows WCAG 2.1
            accessibility guidelines to ensure the app is usable by everyone.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
