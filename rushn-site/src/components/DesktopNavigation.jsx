import { Link } from 'react-router-dom';

export default function DeskTopNavigation() {
  return (
    <>
    <nav>
              <div className="logo">R</div>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/socials">Socials</Link></li>
              </ul>
            </nav>
            </>
  );
}