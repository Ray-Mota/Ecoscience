import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Calculator from './pages/Calculator.jsx';
import Impact from './pages/Impact.jsx';
import EcoChat from './pages/EcoChat.jsx';
import Article from './pages/Article.jsx';
import NotFound from './pages/NotFound.jsx';
import { articles } from './data/articles.js';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora" element={<Calculator />} />
        <Route path="/impacto" element={<Impact />} />
        <Route path="/ecochat" element={<EcoChat />} />
        {articles.map((article) => (
          <Route key={article.slug} path={`/${article.slug}`} element={<Article article={article} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
