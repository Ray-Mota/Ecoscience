import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../components/Header.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { questions } from '../data/questions.js';
import { calculateFootprint, messageForFootprint, nextQuestionIndex } from '../utils/carbonFootprint.js';

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
    setTimeout(() => {
      const total = calculateFootprint(answers);
      setResult({ total, message: messageForFootprint(total) });
      setStep(STEP_RESULT);
    }, 1200);
  };

  const restart = () => {
    setAnswers({});
    setCurrentIndex(0);
    setResult(null);
    setStep(STEP_ANSWERING);
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Header />
      <Container maxWidth="sm" sx={{ py: { xs: 5, md: 8 } }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ height: 8, borderRadius: 999, mb: 3, backgroundColor: 'divider' }}
          color="secondary"
        />

        <Paper
          sx={{
            p: { xs: 3, md: 5 },
            minHeight: 380,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: step === STEP_ANSWERING ? 'space-between' : 'center',
            alignItems: step === STEP_ANSWERING ? 'stretch' : 'center',
            textAlign: step === STEP_ANSWERING ? 'left' : 'center',
            animation: 'fade-in-up 0.35s ease',
          }}
        >
          {step === STEP_LOADING && (
            <>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Calculando sua pegada de carbono...
              </Typography>
              <CircularProgress color="secondary" size={56} thickness={4} />
            </>
          )}

          {step === STEP_ANSWERING && (
            <Typography variant="h5" sx={{ mb: 4 }}>
              {question.question}
            </Typography>
          )}

          {step === STEP_ANSWERING && (
            <Stack spacing={1.5}>
              {question.options.map((option) => {
                const selected = answers[currentIndex] === option.value;
                return (
                  <Button
                    key={option.value}
                    onClick={() => selectOption(option.value)}
                    variant={selected ? 'contained' : 'outlined'}
                    color={selected ? 'primary' : 'inherit'}
                    sx={{
                      justifyContent: 'flex-start',
                      py: 1.5,
                      px: 3,
                      borderRadius: 3,
                      borderColor: 'divider',
                      color: selected ? undefined : 'text.primary',
                    }}
                  >
                    {option.text}
                  </Button>
                );
              })}
            </Stack>
          )}

          {step === STEP_RESULT && result && (
            <>
              <Typography variant="h5">Seu resultado:</Typography>
              <Typography variant="h3" color="primary.main" sx={{ my: 2 }}>
                {result.total} kg de carbono por semana
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 400 }}>
                {result.message}
              </Typography>
              <Button onClick={restart} variant="contained" color="secondary" size="large">
                Reiniciar
              </Button>
            </>
          )}
        </Paper>

        {step === STEP_ANSWERING && (
          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            <Button
              onClick={handleBack}
              disabled={currentIndex === 0}
              variant="outlined"
              color="inherit"
              fullWidth
              size="large"
              sx={{ borderColor: 'divider', color: 'text.primary' }}
            >
              Anterior
            </Button>
            <Button onClick={handleNext} disabled={!canAdvance} variant="contained" fullWidth size="large">
              {isLast ? 'Calcular' : 'Próximo'}
            </Button>
          </Stack>
        )}
      </Container>
    </Box>
  );
}
