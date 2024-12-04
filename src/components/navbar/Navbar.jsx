import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
        <nav className="navbar-container">
        <h2 className="logo">Seker</h2>
            <ul className="link-container">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/">About</Link>
                <Link className="link" to="/">Services</Link>
                <Link className="link" to="/">Contact</Link>
            </ul>
                <FontAwesomeIcon className="icons" icon={faGithub} size="2x" style={{ margin: '10px' }} />
                <FontAwesomeIcon className="icons" icon={faInstagram} size="2x" style={{ margin: '10px' }} />
                <FontAwesomeIcon className="icons" icon={faLinkedin} size="2x" style={{ margin: '10px' }} />

        </nav>
    </div>
  )
}

export default Navbar
