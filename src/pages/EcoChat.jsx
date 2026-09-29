import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Header from '../components/Header.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

const CHATBOT_ID = '9182781514';

// O EcoChat original embute o widget externo da Chatling via script.
// O script é injetado uma única vez, na montagem da página.
export default function EcoChat() {
  usePageTitle('Eco Chat');

  useEffect(() => {
    window.chtlConfig = { chatbotId: CHATBOT_ID, display: 'page_inline' };

    const script = document.createElement('script');
    script.async = true;
    script.dataset.id = CHATBOT_ID;
    script.dataset.display = 'page_inline';
    script.id = 'chtl-script';
    script.src = 'https://chatling.ai/js/embed.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      delete window.chtlConfig;
    };
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'primary.dark' }}>
      <Header />
      <Container maxWidth="md" sx={{ py: { xs: 3, md: 5 } }}>
        <Typography variant="h5" align="center" sx={{ color: '#F5F7F4', mb: 3 }}>
          Carregando seu assistente virtual...
        </Typography>
        <Paper sx={{ minHeight: '70vh', p: 0, overflow: 'hidden' }}>
          <Box id="chtl-inline-bot" sx={{ width: '100%', minHeight: '70vh' }} />
        </Paper>
      </Container>
    </Box>
  );
}
