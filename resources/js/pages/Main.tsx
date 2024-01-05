import { Box, Grid, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

function Main() {

  const cardStyle = {
    backgroundColor: 'primary.main',
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
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12} textAlign={'center'}>
        <Grid container sx={{ my: 'auto' }}>
          <Grid item xs={6} textAlign={'center'} p={0.5}>
            <Box sx={{ ...cardStyle }}>Induction</Box>
          </Grid>
          <Grid item xs={6} textAlign={'center'} p={0.5}>
            <Box sx={{ ...cardStyle }}>Metrics</Box>
          </Grid>
          <Grid item xs={6} textAlign={'center'} p={0.5}>
            <Box sx={{ ...cardStyle }}>Log a <br /> H&S Issue</Box>
          </Grid>
          <Grid item xs={6} textAlign={'center'} p={0.5}>
            <Box sx={{ ...cardStyle, backgroundColor: 'error.light' }}>Emergency</Box>
          </Grid>
          <Grid item xs={6} textAlign={'center'} p={0.5}>
            <Box sx={{ ...cardStyle }}>Sign In / <br /> Sign Out</Box>
          </Grid>
          <Grid item xs={6} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 'auto',

          }}>
            <Box sx={{
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