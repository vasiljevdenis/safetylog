import { Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Emergency = () => {
    
    const navigator = useNavigate();

    const cardStyle = {
        cursor: 'pointer',
        width: '100%',
        padding: '56px 2px',
        color: 'white',
        borderRadius: '12px',
        "&:hover": {
            opacity: 0.9
        }
    };
    return (
        <Grid container sx={{ my: 'auto', pb: '70px', px: { xs: 0.5, sm: 4 } } } pt={5}>
            <Grid item xs={12} textAlign={'center'} py={1}>
                <Box onClick={() => navigator('/emergency')} sx={{...cardStyle, bgcolor: '#1b1b1b'}}>
                    <Typography variant='h6' component='p' fontWeight={700}>Spill emergency</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} textAlign={'center'} py={1}>
                <Box onClick={() => navigator('/emergency/manager')} sx={{...cardStyle, bgcolor: 'primary.main'}}>
                    <Typography variant='h6' component='p' fontWeight={700}>Call to Site Manager</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} textAlign={'center'} py={1}>
                <Box onClick={() => navigator('/emergency/first-aider')} sx={{...cardStyle, bgcolor: 'error.dark'}}>
                    <Typography variant='h6' component='p' fontWeight={700}>Need a First Aider ASAP!</Typography>
                </Box>
            </Grid>
        </Grid>
  )
}

export default Emergency