import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Volta ao topo a cada mudança de página (o navegador não faz isso sozinho em SPAs).
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
