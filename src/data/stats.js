// Comparações construídas a partir dos próprios fatores usados na calculadora de carbono
// (ver src/utils/carbonFootprint.js). Servem como estimativas ilustrativas do modelo do site,
// não como dados científicos oficiais.
export const quickStats = [
  {
    icon: 'bike',
    value: '~98%',
    label: 'menos emissão de bicicleta do que de carro',
    detail: 'Comparando os fatores de transporte usados na nossa calculadora.',
  },
  {
    icon: 'restaurant',
    value: '2,3×',
    label: 'a mais numa dieta carnívora vs. vegana',
    detail: 'Diferença estimada entre os tipos de dieta no questionário.',
  },
  {
    icon: 'bolt',
    value: '~40%',
    label: 'a mais de consumo com eletrodomésticos antigos',
    detail: 'Aparelhos pouco eficientes aumentam o gasto médio de energia.',
  },
  {
    icon: 'recycling',
    value: '10 perguntas',
    label: 'para estimar sua pegada semanal',
    detail: 'Transporte, alimentação, moradia e consumo em poucos minutos.',
  },
];
