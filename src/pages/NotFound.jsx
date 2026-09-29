import { Link } from 'react-router-dom';
import ContentPage from '../components/ContentPage.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Ecoscience - Página não encontrada');

  return (
    <ContentPage>
      <h1>Página não encontrada</h1>
      <p>O endereço que você tentou acessar não existe.</p>
      <p>
        <Link to="/">Voltar para a página inicial</Link>
      </p>
    </ContentPage>
  );
}
