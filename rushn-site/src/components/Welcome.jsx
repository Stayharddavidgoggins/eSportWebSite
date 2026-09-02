import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Welcome.css';

function Welcome() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-sidebar welcome-sidebar-left">
        <div className="welcome-vertical-text">I was never meant to fit in</div>
      </div>
      <div className="welcome-content">
        <div className="welcome-left">
          <h1 className="welcome-title">Rushn</h1>
          <p className="welcome-subtitle">I was never meant to fit in</p>
          <button className="welcome-button" onClick={handleEnter}>
            Go to the website
          </button>
        </div>
        <div className="welcome-right">
          <div className="video-wrapper">
            <h2 className="video-title">My gameplay</h2>
            <div className="arrow-down">↓</div>
            <a 
              href="https://www.youtube.com/watch?v=FQLrDM-EOi4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-thumbnail"
            >
              <img 
                src="https://img.youtube.com/vi/FQLrDM-EOi4/maxresdefault.jpg" 
                alt="How an 17yr old entry scrims"
                className="thumbnail-img"
              />
              <div className="play-button">▶</div>
            </a>
          </div>
        </div>
      </div>
      <div className="welcome-sidebar welcome-sidebar-right">
        <div className="welcome-vertical-text">I was never meant to fit in</div>
      </div>
    </div>
  );
}

export default Welcome;
