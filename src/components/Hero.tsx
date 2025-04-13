import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`hero ${isLoaded ? 'loaded' : ''}`}>
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">Лидер на рынке с 2010 года</div>
          <h1 className="fade-in">Установка пластиковых окон и отделка балконов</h1>
          <h2 className="fade-in">в Нижнем Новгороде и Нижегородской области</h2>
          <div className="hero-features">
            <div className="hero-feature fade-in">
              <img src="https://cdn-icons-png.flaticon.com/512/3658/3658773.png" alt="Качество" />
              <span>Немецкое качество</span>
            </div>
            <div className="hero-feature fade-in">
              <img src="https://cdn-icons-png.flaticon.com/512/149/149448.png" alt="Гарантия" />
              <span>Гарантия 5 лет</span>
            </div>
            <div className="hero-feature fade-in">
              <img src="https://cdn-icons-png.flaticon.com/512/2278/2278049.png" alt="Установка" />
              <span>Быстрая установка</span>
            </div>
          </div>
          <div className="hero-cta">
            <button className="primary-btn pulse-btn">Рассчитать стоимость</button>
            <button className="secondary-hero-btn">Смотреть каталог</button>
          </div>
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div>
              <span className="scroll-text">Прокрутите вниз</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wave"></div>
    </section>
  );
};

export default Hero; 