import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images.js';
import './Header.css';

const links = [
  { to: '/calculadora', label: 'Calculadora de carbono' },
  { to: '/impacto', label: 'Impacto do projeto' },
  { to: '/ecochat', label: 'EcoChat' },
];

// transparent: usado na home (sobre o banner); fica sólido depois de rolar 50px.
export default function Header({ transparent = false }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!transparent) return undefined;

    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparent]);

  const className = [
    'site-header',
    transparent ? 'site-header--overlay' : 'site-header--solid',
    transparent && scrolled ? 'is-scrolled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={className}>
      <nav className="site-header__nav">
        <Link to="/">
          <img src={images.logo} alt="Ecoscience" width="160" />
        </Link>
        {links.map((link) => (
          <Link key={link.to} className="site-header__link" to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
