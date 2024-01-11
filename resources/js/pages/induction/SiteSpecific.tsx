import { Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import appState from '../../store/appState';

interface Answer {
  value: string;
  isTrue: boolean;
}

interface Quest {
  question: string;
  answers: Answer[];
}

const SiteSpecific = observer(() => {

  const [store] = useState(appState);

  const navigator = useNavigate();
  const [slide, setSlide] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);
  const [quest1, setQuest1] = useState<Quest>({
    question: 'Question 1',
    answers: [
      {
        value: 'option1',
        isTrue: true
      },
      {
        value: 'option2',
        isTrue: false
      },
      {
        value: 'option3',
        isTrue: false
      },
      {
        value: 'option4',
        isTrue: false
      }
    ]
  });
  const [quest2, setQuest2] = useState<Quest>({
    question: 'Question 2',
    answers: [
      {
        value: 'option1',
        isTrue: false
      },
      {
        value: 'option2',
        isTrue: true
      },
      {
        value: 'option3',
        isTrue: false
      },
      {
        value: 'option4',
        isTrue: false
      }
    ]
  });

  const [answ1, setAnsw1] = useState<string>('');
  const [answ2, setAnsw2] = useState<string>('');

  const showButton = () => {
    setShow(true);
  }
  const nextSlide = (s: number) => {
    setSlide(s);
  }
  const changeQuiz1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnsw1((event.target as HTMLInputElement).value);
  }
  const changeQuiz2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnsw2((event.target as HTMLInputElement).value);
  }

  return (
    <Grid container sx={{ my: 'auto', pb: '70px', px: { xs: 0.5, sm: 4 } }} pt={5}>
      {slide === 0 ? (
        <>
          <Grid item xs={12} textAlign={'center'} py={1}>
            <ReactPlayer onEnded={showButton} style={{ margin: '0 auto', width: '100%', maxWidth: 'calc(100vw - 16px)' }} controls={true} url='https://youtu.be/HgNcINheJsA?si=sxjGZQ1yolWlhNHa' />
          </Grid>
          <Grid item xs={12} textAlign={'center'} py={1}>
            <Button onClick={() => nextSlide(1)} variant="contained" sx={{ py: 1.5, width: '100%', maxWidth: 335, display: show ? 'inline-flex' : 'none' }}>Next</Button>
          </Grid>
        </>
      ) : slide === 1 ? (
        <>
          <Grid item xs={12} py={1} px={1}>
            <Typography variant='h6' component='p' fontWeight={700}>{quest1.question}</Typography>
          </Grid>
          <Grid item xs={12} py={1} px={1}>
            <FormControl>
              <RadioGroup
                aria-labelledby="languages-label"
                name="language"
                value={answ1}
                onChange={changeQuiz1}
              >
                {quest1.answers.map(answ => (
                  <FormControlLabel disabled={answ1 !== "" ? true : false} value={answ.value} control={<Radio sx={{
                    "&.Mui-checked": {
                      color: answ.isTrue ? 'success.dark' : 'error.dark'
                    },
                    "&.Mui-checked + .MuiFormControlLabel-label": {
                      color: answ.isTrue ? 'success.dark' : 'error.dark'
                    }
                  }} />} label={answ.value} />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} textAlign={'center'} py={1}>
            <Button onClick={() => {
              setShow(false);
              nextSlide(2);
            }} variant="contained" sx={{ py: 1.5, width: '100%', maxWidth: 335, display: answ1 !== "" ? "inline-flex" : "none" }}>Next</Button>
          </Grid>
        </>
      ) : slide === 2 ? (
        <>
          <Grid item xs={12} textAlign={'center'} py={1}>
            <ReactPlayer onEnded={showButton} style={{ margin: '0 auto', width: '100%', maxWidth: 'calc(100vw - 16px)' }} controls={true} url='https://youtu.be/K87aFjB7Ff0?si=ozmvFbiQiqFdLSbU' />
          </Grid>
          <Grid item xs={12} textAlign={'center'} py={1}>
            <Button onClick={() => nextSlide(3)} variant="contained" sx={{ py: 1.5, width: '100%', maxWidth: 335, display: show ? 'inline-flex' : 'none' }}>Next</Button>
          </Grid>
        </>
      ) : slide === 3 ? (
        <>
          <Grid item xs={12} py={1} px={1}>
            <Typography variant='h6' component='p' fontWeight={700}>{quest1.question}</Typography>
          </Grid>
          <Grid item xs={12} py={1} px={1}>
            <FormControl>
              <RadioGroup
                aria-labelledby="languages-label"
                name="language"
                value={answ2}
                onChange={changeQuiz2}
              >
                {quest2.answers.map(answ => (
                  <FormControlLabel disabled={answ2 !== "" ? true : false} value={answ.value} control={<Radio sx={{
                    "&.Mui-checked": {
                      color: answ.isTrue ? 'success.dark' : 'error.dark'
                    },
                    "&.Mui-checked + .MuiFormControlLabel-label": {
                      color: answ.isTrue ? 'success.dark' : 'error.dark'
                    }
                  }} />} label={answ.value} />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} textAlign={'center'} py={1}>
            <Button onClick={() => {
              store.changeSiteInd(true);
              nextSlide(4);
            }} variant="contained" sx={{ py: 1.5, width: '100%', maxWidth: 335, display: answ2 !== "" ? "inline-flex" : "none" }}>Next</Button>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} py={1} px={1}>
            <Typography variant='h5' component='p' textAlign="center" fontWeight={700}>Congratulations!</Typography>
          </Grid>
          <Grid item xs={12} py={1} px={1} textAlign="center">
            <Typography variant='body1' component='p'>You have passed Site Specific Induction</Typography>
          </Grid>
          <Grid item xs={12} textAlign={'center'} py={1}>
            <Button onClick={() => navigator('/induction')} variant="contained" sx={{ py: 1.5, width: '100%', maxWidth: 335, display: answ1 !== "" ? "inline-flex" : "none" }}>Close</Button>
          </Grid>
        </>
      )}
    </Grid>
  )
})

export default SiteSpecific