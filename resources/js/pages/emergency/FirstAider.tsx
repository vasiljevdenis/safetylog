import { Grid, Typography } from '@mui/material';

const FirstAider = () => {
    return (
        <Grid container sx={{ my: 'auto', pb: '70px', px: { xs: 2, sm: 4 } }} pt={5}>
            <Grid item xs={12} textAlign={'center'} py={1}>
                <Typography variant='body2' component='p'>*all first aiders to receive a notification in a different noise alongside vibrations. Location of person requesting help to be given out.</Typography>
            </Grid>
            <Grid item xs={12} py={2}>
                <Typography variant='body1' component='p' fontWeight={700}>First Aiders on your site have been notified and they are on their way.</Typography>
            </Grid>
            <Grid item xs={12} py={2}>
                <Typography variant='body1' component='p' fontWeight={700}>Please stay with the injured Person.</Typography>
            </Grid>
        </Grid>
    )
}

export default FirstAider