import React from 'react';
import '../styles/Services.css';

interface ServiceItemProps {
  title: string;
  price: string;
  image: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, price, image }) => {
  return (
    <div className="service-item">
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p className="price">от {price}</p>
      <button className="secondary-btn">Подробнее</button>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'Остекление квартир',
      price: '21000р.',
      image: 'https://images.unsplash.com/photo-1494810894120-1fe338a55a20?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Остекление балконов',
      price: '39000р.',
      image: 'https://images.unsplash.com/photo-1581151694112-b8a26509f5b9?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Остекление коттеджей',
      price: '57000р.',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Входные группы',
      price: '42000р.',
      image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Отделка балконов',
      price: '33000р.',
      image: 'https://images.unsplash.com/photo-1622127922040-13cab637ee78?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Алюминевые конструкции',
      price: '60000р.',
      image: 'https://images.unsplash.com/photo-1529307474719-3d0a417aaf8a?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">ВИДЫ ВЫПОЛНЯЕМЫХ РАБОТ</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              title={service.title}
              price={service.price}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 