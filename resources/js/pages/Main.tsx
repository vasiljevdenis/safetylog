import { Box, Grid, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Card {
  title: string;
  path: string;
  backgroundColor: string;
}

const Main = () => {

  const initialCards: Card[] = [
    {
      title: 'Induction',
      path: '/induction',
      backgroundColor: 'primary.main'
    },
    {
      title: 'Metrics',
      path: '/metrics',
      backgroundColor: 'primary.main'
    },
    {
      title: 'Log a H&S Issue',
      path: '/issue',
      backgroundColor: 'primary.main'
    },
    {
      title: 'Emergency',
      path: '/emergency',
      backgroundColor: 'error.main'
    },
    {
      title: 'Sign In / Sign Out',
      path: '/',
      backgroundColor: 'primary.main'
    }
  ];

  const [cards, setCards] = useState<Card[]>(initialCards);

  const navigator = useNavigate();

  const searchArray = (query: string) => {
    const newArr = initialCards.filter((element) => element.title.toLowerCase().includes(query.toLowerCase()));
    setCards(newArr);
  }

  const cardStyle = {
    cursor: 'pointer',
    borderRadius: '12px',
    width: '100%',
    height: 95,
    color: 'white',
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    "&:hover": {
      opacity: 0.9
    }
  };

  return (
    <Grid container sx={{ my: 'auto' }} pt={5} px={4}>
      <Grid item xs={12} textAlign={'center'} py={1}>
        <TextField
          id="outlined-start-adornment"
          sx={{ m: 0.5 }}
          placeholder='Search'
          fullWidth
          onChange={e => searchArray(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12} textAlign={'center'}>
        <Grid container sx={{ my: 'auto' }}>
          {cards.map(card => (
            <Grid item xs={6} textAlign={'center'} p={0.5}>
              <Box onClick={() => navigator(card.path)} sx={{ ...cardStyle, backgroundColor: card.backgroundColor }}>{card.title}</Box>
            </Grid>
          ))}
          <Grid item xs={6} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 'auto',

          }}>
            <Box sx={{
              cursor: 'pointer',
              width: '48px',
              height: '48px',
              border: '1px solid #18181a',
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              "&:hover": {
                opacity: 0.9
              }
            }}><AddIcon /></Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Main