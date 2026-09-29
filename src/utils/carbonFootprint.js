// Cálculo da pegada de carbono (extraído fielmente de scriptcalc.js).
const transportValues = { carro: 0.1268, moto: 0.0711, Bicicleta: 0.0016, Ônibus: 0.016, pé: 0 };
const carCountValues = { nenhumc: 0, '1c': 1, '2c': 2, '3+c': 3 };
const fuelValues = { combustível: 2.28, biocombustível: 1.722, elétrico: 0.234, híbrido: 0.736 };
const mealValues = { '1-2': 1.5, '2-3': 2.5, '3-4': 3.5, '4+': 4 };
const dietValues = { Vegana: 2.9, Vegetariana: 4.1, Pescetariana: 5.04, Carnívora: 7.2 };
const redMeatValues = { diariamente: 7, al_dias: 4, raramente: 1.5 };
const heatingValues = { eletrico: 0.0817, gas: 2.1, biomassa: 0.2, semaquecimento: 0 };
const propertyValues = { sim: 2, nao: 1 };
const applianceValues = { sim: 0.0817, nao: 1.4 * 0.0817 };
const bagValues = { sim: 1.015, nao: 1, raramente: 1.005 };

export function calculateFootprint(answers) {
  const q1 = transportValues[answers[0]] ?? 0;
  const q2 = carCountValues[answers[1]] ?? 0;
  const q3 = fuelValues[answers[2]] ?? 0;
  const q4 = mealValues[answers[3]] ?? 0;
  const q5 = dietValues[answers[4]] ?? 0;
  const q6 = redMeatValues[answers[5]] ?? 1;
  const q7 = heatingValues[answers[6]] ?? 0;
  const q8 = propertyValues[answers[7]] ?? 0;
  const q9 = applianceValues[answers[8]] ?? 0;
  const q10 = bagValues[answers[9]] ?? 0;

  const total = (q1 + q2 * q3 + q4 + q7 * q8 + q9 + q10) * 7 + q6 * q5;
  return Number(total.toFixed(2));
}

export function messageForFootprint(total) {
  if (total <= 50) {
    return 'Parabéns! Sua pegada de carbono é baixa. Continue com as suas atitudes sustentáveis!';
  }
  if (total <= 100) {
    return 'Sua pegada de carbono está na média. Algumas mudanças simples em sua rotina já ajudariam a baixar a sua pegada!';
  }
  return 'Sua pegada de carbono está muito alta! Pequenas mudanças em sua rotina podem fazer grande diferença na saúde do planeta.';
}

// Regras de pular pergunta (extraídas do listener do botão "Próximo" original):
// pula a pergunta 2 (índice 1) se a resposta for "Nenhum carro"
// pula a pergunta 5 (índice 4) se a dieta não incluir carne
export function nextQuestionIndex(index, answers) {
  if (index === 1 && answers[index] === 'nenhumc') return index + 2;
  if (
    index === 4 &&
    (answers[index] === 'Vegana' || answers[index] === 'Pescetariana' || answers[index] === 'Vegetariana')
  ) {
    return index + 2;
  }
  return index + 1;
}
