import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BoltIcon from '@mui/icons-material/Bolt';
import RecyclingIcon from '@mui/icons-material/Recycling';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import { articles } from '../data/articles.js';
import { quickStats } from '../data/stats.js';
import images from '../assets/images.js';
import usePageTitle from '../hooks/usePageTitle.js';

const statIcons = {
  bike: DirectionsBikeIcon,
  restaurant: RestaurantIcon,
  bolt: BoltIcon,
  recycling: RecyclingIcon,
};

const discoverCards = [
  {
    to: '/calculadora',
    label: 'Calculadora de carbono',
    description: 'Descubra sua pegada semanal em poucos minutos.',
    image: images.calccarb,
  },
  {
    to: '/impacto',
    label: 'Nosso impacto',
    description: 'Como o Ecoscience ajuda pessoas a mudar hábitos.',
    image: images.impact,
  },
  {
    to: '/impacto',
    label: 'Como ajudar?',
    description: 'Atitudes simples que fazem diferença no dia a dia.',
    image: images.ajuda,
  },
];

export default function Home() {
  usePageTitle('Ecoscience');

  return (
    <Box>
      <Header />
      <Hero />

      {/* Estatísticas rápidas, ligadas à lógica da própria calculadora */}
      <Box sx={{ backgroundColor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 5, md: 6 } }}>
          <Grid container spacing={4}>
            {quickStats.map((stat) => {
              const Icon = statIcons[stat.icon];
              return (
                <Grid key={stat.label} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <Icon sx={{ color: 'primary.main', fontSize: 28, mt: 0.3 }} />
                    <Box>
                      <Typography variant="h4" sx={{ fontSize: '1.6rem' }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {stat.label}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        {stat.detail}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Cards de navegação */}
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
        <Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 600 }}>
          Comece por aqui
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.4rem' }, mb: 4 }}>
          Conheça também
        </Typography>

        <Grid container spacing={3}>
          {discoverCards.map((card) => (
            <Grid key={card.label} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: '100%', borderTop: '3px solid', borderTopColor: 'primary.main' }}>
                <CardActionArea component={RouterLink} to={card.to} sx={{ height: '100%' }}>
                  <CardMedia component="img" image={card.image} alt="" sx={{ height: 180 }} />
                  <CardContent>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                      <Typography variant="h6">{card.label}</Typography>
                      <ArrowOutwardIcon fontSize="small" sx={{ color: 'primary.main' }} />
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Notícias / artigos */}
      <Box sx={{ backgroundColor: 'background.paper', borderTop: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
          <Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 600 }}>
            Aprenda mais
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.4rem' }, mb: 4 }}>
            Outras notícias
          </Typography>

          <Grid container spacing={3}>
            {articles.map((article) => (
              <Grid key={article.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ height: '100%' }}>
                  <CardActionArea component={RouterLink} to={`/${article.slug}`} sx={{ height: '100%' }}>
                    <CardMedia component="img" image={images[article.cardImage]} alt="" sx={{ height: 200 }} />
                    <CardContent>
                      <Typography variant="h6">{article.label}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Chamada final */}
      <Box sx={{ backgroundColor: 'primary.main', color: '#F5F7F4' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 8 } }}>
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.2rem' }, mb: 1 }}>
                Pronto para conhecer sua pegada de carbono?
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(245,247,244,0.85)' }}>
                Leva menos de 5 minutos e ajuda a identificar onde você pode reduzir mais.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Button component={RouterLink} to="/calculadora" variant="contained" color="secondary" size="large">
                Calcular agora
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
