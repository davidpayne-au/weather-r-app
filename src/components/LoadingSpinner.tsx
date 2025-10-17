import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container" role="status" aria-live="polite" aria-label="Loading weather data">
      <div className="sun-spinner">
        <div className="sun-core"></div>
        <div className="sun-ray sun-ray-1"></div>
        <div className="sun-ray sun-ray-2"></div>
        <div className="sun-ray sun-ray-3"></div>
        <div className="sun-ray sun-ray-4"></div>
        <div className="sun-ray sun-ray-5"></div>
        <div className="sun-ray sun-ray-6"></div>
        <div className="sun-ray sun-ray-7"></div>
        <div className="sun-ray sun-ray-8"></div>
      </div>
      <p className="loading-text">Loading weather data...</p>
    </div>
  );
};

export default LoadingSpinner;
