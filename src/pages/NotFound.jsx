import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ContentPage from '../components/ContentPage.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Ecoscience - Página não encontrada');

  return (
    <ContentPage>
      <Typography component="h1" variant="h1" sx={{ textAlign: 'center' }}>
        Página não encontrada
      </Typography>
      <Typography component="p" sx={{ textAlign: 'center' }}>
        O endereço que você tentou acessar não existe.
      </Typography>
      <Typography sx={{ textAlign: 'center', mt: 3 }}>
        <Button component={RouterLink} to="/" variant="contained">
          Voltar para a página inicial
        </Button>
      </Typography>
    </ContentPage>
  );
}
