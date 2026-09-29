import ContentPage from '../components/ContentPage.jsx';
import images from '../assets/images.js';
import usePageTitle from '../hooks/usePageTitle.js';

// Renderiza qualquer artigo definido em data/articles.js
export default function Article({ article }) {
  usePageTitle(article.pageTitle);

  return (
    <ContentPage>
      <h1>{article.title}</h1>
      {article.blocks.map((block, index) => {
        switch (block.type) {
          case 'h2':
            return <h2 key={index}>{block.text}</h2>;
          case 'p':
            return <p key={index}>{block.text}</p>;
          case 'img':
            return <img key={index} className="img-poluicao" src={images[block.image]} alt={block.alt} />;
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
