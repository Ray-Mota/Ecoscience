import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './ContentPage.css';

// Layout compartilhado pela página de Impacto e pelos artigos.
export default function ContentPage({ children }) {
  return (
    <div className="content-page">
      <Header />
      <main className="conteudo-principal">
        <section className="secao">{children}</section>
      </main>
      <Footer />
    </div>
  );
}
