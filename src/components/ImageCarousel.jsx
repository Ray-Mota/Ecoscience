import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images.js';
import './ImageCarousel.css';

const slides = [
  {
    image: images.intr3,
    heading: 'Bem-vindo ao Ecoscience.',
    text: 'Quer descobrir quanto carbono gasta?',
    linkTo: '/calculadora',
    linkText: 'Confira aqui',
  },
  {
    image: images.eco,
    heading: 'Fale com o EcoChat',
    text: 'Uma solução rápida e segura.',
    linkTo: '/ecochat',
    linkText: 'Clique aqui',
  },
];

const AUTO_ADVANCE_MS = 15000;

// Carrossel de duas telas com troca automática, igual ao comportamento do main.js original.
export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setCurrent(((index % slides.length) + slides.length) % slides.length);
  }, []);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const handleNav = (direction) => {
    goTo(current + direction);
    resetTimer();
  };

  const slide = slides[current];

  return (
    <section className="carousel">
      <div className="carousel__image-container">
        <button className="carousel__arrow carousel__arrow--prev" onClick={() => handleNav(-1)} aria-label="Anterior">
          &#8592;
        </button>
        <img className="carousel__image" src={slide.image} alt="" />
        <button className="carousel__arrow carousel__arrow--next" onClick={() => handleNav(1)} aria-label="Próximo">
          &#8594;
        </button>
      </div>

      <div className="carousel__content">
        <h1>{slide.heading}</h1>
        <p>{slide.text}</p>
        <div className="carousel__spacer" />
        <Link className="carousel__link" to={slide.linkTo}>
          {slide.linkText}
        </Link>
      </div>
    </section>
  );
}
