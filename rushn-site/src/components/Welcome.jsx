import { useNavigate } from 'react-router-dom';
import '../styles/Welcome.css';

function Welcome() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="welcome-left">
          <h1 className="welcome-title">Rushn</h1>
          <p className="welcome-subtitle">I was never meant to fit in</p>
        </div>
      </div>
      <button className="welcome-button" onClick={handleEnter}>
        Go to the website
      </button>
    </div>
  );
}

export default Welcome;
