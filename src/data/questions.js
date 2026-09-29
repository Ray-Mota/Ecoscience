// Perguntas do quiz de pegada de carbono (extraídas de scriptcalc.js).
export const questions = [
  {
    question: 'Qual o seu principal meio de transporte diário?',
    options: [
      { text: 'Carro', value: 'carro' },
      { text: 'Moto', value: 'moto' },
      { text: 'Bicicleta', value: 'Bicicleta' },
      { text: 'Ônibus', value: 'Ônibus' },
      { text: 'A pé', value: 'pé' },
    ],
  },
  {
    question: 'Quantos carros você ou sua família possuem? (alugado ou próprio)',
    options: [
      { text: 'Nenhum', value: 'nenhumc' },
      { text: '1 carro', value: '1c' },
      { text: '2 carros', value: '2c' },
      { text: '3 ou mais', value: '3+c' },
    ],
  },
  {
    question: 'Qual o tipo de fonte do seu carro?',
    options: [
      { text: 'Combustível', value: 'combustível' },
      { text: 'Biocombustível', value: 'biocombustível' },
      { text: 'Elétrico', value: 'elétrico' },
      { text: 'Híbrido', value: 'híbrido' },
    ],
  },
  {
    question: 'Quantas refeições você faz por dia?',
    options: [
      { text: '1-2', value: '1-2' },
      { text: '2-3', value: '2-3' },
      { text: '3-4', value: '3-4' },
      { text: 'Mais que 4', value: '4+' },
    ],
  },
  {
    question: 'Qual o seu tipo de dieta?',
    options: [
      { text: 'Vegana', value: 'Vegana' },
      { text: 'Vegetariana', value: 'Vegetariana' },
      { text: 'Pescetariana', value: 'Pescetariana' },
      { text: 'Carnívora', value: 'Carnívora' },
    ],
  },
  {
    question: 'Com que frequência você consome carne vermelha por semana?',
    options: [
      { text: 'Todo dia', value: 'diariamente' },
      { text: 'Alguns dias', value: 'al_dias' },
      { text: 'Raramente', value: 'raramente' },
    ],
  },
  {
    question: 'Qual o tipo de fonte elétrica para resfriamento em sua moradia?',
    options: [
      { text: 'Aquecimento elétrico', value: 'eletrico' },
      { text: 'Gás natural', value: 'gas' },
      { text: 'Biomassa', value: 'biomassa' },
      { text: 'Sem aquecimento', value: 'semaquecimento' },
    ],
  },
  {
    question: 'Você possui mais de um imóvel?',
    options: [
      { text: 'Sim', value: 'sim' },
      { text: 'Não', value: 'nao' },
    ],
  },
  {
    question: 'Você utiliza eletrodomésticos eficientes em termos de energia?',
    options: [
      { text: 'Sim', value: 'sim' },
      { text: 'Não', value: 'nao' },
    ],
  },
  {
    question: 'Você costuma utilizar sacolas plásticas quando vai fazer alguma compra?',
    options: [
      { text: 'Sim', value: 'sim' },
      { text: 'Não', value: 'nao' },
      { text: 'Raramente', value: 'raramente' },
    ],
  },
];
