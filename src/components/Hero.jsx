import { useCallback, useEffect, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import images from '../assets/images.js';

const slides = [
  {
    image: images.intr3,
    eyebrowStat: '10 perguntas',
    heading: 'Quanto carbono a sua rotina emite?',
    text: 'Responda nossa calculadora e descubra sua pegada de carbono semanal, com base em transporte, alimentação e energia.',
    linkTo: '/calculadora',
    linkText: 'Calcular minha pegada',
  },
  {
    image: images.eco,
    eyebrowStat: 'Resposta imediata',
    heading: 'Tire dúvidas com o EcoChat',
    text: 'Um assistente virtual para orientar suas escolhas sobre reciclagem, energia limpa e consumo consciente.',
    linkTo: '/ecochat',
    linkText: 'Conversar agora',
  },
];

const AUTO_ADVANCE_MS = 15000;

// Hero dividido: painel sólido com o texto + painel de imagem que alterna automaticamente.
// Mantém o comportamento do carrossel original (troca automática + setas), com um visual editorial.
export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

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
    setCurrent((prev) => (prev + direction + slides.length) % slides.length);
    resetTimer();
  };

  const slide = slides[current];

  return (
    <Box sx={{ backgroundColor: 'primary.dark', color: '#F5F7F4' }}>
      <Container maxWidth="lg" disableGutters>
        <Grid container sx={{ minHeight: { xs: 'auto', md: 560 } }}>
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              px: { xs: 3, md: 6 },
              py: { xs: 6, md: 0 },
            }}
          >
            <Typography variant="overline" sx={{ color: '#EDBB6A', letterSpacing: 'normal', fontWeight: 600 }}>
              {slide.eyebrowStat}
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, mt: 1, mb: 2 }}>
              {slide.heading}
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(245,247,244,0.82)', maxWidth: 420, mb: 4 }}>
              {slide.text}
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Button component={RouterLink} to={slide.linkTo} variant="contained" color="secondary" size="large">
                {slide.linkText}
              </Button>
              <Stack direction="row" spacing={0.5}>
                <IconButton onClick={() => handleNav(-1)} aria-label="Anterior" sx={{ color: '#F5F7F4' }}>
                  <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={() => handleNav(1)} aria-label="Próximo" sx={{ color: '#F5F7F4' }}>
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }} sx={{ position: 'relative', minHeight: { xs: 320, md: 'auto' } }}>
            <Box
              component="img"
              key={slide.image}
              src={slide.image}
              alt=""
              sx={{
                width: '100%',
                height: '100%',
                position: { md: 'absolute' },
                inset: 0,
                objectFit: 'cover',
                animation: 'fade-in-up 0.5s ease',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
