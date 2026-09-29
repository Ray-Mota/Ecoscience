import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';
import { articles } from '../data/articles.js';
import images from '../assets/images.js';
import usePageTitle from '../hooks/usePageTitle.js';
import './Home.css';

const discoverCards = [
  { to: '/calculadora', label: 'Calculadora de carbono', image: images.calccarb },
  { to: '/impacto', label: 'Nosso impacto', image: images.impact },
  { to: '/impacto', label: 'Como ajudar?', image: images.ajuda },
];

export default function Home() {
  usePageTitle('Ecoscience');

  return (
    <div className="home">
      <Header transparent />

      <ImageCarousel />

      <h2 className="home__section-title">Conheça também:</h2>

      <nav className="home__cards">
        {discoverCards.map((card) => (
          <Link key={card.label} className="home__card" to={card.to}>
            <p>{card.label}</p>
            <img src={card.image} alt="" />
          </Link>
        ))}
      </nav>

      <h2 className="home__section-title">Outras notícias:</h2>

      <div className="home__news">
        <div className="home__news-row">
          {articles.slice(0, 2).map((article) => (
            <NewsBox key={article.slug} article={article} />
          ))}
        </div>
        <div className="home__news-row">
          {articles.slice(2, 4).map((article) => (
            <NewsBox key={article.slug} article={article} />
          ))}
        </div>
        {articles.slice(4).map((article) => (
          <div key={article.slug} className="home__news-box home__news-box--wide">
            <NewsBoxContent article={article} />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

function NewsBox({ article }) {
  return (
    <div className="home__news-box">
      <NewsBoxContent article={article} />
    </div>
  );
}

function NewsBoxContent({ article }) {
  return (
    <>
      <Link to={`/${article.slug}`}>
        <img className="home__news-image" src={images[article.cardImage]} height="280" alt="" />
      </Link>
      <Link className="home__news-title" to={`/${article.slug}`}>
        {article.label}
      </Link>
    </>
  );
}
