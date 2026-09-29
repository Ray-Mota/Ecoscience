import { useEffect, useRef } from 'react';
import Header from '../components/Header.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import './EcoChat.css';

const CHATBOT_ID = '9182781514';

// O EcoChat original embute o widget externo da Chatling via script.
// Aqui o script é injetado uma única vez, na montagem da página.
export default function EcoChat() {
  usePageTitle('Eco Chat');
  const containerRef = useRef(null);

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
    <div className="ecochat-page">
      <Header />
      <div className="ecochat-page__loading">
        <h1>Carregando seu assistente virtual...</h1>
      </div>
      <div id="chtl-inline-bot" ref={containerRef} className="ecochat-page__widget" />
    </div>
  );
}
