import ContentPage from '../components/ContentPage.jsx';
import images from '../assets/images.js';
import usePageTitle from '../hooks/usePageTitle.js';

export default function Impact() {
  usePageTitle('Ecoscience - Impacto');

  return (
    <ContentPage>
      <h1>Nosso Impacto no Meio Ambiente</h1>
      <p>
        O Ecoscience nasceu com a missão de informar, conscientizar e ajudar pessoas a entenderem e reduzirem sua
        pegada ambiental. Acreditamos que pequenas atitudes podem gerar grandes mudanças. Por isso, disponibilizamos
        ferramentas como a <strong>Calculadora de Carbono</strong> e o <strong>EcoBot</strong> para orientar escolhas
        mais sustentáveis.
      </p>

      <img src={images.pegada} alt="Pegada de carbono" className="img-poluicao" />

      <h2>Calculadora de Carbono</h2>
      <p>
        A <strong>Calculadora de Carbono</strong> do Ecoscience permite que você descubra o quanto suas atividades
        diárias impactam o planeta. Com base em dados sobre transporte, alimentação, energia e consumo, ela estima sua
        emissão de CO₂ e oferece sugestões práticas para reduzir esse valor. Ao entender sua pegada ecológica, você
        pode adotar hábitos mais conscientes e contribuir para frear as mudanças climáticas.
      </p>

      <img src={images.ecobot} alt="EcoBot assistente virtual" className="img-poluicao" />

      <h2>EcoBot - Seu Assistente Ambiental</h2>
      <p>
        O <strong>EcoBot</strong> é um assistente virtual pronto para tirar dúvidas, dar dicas de sustentabilidade e
        ensinar práticas ecológicas de forma simples e rápida. Ele foi projetado para ser um aliado no seu dia a dia,
        respondendo perguntas sobre reciclagem, consumo consciente, energia limpa e muito mais. A interação com o
        EcoBot facilita o aprendizado e incentiva mudanças positivas no comportamento ambiental.
      </p>

      <img src={images.atitude} alt="Atitudes sustentáveis" className="img-poluicao" />

      <h2>Juntos por um Futuro Sustentável</h2>
      <p>
        Cada passo conta! Seja plantando uma árvore, optando por transporte coletivo, reduzindo o uso de plásticos ou
        aprendendo com o EcoBot, suas ações têm um impacto. O Ecoscience é mais que um site, é uma comunidade voltada
        à transformação ambiental. Com informação acessível e ferramentas úteis, acreditamos que todos podem ser parte
        da solução.
      </p>
    </ContentPage>
  );
}
