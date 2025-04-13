import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      <div className="container footer-container">
        <div className="footer-info">
          <div className="footer-about">
            <div className="footer-logo">
              <h2>ОкнаПро</h2>
              <p>Качественные окна в Нижнем Новгороде с 2010 года</p>
            </div>
            <p className="about-text">
              Мы специализируемся на производстве и установке пластиковых окон, остеклении и отделке балконов. 
              Используем только проверенные материалы и комплектующие от европейских производителей.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook" />
              </a>
              <a href="#" className="social-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
              </a>
              <a href="#" className="social-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="VK" />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Навигация</h3>
            <ul>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#glazing">Стеклопакеты</a></li>
              <li><a href="#pricing">Цены</a></li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
          </div>
          <div className="footer-contacts">
            <h3>Контакты</h3>
            <p><i className="icon-location"></i> Адрес: г. Нижний Новгород, ул. Ленина, 10</p>
            <p><i className="icon-phone"></i> Телефон: <a href="tel:+78312345678">+7 (831) 234-56-78</a></p>
            <p><i className="icon-email"></i> Email: <a href="mailto:info@oknapro.ru">info@oknapro.ru</a></p>
            <p><i className="icon-time"></i> Режим работы: Пн-Пт: 9:00-19:00, Сб: 10:00-16:00</p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} ОкнаПро. Все права защищены.</p>
          <p>Разработка сайта: <a href="#">WebStudio</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;