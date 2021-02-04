import "./App.css";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="App">
      <main>
        <header className="header">
          <div className="header-container">
            <img
              className="start"
              src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
              alt="start-bootstrap"
            />
            <nav className="nav-bar">
              <p className="nav-item">SERVICES</p>
              <p className="nav-item">PORTFOLIO</p>
              <p className="nav-item">ABOUT</p>
              <p className="nav-item">TEAM</p>
              <p className="nav-item">CONTACT</p>
            </nav>
            <nav onClick={toggleMenu} className="nav-button">
              <p>MENU</p>
              <img
                className="hamburger"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/768px-Hamburger_icon_white.svg.png"
                alt="hamburger"
              />
            </nav>
          </div>
          <nav className={`menu ${isMenuOpen ? null : "menu-hide"}`}>
            <p className={`nav-dropdown-hide ${isMenuOpen ? null : 'nav-dropdown'}`}>SERVICES</p>
            <p className={`nav-dropdown-hide ${isMenuOpen ? null : 'nav-dropdown'}`}>PORTFOLIO</p>
            <p className={`nav-dropdown-hide ${isMenuOpen ? null : 'nav-dropdown'}`}>ABOUT</p>
            <p className={`nav-dropdown-hide ${isMenuOpen ? null : 'nav-dropdown'}`}>TEAM</p>
            <p className={`nav-dropdown-hide ${isMenuOpen ? null : 'nav-dropdown'}`}>CONTACT</p>
            
          </nav>
          <div className="hero">
            <div className="welcome">
              <p>Welcome to Our Studio!</p>
            </div>
            <div className="greeting">
              <p>IT'S NICE TO MEET YOU</p>
            </div>
            <div className="button">
              <p>TELL ME MORE</p>
            </div>
          </div>
        </header>
      </main>
    </div>
  );
}

export default App;
