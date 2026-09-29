// Conteúdo dos artigos (extraído das páginas polu/aqu/sust/reci/ener.html originais).
// Tipos de bloco: 'h2', 'p', 'img' (image = chave em assets/images.js) e 'list'.
// Para adicionar um artigo novo, basta incluir um objeto aqui: a rota e o card da home são gerados a partir desta lista.

export const articles = [
  {
    slug: "poluicao",
    label: "Poluição",
    cardImage: "poluicao",
    pageTitle: "Ecoscience - Poluição",
    title: "Poluição Ambiental",
    blocks: [
      {
        type: "p",
        text: "A poluição ambiental é um dos maiores desafios enfrentados pela humanidade. Ela afeta o ar, a água e o solo, comprometendo a saúde dos seres vivos e o equilíbrio dos ecossistemas."
      },
      {
        type: "img",
        image: "ar",
        alt: "Poluição do ar"
      },
      {
        type: "h2",
        text: "Poluição do Ar"
      },
      {
        type: "p",
        text: "A poluição do ar é causada pela liberação de substâncias tóxicas na atmosfera, como dióxido de enxofre, óxidos de nitrogênio, monóxido de carbono e partículas finas. Essas emissões resultam principalmente da queima de combustíveis fósseis por veículos, indústrias, termelétricas e queimadas. Ela prejudica a saúde humana, causando doenças respiratórias, cardiovasculares e agravando condições como asma e bronquite. A poluição atmosférica também contribui para o aquecimento global e a chuva ácida, que afeta solos, vegetações e ecossistemas aquáticos. Cidades com alta densidade de veículos e pouca arborização enfrentam picos críticos de má qualidade do ar. Medidas como controle de emissões, incentivo a transportes limpos, fiscalização industrial e ampliação de áreas verdes urbanas são essenciais para combater esse problema."
      },
      {
        type: "img",
        image: "agua",
        alt: "Poluição da água"
      },
      {
        type: "h2",
        text: "Poluição da Água"
      },
      {
        type: "p",
        text: "A poluição hídrica compromete a qualidade de rios, lagos e oceanos, prejudicando o abastecimento humano, a fauna aquática e os ecossistemas. Suas principais causas incluem esgoto doméstico sem tratamento, resíduos industriais, agrotóxicos, metais pesados e descarte de lixo diretamente nos corpos d'água. Isso afeta diretamente populações ribeirinhas, agricultura irrigada e o equilíbrio ecológico. Muitos rios urbanos tornaram-se esgotos a céu aberto. Além disso, a poluição hídrica pode causar doenças como cólera, hepatite A e giardíase. A recuperação de rios exige investimentos em saneamento básico, fiscalização ambiental, educação da população e recuperação das matas ciliares que protegem os cursos d'água."
      },
      {
        type: "img",
        image: "solo",
        alt: "Poluição do solo"
      },
      {
        type: "h2",
        text: "Poluição do Solo"
      },
      {
        type: "p",
        text: "A contaminação do solo é um grave problema ambiental resultante do uso excessivo de agrotóxicos, descarte inadequado de lixo industrial e mineração. Agrotóxicos contaminam a terra, os lençóis freáticos e podem entrar na cadeia alimentar. Já metais pesados como chumbo, mercúrio e cádmio permanecem no solo por décadas, afetando plantas, animais e a saúde humana. Solos contaminados têm sua fertilidade reduzida e tornam-se inadequados para a agricultura e ocupação humana. A descontaminação é cara e demorada, exigindo técnicas como biorremediação ou escavação e substituição. Incentivar práticas agroecológicas, controlar a aplicação de defensivos e regulamentar melhor o descarte industrial são formas de prevenção."
      },
      {
        type: "img",
        image: "industria",
        alt: "Poluição industrial"
      },
      {
        type: "h2",
        text: "Indústria e Poluição"
      },
      {
        type: "p",
        text: "A atividade industrial é uma das principais responsáveis pela emissão de poluentes atmosféricos, hídricos e sólidos. O processo de produção, especialmente em indústrias químicas, petroquímicas, de papel e siderúrgicas, gera resíduos que, se não forem tratados adequadamente, impactam o meio ambiente. Além da poluição direta, há consumo intensivo de água, energia e uso de matérias-primas não renováveis. Tecnologias limpas, filtros e sistemas de tratamento são alternativas para reduzir os impactos, mas exigem investimento e fiscalização. A responsabilidade ambiental corporativa tem crescido, mas ainda é desigual. Incentivos à inovação e normas mais rigorosas podem direcionar a indústria a caminhos mais sustentáveis."
      },
      {
        type: "img",
        image: "transporte",
        alt: "Poluição urbana"
      },
      {
        type: "h2",
        text: "Transporte e Poluição Urbana"
      },
      {
        type: "p",
        text: "O setor de transporte, sobretudo o individual motorizado, é um grande emissor de gases poluentes e um dos principais causadores da poluição do ar em áreas urbanas. O uso excessivo de carros e motos libera dióxido de carbono, monóxido de carbono e outros poluentes prejudiciais à saúde e ao clima. O trânsito intenso, os engarrafamentos e a falta de transporte público de qualidade agravam o problema. Além disso, o asfalto e a impermeabilização do solo aumentam o calor urbano e dificultam o escoamento de águas pluviais. Promover mobilidade urbana sustentável, com mais ciclovias, transporte coletivo eficiente e veículos elétricos, é essencial para cidades mais limpas e saudáveis."
      },
      {
        type: "h2",
        text: "Como Amenizar?"
      },
      {
        type: "p",
        text: "Amenizar a poluição ambiental requer um conjunto de ações coordenadas entre governo, empresas e sociedade. É fundamental investir em saneamento básico, transporte sustentável, reciclagem, tecnologias limpas e controle rigoroso da poluição industrial e agrícola. A educação ambiental também é uma ferramenta poderosa para conscientizar a população sobre práticas sustentáveis no dia a dia. Políticas públicas devem ser fortalecidas com fiscalização e incentivos a práticas ecológicas. Cidades mais verdes, com arborização e infraestrutura adequada, também colaboram para melhorar a qualidade ambiental. Cada ação individual — como reduzir o uso de plástico, andar menos de carro e separar o lixo corretamente — contribui para um planeta menos poluído."
      }
    ]
  },
  {
    slug: "aquecimento",
    label: "Aquecimento",
    cardImage: "aquec",
    pageTitle: "Ecoscience - Aquecimento",
    title: "Aquecimento Global e Mudanças Climáticas",
    blocks: [
      {
        type: "h2",
        text: "O que é o Aquecimento Global?"
      },
      {
        type: "p",
        text: "O aquecimento global é o aumento anormal da temperatura média da Terra, causado principalmente pelo acúmulo de gases de efeito estufa (GEE) na atmosfera. Esse fenômeno intensifica o efeito estufa natural, que é essencial para manter a Terra habitável, mas que, em excesso, leva ao superaquecimento do planeta."
      },
      {
        type: "p",
        text: "A queima de combustíveis fósseis (como petróleo, carvão e gás natural), o desmatamento e atividades industriais são as principais fontes desses gases. Desde a Revolução Industrial, as temperaturas globais vêm aumentando, sendo os últimos anos os mais quentes já registrados. Cientistas do IPCC alertam que limitar o aumento da temperatura a 1,5 °C é crucial para evitar impactos catastróficos. O aquecimento global é o motor central das mudanças climáticas."
      },
      {
        type: "h2",
        text: "Quais são as Mudanças Climáticas?"
      },
      {
        type: "p",
        text: "Mudanças climáticas são alterações duradouras nos padrões do clima global ou regional, incluindo variações de temperatura, precipitação, ventos e eventos extremos. Embora o clima da Terra mude naturalmente, as mudanças atuais estão ocorrendo de forma rápida e intensa devido às atividades humanas."
      },
      {
        type: "p",
        text: "Entre os efeitos observados estão o aumento da frequência de secas, enchentes, ondas de calor, furacões mais intensos, elevação do nível do mar e alteração dos ciclos das chuvas. Elas afetam diretamente a produção de alimentos, a biodiversidade, a saúde e a infraestrutura urbana, agravando desigualdades sociais."
      },
      {
        type: "h2",
        text: "O que causa isso?"
      },
      {
        type: "p",
        text: "As principais causas do aquecimento global e das mudanças climáticas estão ligadas às atividades humanas que emitem gases de efeito estufa (GEE). A queima de combustíveis fósseis para transporte, energia e indústria libera grandes quantidades de dióxido de carbono (CO₂)."
      },
      {
        type: "p",
        text: "O desmatamento reduz a absorção de CO₂ e libera mais carbono na atmosfera. A agropecuária emite metano (CH₄) e óxidos de nitrogênio (N₂O), especialmente na criação de gado e uso de fertilizantes. O modelo econômico baseado em crescimento ilimitado e exploração de recursos é um fator estrutural dessa crise."
      },
      {
        type: "h2",
        text: "Quais são os impactos gerados?"
      },
      {
        type: "p",
        text: "Os impactos das mudanças climáticas são amplos: aumento do nível dos oceanos, perda de biodiversidade, derretimento de geleiras, desertificação de áreas férteis, acidificação dos oceanos e alteração dos ciclos hidrológicos."
      },
      {
        type: "p",
        text: "Esses efeitos geram insegurança alimentar, escassez de água e deslocamentos populacionais. Eventos extremos como enchentes e secas se intensificam, afetando a saúde, a agricultura e a economia. Além disso, há impactos sociais, como aumento da pobreza e desigualdade."
      },
      {
        type: "h2",
        text: "Regiões mais afetadas"
      },
      {
        type: "p",
        text: "Algumas regiões são mais vulneráveis devido à localização, infraestrutura ou dependência de recursos naturais. Pequenas ilhas e áreas costeiras enfrentam risco de submersão. Norte da África, Oriente Médio e o Nordeste do Brasil sofrem com desertificação e escassez hídrica."
      },
      {
        type: "p",
        text: "Regiões tropicais estão mais expostas a eventos extremos. Povos indígenas e países em desenvolvimento são os mais afetados, embora pouco tenham contribuído para o problema. O Ártico aquece rapidamente e áreas urbanas enfrentam enchentes, ilhas de calor e crises de saneamento."
      },
      {
        type: "h2",
        text: "De que maneira podemos reduzir?"
      },
      {
        type: "p",
        text: "A redução dos impactos envolve mitigação e adaptação. A mitigação inclui o uso de energias renováveis, mobilidade sustentável, eficiência energética, reflorestamento e economia circular. Já a adaptação envolve construir infraestrutura resiliente, garantir segurança hídrica e proteger comunidades vulneráveis."
      },
      {
        type: "p",
        text: "Políticas públicas, acordos internacionais como o Acordo de Paris, educação ambiental e ações individuais são essenciais. Cada pessoa pode contribuir com hábitos sustentáveis no cotidiano. A crise climática exige ações urgentes em todas as escalas."
      }
    ]
  },
  {
    slug: "sustentabilidade",
    label: "Sustentabilidade",
    cardImage: "sustent",
    pageTitle: "Ecoscience - Sustentabilidade",
    title: "Sustentabilidade e Desenvolvimento Sustentável",
    blocks: [
      {
        type: "h2",
        text: "Tripé da sustentabilidade"
      },
      {
        type: "p",
        text: "O conceito de sustentabilidade baseia-se em três pilares interdependentes: ambiental, social e econômico — conhecido como tripé da sustentabilidade ou “triple bottom line”. O pilar ambiental foca na preservação dos recursos naturais e na redução dos impactos ao meio ambiente. O social envolve a garantia de direitos, justiça social, qualidade de vida e inclusão. Já o econômico busca o crescimento com responsabilidade, que promova empregos, inovação e distribuição justa de riquezas."
      },
      {
        type: "p",
        text: "Um projeto ou política sustentável deve considerar todos esses aspectos, equilibrando interesses de curto prazo com a preservação das gerações futuras. Quando um dos pilares é negligenciado, todo o sistema entra em desequilíbrio. Esse tripé é a base de diversas práticas de gestão em empresas, governos e organizações da sociedade civil comprometidas com o desenvolvimento sustentável."
      },
      {
        type: "h2",
        text: "Educação ambiental"
      },
      {
        type: "p",
        text: "A educação ambiental é uma ferramenta fundamental para formar cidadãos conscientes de seu papel na proteção do meio ambiente e na construção de uma sociedade mais justa e sustentável. Ela vai além da sala de aula, sendo essencial em comunidades, empresas, meios de comunicação e espaços públicos."
      },
      {
        type: "p",
        text: "Seu objetivo é promover a compreensão crítica sobre os problemas ambientais e incentivar práticas cotidianas que contribuam para a preservação da natureza. Além disso, estimula a empatia, a responsabilidade e o pensamento sistêmico, conectando temas como consumo, biodiversidade, energia e resíduos. Incluir a educação ambiental nos currículos escolares e em programas sociais ajuda a fortalecer políticas públicas e a cultura da sustentabilidade."
      },
      {
        type: "h2",
        text: "Ecoturismo e sustentabilidade"
      },
      {
        type: "p",
        text: "O ecoturismo é uma modalidade de turismo que promove a valorização do meio ambiente e das comunidades locais, unindo lazer, educação e conservação. Diferente do turismo convencional, o ecoturismo busca minimizar impactos ambientais e gerar benefícios econômicos para populações tradicionais e indígenas."
      },
      {
        type: "p",
        text: "Práticas como trilhas guiadas, observação de aves, visita a parques naturais e vivências culturais são comuns nesse tipo de turismo. Quando bem estruturado, o ecoturismo incentiva a proteção de áreas naturais, fortalece a identidade local e estimula o uso sustentável dos recursos. No entanto, requer planejamento, capacitação da comunidade e controle de fluxos turísticos."
      },
      {
        type: "h2",
        text: "Economia verde"
      },
      {
        type: "p",
        text: "A economia verde é um modelo de desenvolvimento que alia crescimento econômico com redução das emissões de carbono, eficiência no uso de recursos e inclusão social. Ela propõe a transição de uma economia baseada em combustíveis fósseis e degradação ambiental para uma economia de baixo carbono, regenerativa e circular."
      },
      {
        type: "p",
        text: "Setores como energias renováveis, agricultura orgânica, construção sustentável, transporte limpo e tecnologias ecológicas são exemplos da economia verde em prática. Governos, empresas e investidores têm papel essencial na promoção de políticas, incentivos e regulamentações que estimulem essa nova economia. A economia verde é um caminho promissor para aliar preservação ambiental e prosperidade econômica."
      },
      {
        type: "h2",
        text: "Indicadores de sustentabilidade"
      },
      {
        type: "p",
        text: "Indicadores de sustentabilidade são métricas utilizadas para avaliar o desempenho ambiental, social e econômico de organizações, cidades, países ou projetos. Eles ajudam a medir o progresso em direção a metas sustentáveis e a tomar decisões mais informadas."
      },
      {
        type: "p",
        text: "Exemplos incluem a Pegada Ecológica, o Índice de Desenvolvimento Humano Sustentável (IDH-S), a emissão de CO₂ per capita, o consumo de água, o acesso à educação e saúde, entre outros. Esses indicadores também são utilizados em relatórios de sustentabilidade de empresas, permitindo maior transparência e responsabilidade socioambiental."
      },
      {
        type: "h2",
        text: "Produção e consumo sustentáveis"
      },
      {
        type: "p",
        text: "Produção e consumo sustentáveis envolvem a criação e o uso de bens e serviços que atendam às necessidades humanas com o menor impacto possível sobre o meio ambiente e a sociedade. Isso significa produzir com responsabilidade, utilizando menos recursos naturais, energia e gerando menos resíduos, ao mesmo tempo em que se oferece produtos duráveis, recicláveis e éticos."
      },
      {
        type: "p",
        text: "Do lado do consumidor, significa optar por produtos locais, orgânicos, de empresas comprometidas com a sustentabilidade e evitar o desperdício. Iniciativas como selos verdes, certificações ambientais, logística reversa e educação do consumidor têm contribuído para esse avanço. A produção e o consumo sustentáveis são fundamentais para atingir os Objetivos de Desenvolvimento Sustentável (ODS) da ONU."
      }
    ]
  },
  {
    slug: "reciclagem",
    label: "Reciclagem",
    cardImage: "recic",
    pageTitle: "Ecoscience - Reciclagem",
    title: "Gestão de Resíduos e Reciclagem",
    blocks: [
      {
        type: "h2",
        text: "Coleta seletiva e separação correta"
      },
      {
        type: "p",
        text: "A coleta seletiva é essencial para a gestão adequada dos resíduos sólidos urbanos. Consiste na separação dos resíduos em categorias como papel, plástico, vidro, metal e orgânicos, possibilitando sua reciclagem ou reaproveitamento. Quando feita corretamente, a coleta seletiva reduz a quantidade de lixo enviado aos aterros sanitários, facilita a reciclagem e diminui os impactos ambientais."
      },
      {
        type: "p",
        text: "A separação começa em casa, com a conscientização das famílias sobre como e onde descartar cada tipo de resíduo. Municípios precisam oferecer estrutura adequada, como lixeiras específicas, rotas de coleta diferenciadas e centros de triagem. Essa prática também fomenta a economia circular e pode gerar renda para catadores e cooperativas. A participação da população e a educação ambiental são fatores-chave para o sucesso dessa política."
      },
      {
        type: "h2",
        text: "Redução de lixo doméstico"
      },
      {
        type: "p",
        text: "Reduzir o lixo doméstico é um dos principais passos para diminuir a pressão sobre os sistemas de coleta e os aterros sanitários. Muitas vezes, o lixo gerado em casa poderia ser evitado com pequenas mudanças de hábitos, como evitar produtos com embalagens excessivas, comprar a granel, reutilizar potes e sacolas e planejar melhor as compras para evitar desperdícios alimentares."
      },
      {
        type: "p",
        text: "A compostagem doméstica, o reaproveitamento de materiais e a substituição de descartáveis por reutilizáveis (como garrafas, canudos e sacolas de pano) ajudam significativamente. Além disso, campanhas educativas podem incentivar a adoção de práticas mais sustentáveis, especialmente nas grandes cidades onde a produção per capita de lixo é maior. A mudança começa na consciência individual, mas deve ser apoiada por políticas públicas e incentivos."
      },
      {
        type: "h2",
        text: "Reciclagem de eletrônicos"
      },
      {
        type: "p",
        text: "A reciclagem de eletrônicos, também conhecida como logística reversa de eletroeletrônicos, é uma necessidade crescente frente ao consumo acelerado e descarte precoce de celulares, computadores, TVs e outros dispositivos. Esses equipamentos contêm metais preciosos, mas também substâncias tóxicas como chumbo, mercúrio e cádmio, que podem contaminar solos e águas."
      },
      {
        type: "p",
        text: "Quando descartados corretamente, esses materiais podem ser reaproveitados na indústria, reduzindo a necessidade de extração de novos recursos naturais. Leis como a Política Nacional de Resíduos Sólidos (PNRS) obrigam fabricantes e importadores a oferecer locais de descarte adequado. A conscientização do consumidor também é essencial para que a reciclagem eletrônica funcione plenamente e não sobrecarregue o meio ambiente."
      },
      {
        type: "h2",
        text: "Compostagem de resíduos orgânicos"
      },
      {
        type: "p",
        text: "A compostagem é um processo biológico de decomposição da matéria orgânica (restos de comida, folhas, cascas, etc.) transformando-a em adubo natural. É uma alternativa sustentável ao envio de resíduos orgânicos para os aterros sanitários, onde contribuiriam para a emissão de metano — um gás de efeito estufa."
      },
      {
        type: "p",
        text: "A compostagem pode ser feita em escala doméstica, comunitária ou industrial, com diferentes técnicas como composteiras domésticas, minhocários ou leiras abertas. Além de reduzir o volume de lixo, a compostagem promove a educação ambiental e fortalece a agricultura urbana. Cidades que incentivam essa prática contribuem para a redução das emissões de gases poluentes, o reaproveitamento de resíduos e a fertilização natural de jardins e hortas."
      },
      {
        type: "h2",
        text: "Reaproveitamento de materiais na indústria"
      },
      {
        type: "p",
        text: "Indústrias têm um papel central na gestão de resíduos, tanto pelos resíduos que geram quanto pelas oportunidades de reaproveitamento. O reaproveitamento de materiais no processo produtivo reduz custos, preserva recursos naturais e diminui a geração de lixo."
      },
      {
        type: "p",
        text: "Setores como construção civil, têxtil, metalúrgico e plástico já vêm adotando práticas como a reutilização de resíduos de produção, reciclagem de aparas e aproveitamento de energia dos resíduos. Essa prática também está ligada ao conceito de “indústria 4.0” e à sustentabilidade corporativa. No entanto, ainda há obstáculos, como a falta de incentivos, tecnologias acessíveis e regulamentações claras. Incentivar a economia circular na indústria é um passo fundamental para a sustentabilidade."
      },
      {
        type: "h2",
        text: "Economia circular e resíduos como recurso"
      },
      {
        type: "p",
        text: "A economia circular propõe a substituição do modelo linear de produção (extrair, produzir, descartar) por um ciclo onde os resíduos se tornam insumos para novos produtos. Nesse modelo, materiais são constantemente reutilizados, reciclados e revalorizados."
      },
      {
        type: "p",
        text: "Isso gera inovação, reduz o impacto ambiental e estimula o uso eficiente dos recursos naturais. Embalagens retornáveis, design ecológico, logística reversa e recuperação de resíduos são pilares dessa economia. Empresas e governos têm papel essencial em estruturar sistemas circulares e incentivar novos modelos de negócio. O consumidor também é parte importante, ao escolher produtos duráveis, recicláveis e de baixo impacto. A economia circular é uma resposta prática e eficiente à crise de recursos e ao excesso de resíduos."
      }
    ]
  },
  {
    slug: "energias",
    label: "Energias renováveis",
    cardImage: "energ",
    pageTitle: "Ecoscience - Energias Renováveis",
    title: "Energias Renováveis e Alternativas",
    blocks: [
      {
        type: "h2",
        text: "Energia Solar: tipos e aplicações"
      },
      {
        type: "p",
        text: "A energia solar é obtida por meio da radiação do sol e pode ser convertida em energia térmica ou elétrica. É uma das fontes renováveis mais promissoras devido à sua abundância, disponibilidade em praticamente todo o planeta e baixa emissão de poluentes. Existem dois principais tipos: a energia solar fotovoltaica, que converte a luz solar diretamente em eletricidade por meio de painéis solares, e a energia solar térmica, que utiliza o calor do sol para aquecer fluidos e gerar energia ou aquecer ambientes."
      },
      {
        type: "p",
        text: "A aplicação vai desde pequenos sistemas residenciais e iluminação pública até grandes usinas solares conectadas à rede elétrica. A energia solar também é utilizada em áreas remotas, bombeamento de água, dessalinização e até em satélites. Entre os benefícios estão a sustentabilidade, a redução das contas de energia e a independência energética. No entanto, há desafios como o alto custo inicial, a dependência da luz solar direta e a necessidade de áreas amplas para instalação em larga escala."
      },
      {
        type: "h2",
        text: "Energia Eólica: vantagens e desafios"
      },
      {
        type: "p",
        text: "A energia eólica é gerada a partir do vento, por meio de aerogeradores que transformam a energia cinética do ar em energia elétrica. É uma fonte renovável, limpa e de baixo impacto durante a operação. As turbinas eólicas podem ser instaladas tanto em terra firme (onshore) quanto no mar (offshore), com destaque para países com ventos constantes e intensos, como o Brasil, Dinamarca e Alemanha."
      },
      {
        type: "p",
        text: "Entre as vantagens da energia eólica estão: a baixa emissão de gases de efeito estufa, a diversificação da matriz energética e o custo de operação relativamente baixo após a instalação. No entanto, também enfrenta desafios, como a intermitência do vento, impacto visual e sonoro, interferência na fauna, e a necessidade de áreas amplas. O armazenamento de energia e o planejamento da rede elétrica são essenciais para garantir o fornecimento estável."
      },
      {
        type: "h2",
        text: "Energia Geotérmica"
      },
      {
        type: "p",
        text: "A energia geotérmica é proveniente do calor interno da Terra, aproveitado para gerar eletricidade ou aquecer ambientes. Esse calor é armazenado em rochas e fluidos sob a superfície terrestre, especialmente em áreas com atividade vulcânica. A captação é feita por meio de perfurações que trazem o calor à superfície, utilizando-o em turbinas ou sistemas de aquecimento."
      },
      {
        type: "p",
        text: "Suas vantagens incluem: ser uma fonte constante e previsível, ter baixas emissões e ocupar pouco espaço. Contudo, exige localizações geológicas específicas e pode causar impactos como liberação de gases subterrâneos e pequenos abalos sísmicos. Apesar de pouco explorada no Brasil, tem grande potencial sustentável."
      },
      {
        type: "h2",
        text: "Energia Hidrelétrica e Impactos Ambientais"
      },
      {
        type: "p",
        text: "A energia hidrelétrica é a principal fonte elétrica no Brasil e utiliza a força da água em movimento para gerar eletricidade. É renovável e tem operação de baixo custo, mas sua construção pode alagar áreas extensas, deslocar comunidades e afetar ecossistemas aquáticos."
      },
      {
        type: "p",
        text: "Também pode emitir metano e ser afetada por secas. Por isso, é importante equilibrar geração e preservação ambiental, investindo em outras fontes renováveis para diversificar a matriz energética."
      },
      {
        type: "h2",
        text: "Comparação entre Fontes Renováveis"
      },
      {
        type: "p",
        text: "Todas as fontes renováveis — solar, eólica, hidrelétrica, geotérmica e biomassa — ajudam a reduzir emissões de carbono. Porém, variam em potencial, custo, impacto e viabilidade:"
      },
      {
        type: "list",
        items: [
          {
            term: "Solar:",
            text: "versátil, mas depende do sol e tem custo inicial alto."
          },
          {
            term: "Eólica:",
            text: "limpa e barata, porém intermitente e afeta a paisagem."
          },
          {
            term: "Hidrelétrica:",
            text: "estável, mas com grandes impactos sociais e ambientais."
          },
          {
            term: "Geotérmica:",
            text: "constante e eficiente, mas restrita a locais específicos."
          },
          {
            term: "Biomassa:",
            text: "reaproveita resíduos, mas pode poluir se mal gerida."
          }
        ]
      },
      {
        type: "h2",
        text: "Armazenamento e Distribuição de Energia Renovável"
      },
      {
        type: "p",
        text: "Fontes como solar e eólica são intermitentes, exigindo sistemas de armazenamento eficientes para garantir fornecimento contínuo. Baterias de íon-lítio, armazenamento térmico e hidrelétricas reversíveis são opções em expansão."
      },
      {
        type: "p",
        text: "A distribuição também precisa de redes inteligentes (smart grids), que integram produção descentralizada e otimizam o consumo. O avanço dessas tecnologias é essencial para a transição a uma matriz energética limpa e resiliente."
      }
    ]
  }
];
