import { Box, Grid } from '@mui/material';
import logo from '../../images/logo.png';

function Header() {
  return (
    <Grid container sx={{ my: 'auto' }}>
      <Grid item xs={12} textAlign={'center'} pt={5} px={4}>
        <Box sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center', mb: 0 }}>
          <img src={logo} alt="Logo" style={{ width: '100%' }} />
        </Box>
      </Grid>
    </Grid>
  )
}

export default Header