import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import images from '../assets/images.js';

const footerLinkSx = {
  color: 'rgba(245,247,244,0.82)',
  fontSize: 15,
  '&:hover': { color: '#EDBB6A' },
};

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: 'primary.dark', color: '#F5F7F4' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box component="img" src={images.logo} alt="Ecoscience" sx={{ width: 150, mb: 2 }} />
            <Typography variant="body2" sx={{ color: 'rgba(245,247,244,0.72)', maxWidth: 320 }}>
              Informação acessível e ferramentas práticas para entender e reduzir seu impacto ambiental.
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <Typography variant="subtitle1" sx={{ color: '#EDBB6A', mb: 2, fontFamily: '"Fraunces", serif' }}>
              Explorar
            </Typography>
            <Stack spacing={1.2} alignItems="flex-start">
              <Link component={RouterLink} to="/impacto" sx={footerLinkSx} underline="none">
                Impacto
              </Link>
              <Link component={RouterLink} to="/poluicao" sx={footerLinkSx} underline="none">
                Poluição
              </Link>
              <Link component={RouterLink} to="/energias" sx={footerLinkSx} underline="none">
                Energias renováveis
              </Link>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <Typography variant="subtitle1" sx={{ color: '#EDBB6A', mb: 2, fontFamily: '"Fraunces", serif' }}>
              Interaja
            </Typography>
            <Stack spacing={1.5} alignItems="flex-start">
              <Button
                component={RouterLink}
                to="/ecochat"
                variant="contained"
                color="secondary"
                size="small"
                startIcon={<ChatBubbleOutlineIcon />}
              >
                EcoChat
              </Button>
              <Button
                component={RouterLink}
                to="/calculadora"
                variant="outlined"
                size="small"
                startIcon={<CalculateOutlinedIcon />}
                sx={{ borderColor: 'rgba(245,247,244,0.4)', color: '#F5F7F4' }}
              >
                Calculadora de Carbono
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, md: 2 }}>
            <Typography variant="subtitle1" sx={{ color: '#EDBB6A', mb: 2, fontFamily: '"Fraunces", serif' }}>
              Contato
            </Typography>
            <Link href="#" sx={footerLinkSx} underline="none" display="flex" alignItems="center" gap={0.75}>
              <MailOutlineIcon fontSize="small" /> Fale conosco
            </Link>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ borderTop: '1px solid rgba(245,247,244,0.12)', py: 2 }}>
        <Typography variant="body2" align="center" sx={{ color: 'rgba(245,247,244,0.65)' }}>
          &copy; {new Date().getFullYear()} Ecoscience — Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
}
