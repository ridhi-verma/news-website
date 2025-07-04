import React, { useEffect, useState } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import './Navbar.css';

const Navbar = ({ setCategory, onSearch }) => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  // Get user's geolocation
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  // Fetch weather information
  useEffect(() => {
    if (location) {
      const { latitude, longitude } = location;
      const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

      const fetchWeather = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&units=metric`
          );
          setWeather(response.data);
        } catch (error) {
          console.error('Error fetching weather:', error);
        }
      };

      fetchWeather();
    }
  }, [location]);

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  let iconUrl = '';
  if (weather && weather.weather[0].icon) {
    iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
  }

  return (
    <nav className="navbar navbar-expand-lg  navbar-shadow" data-bs-theme="light" style={{background:"#dee2e6"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">News-Fast</span> {/* Removed the red badge */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item" onClick={() => setCategory('technology')}>
              <div className="nav-link" style={{ cursor: 'pointer' }}>Technology</div>
            </li>
            <li className="nav-item" onClick={() => setCategory('business')}>
              <div className="nav-link" style={{ cursor: 'pointer' }}>Business</div>
            </li>
            <li className="nav-item" onClick={() => setCategory('sports')}>
              <div className="nav-link" style={{ cursor: 'pointer' }}>Sports</div>
            </li>
            {/* Additional category links */}
          </ul>

          <div className="d-flex align-items-center">
            {/* Location Icon */}
            <FaMapMarkerAlt style={{ color: 'black', marginRight: '10px', cursor: 'pointer' }} /> {/* Set pointer cursor */}

            {/* Weather Information */}
            {weather && (
              <div className="weather-info d-flex align-items-center me-3">
                <img
                  src={iconUrl}
                  alt="weather icon"
                  style={{ height: '30px', marginRight: '10px' }}
                  onError={(e) => { e.target.src = 'path/to/default_image.png'; }} // Fallback image
                />
                <span>
                  {weather.main.temp}°C - {weather.weather[0].description} {/* Added degree symbol */}
                </span>
              </div>
            )}

            {/* Search Bar */}
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search news..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ width: '200px' }}
            />
            <button
              className="btn btn-outline-dark"
              onClick={handleSearch}
              style={{ cursor: 'pointer' }}
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
