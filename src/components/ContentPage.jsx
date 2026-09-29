import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

// Layout compartilhado pela página de Impacto e pelos artigos.
export default function ContentPage({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="md" sx={{ flex: 1, py: { xs: 4, md: 6 } }}>
        <Paper
          sx={{
            p: { xs: 3, md: 6 },
            animation: 'fade-in-up 0.5s ease',
            '& h1': { fontSize: { xs: '1.9rem', md: '2.4rem' }, mb: 3 },
            '& h2': { fontSize: { xs: '1.35rem', md: '1.6rem' }, mt: 5, mb: 1.5, color: 'primary.dark' },
            '& p': { fontSize: '1.05rem', color: 'text.primary', mt: 1.5 },
            '& ul': { pl: 3, mt: 1.5 },
            '& li': { fontSize: '1.05rem', mb: 1 },
            '& img': {
              width: '100%',
              maxWidth: 480,
              display: 'block',
              margin: '28px auto',
              borderRadius: 2,
              boxShadow: '0 8px 24px rgba(11,93,82,0.18)',
            },
          }}
        >
          {children}
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
}
