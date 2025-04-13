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
          <h1>ОкнаПро</h1>
          <p>Качественные окна в Нижнем Новгороде</p>
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
          <a href="tel:+78312345678" className="phone">+7 (831) 234-56-78</a>
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