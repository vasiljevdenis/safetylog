import { Box, Grid, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import appState from '../store/appState';
import { useNavigate } from 'react-router-dom';

const Induction = observer(() => {

    const [store] = useState(appState);

  const navigator = useNavigate();

    const cardStyle = {
        cursor: 'pointer',
        width: '100%',
        padding: '56px 2px',
        borderRadius: '12px',
        "&:hover": {
            opacity: 0.9
        }
    };
    return (
        <Grid container sx={{ my: 'auto' }} pt={5} px={4}>
            <Grid item xs={12} textAlign={'center'} py={1}>
                <Box onClick={() => navigator('/induction/site-specific')} sx={{...cardStyle, bgcolor: store.siteInd ? 'success.main' : 'primary.main', color: store.siteInd ? 'black' : 'white'}}>
                    <Typography variant='h6' component='p' fontWeight={700}>Site Specific Induction</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} textAlign={'center'} py={1}>
                <Box onClick={() => navigator('/induction/mwht-passport')} sx={{...cardStyle, bgcolor: store.passInd ? 'success.main' : 'primary.main', color: store.passInd ? 'black' : 'white'}}>
                    <Typography variant='h6' component='p' fontWeight={700}>MWHT PassPort Induction</Typography>
                </Box>
            </Grid>
        </Grid>
    )
})

export default Induction