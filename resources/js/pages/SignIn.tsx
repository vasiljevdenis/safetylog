import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const [passcode, setPasscode] = useState<string>('');
    const navigator = useNavigate();

    return (
        <Grid container sx={{ my: 'auto', pb: '70px', px: { xs: 0.5, sm: 4 } }} pt={5}>
            <Grid item xs={12} textAlign={'center'} py={1}>
                <TextField
                    sx={{ m: 0.5 }}
                    value={passcode}
                    onChange={e => setPasscode(e.target.value)}
                    placeholder='Site Passcode'
                    type='text'
                    label='Site Passcode'
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} textAlign={'center'} py={1}>
                <Button onClick={() => navigator('/')} variant="contained" sx={{ py: 1.5, width: '100%', maxWidth: 335 }}>Sign In / Sign out</Button>
            </Grid>
        </Grid>
    )
}

export default SignIn