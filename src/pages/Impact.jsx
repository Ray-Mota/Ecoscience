import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import ContentPage from '../components/ContentPage.jsx';
import images from '../assets/images.js';
import usePageTitle from '../hooks/usePageTitle.js';

const pillars = [
  {
    icon: CalculateOutlinedIcon,
    title: 'Calculadora de Carbono',
    text: 'Estima sua emissão de CO₂ com base em transporte, alimentação, energia e consumo — e sugere mudanças práticas.',
  },
  {
    icon: SmartToyOutlinedIcon,
    title: 'EcoBot',
    text: 'Tira dúvidas e dá dicas de sustentabilidade sobre reciclagem, consumo consciente e energia limpa.',
  },
  {
    icon: Diversity3OutlinedIcon,
    title: 'Comunidade',
    text: 'Mais que um site: um espaço para aprender e agir junto por um futuro mais sustentável.',
  },
];

export default function Impact() {
  usePageTitle('Ecoscience - Impacto');

  return (
    <ContentPage>
      <Typography component="h1" variant="h1">
        Nosso Impacto no Meio Ambiente
      </Typography>
      <Typography component="p">
        O Ecoscience nasceu com a missão de informar, conscientizar e ajudar pessoas a entenderem e reduzirem sua
        pegada ambiental. Acreditamos que pequenas atitudes podem gerar grandes mudanças.
      </Typography>

      <Grid container spacing={3} sx={{ my: 4 }}>
        {pillars.map(({ icon: Icon, title, text }) => (
          <Grid key={title} size={{ xs: 12, sm: 4 }}>
            <Box sx={{ textAlign: 'center', px: 1 }}>
              <Icon sx={{ fontSize: 34, color: 'primary.main', mb: 1 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <img src={images.pegada} alt="Pegada de carbono" />

      <Typography component="h2" variant="h2">
        Calculadora de Carbono
      </Typography>
      <Typography component="p">
        A <strong>Calculadora de Carbono</strong> do Ecoscience permite que você descubra o quanto suas atividades
        diárias impactam o planeta. Com base em dados sobre transporte, alimentação, energia e consumo, ela estima
        sua emissão de CO₂ e oferece sugestões práticas para reduzir esse valor.
      </Typography>

      <img src={images.ecobot} alt="EcoBot assistente virtual" />

      <Typography component="h2" variant="h2">
        EcoBot - Seu Assistente Ambiental
      </Typography>
      <Typography component="p">
        O <strong>EcoBot</strong> é um assistente virtual pronto para tirar dúvidas, dar dicas de sustentabilidade e
        ensinar práticas ecológicas de forma simples e rápida.
      </Typography>

      <img src={images.atitude} alt="Atitudes sustentáveis" />

      <Typography component="h2" variant="h2">
        Juntos por um Futuro Sustentável
      </Typography>
      <Typography component="p">
        Cada passo conta! Seja plantando uma árvore, optando por transporte coletivo, reduzindo o uso de plásticos ou
        aprendendo com o EcoBot, suas ações têm um impacto.
      </Typography>
    </ContentPage>
  );
}
