import { useMemo, useState } from 'react';
import Header from '../components/Header.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { questions } from '../data/questions.js';
import { calculateFootprint, messageForFootprint, nextQuestionIndex } from '../utils/carbonFootprint.js';
import './Calculator.css';

const STEP_ANSWERING = 'answering';
const STEP_LOADING = 'loading';
const STEP_RESULT = 'result';

export default function Calculator() {
  usePageTitle('Calculadora de Carbono');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(STEP_ANSWERING);
  const [result, setResult] = useState(null);

  const question = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const canAdvance = Boolean(answers[currentIndex]);
  const progress = useMemo(() => ((currentIndex + 1) / questions.length) * 100, [currentIndex]);

  const selectOption = (value) => {
    setAnswers((prev) => ({ ...prev, [currentIndex]: value }));
  };

  const handleNext = () => {
    if (!canAdvance) return;

    if (isLast) {
      finish();
      return;
    }

    setCurrentIndex((prev) => nextQuestionIndex(prev, answers));
  };

  const handleBack = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const finish = () => {
    setStep(STEP_LOADING);
    // Mesmo tempo de "cálculo" do original, para manter o efeito do spinner.
    setTimeout(() => {
      const total = calculateFootprint(answers);
      setResult({ total, message: messageForFootprint(total) });
      setStep(STEP_RESULT);
    }, 1500);
  };

  const restart = () => {
    setAnswers({});
    setCurrentIndex(0);
    setResult(null);
    setStep(STEP_ANSWERING);
  };

  return (
    <div className="calculator-page">
      <Header />

      <div className="calculator-page__body">
        <div className="calculator">
          <div className="calculator__progress-track">
            <div className="calculator__progress-bar" style={{ width: `${progress}%` }} />
          </div>

          {step === STEP_LOADING && (
            <div className="calculator__card calculator__card--center">
              <h2>Calculando sua pegada de carbono...</h2>
              <div className="calculator__spinner" />
            </div>
          )}

          {step === STEP_ANSWERING && (
            <div className="calculator__card">
              <h2 className="calculator__question">{question.question}</h2>
              <div className="calculator__options">
                {question.options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={
                      'calculator__option' +
                      (answers[currentIndex] === option.value ? ' calculator__option--selected' : '')
                    }
                    onClick={() => selectOption(option.value)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === STEP_RESULT && result && (
            <div className="calculator__card calculator__card--center">
              <h2>Seu resultado:</h2>
              <p className="calculator__result-value">{result.total} kg de carbono por semana</p>
              <p className="calculator__result-message">{result.message}</p>
              <button type="button" className="calculator__restart" onClick={restart}>
                Reiniciar
              </button>
            </div>
          )}

          {step === STEP_ANSWERING && (
            <div className="calculator__nav">
              <button
                type="button"
                className="calculator__nav-btn calculator__nav-btn--back"
                onClick={handleBack}
                disabled={currentIndex === 0}
              >
                Anterior
              </button>
              <button
                type="button"
                className="calculator__nav-btn calculator__nav-btn--next"
                onClick={handleNext}
                disabled={!canAdvance}
              >
                {isLast ? 'Calcular' : 'Próximo'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
