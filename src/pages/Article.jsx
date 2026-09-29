import Typography from '@mui/material/Typography';
import ContentPage from '../components/ContentPage.jsx';
import images from '../assets/images.js';
import usePageTitle from '../hooks/usePageTitle.js';

// Renderiza qualquer artigo definido em data/articles.js
export default function Article({ article }) {
  usePageTitle(article.pageTitle);

  return (
    <ContentPage>
      <Typography component="h1" variant="h1">
        {article.title}
      </Typography>
      {article.blocks.map((block, index) => {
        switch (block.type) {
          case 'h2':
            return (
              <Typography key={index} component="h2" variant="h2">
                {block.text}
              </Typography>
            );
          case 'p':
            return (
              <Typography key={index} component="p">
                {block.text}
              </Typography>
            );
          case 'img':
            return <img key={index} src={images[block.image]} alt={block.alt} />;
          case 'list':
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item.term}>
                    <strong>{item.term}</strong> {item.text}
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </ContentPage>
  );
}
