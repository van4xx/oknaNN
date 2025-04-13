import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <img src="/logo192.png" alt="ОкнаПро" className="logo-image" />
          <div className="logo-text">
            <h1>ОкнаПро</h1>
            <p>Качественные окна в Нижнем Новгороде</p>
          </div>
        </div>

        <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#services">Услуги</a></li>
            <li><a href="#glazing">Стеклопакеты</a></li>
            <li><a href="#pricing">Цены</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </nav>

        <div className="contact-info">
          <div className="phone-numbers">
            <a href="tel:2128385" className="phone">
              <span className="phone-icon">📞</span>
              <span>212-83-85</span>
            </a>
            <a href="tel:4100288" className="phone">
              <span className="phone-icon">📞</span>
              <span>410-02-88</span>
            </a>
            <a href="tel:+79200068027" className="phone">
              <span className="phone-icon">📞</span>
              <span>+7(920)006-80-27</span>
            </a>
          </div>
          <button className="call-btn">Заказать звонок</button>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 