import { AlertColor, Box, Button, Grid, TextField, Typography } from '@mui/material';
import loginImage from '../../images/loginImage.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import appState from '../store/appState';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

interface User {
    email: string;
    password: string;
}

const Login = observer(() => {

    const [store] = useState(appState);

    const [user, setUser] = useState<User>({
        email: '',
        password: ''
    });

    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);

    const notify = (severity: AlertColor, text: string) => {
        store.openSnackbar(severity, text);;
    }

    const navigator = useNavigate();

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, email: e.target.value.trim() });
        setEmailError(false);
    }

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, password: e.target.value });
        setPasswordError(false);
    }

    const logIn = () => {
        const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!regEmail.test(user.email)) {
            setEmailError(true);
            notify('error', 'The e-mail or password is incorrect');
        }
        if (user.password.length < 8) {
            setPasswordError(true);
            notify('error', 'The e-mail or password is incorrect');
        }
        if (regEmail.test(user.email) && user.password.length >= 8) {
            // Send data to server here
            if (user.email === "admin@safetylog.com" && user.password === "admin123") {
                localStorage.setItem('isAuth', 'true');
                store.logInOut();
                navigator('/');
            } else {
                notify('error', 'Invalid e-mail or password');
            }
        }
    }

    return (
        <Grid container sx={{ my: 'auto', py: 1, px: 1, minHeight: 'calc(100vh - 90px)' }}>
            <Grid item xs={12} pt={5} px={4} textAlign={'center'}>
                <Box sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center', mb: 0 }}>
                    <img src={loginImage} alt="Login image" style={{ width: '100%' }} />
                </Box>
                <Typography variant="h3" component={'h1'} fontWeight={600} gutterBottom>MWH <br /> Treatment</Typography>
                <Grid container sx={{ my: 'auto', py: 1 }}>
                    <Grid item xs={12} pt={2} textAlign={'center'}>
                        <TextField
                            label="Email"
                            error={emailError}
                            variant="outlined"
                            placeholder='Email'
                            type='email'
                            value={user.email}
                            onChange={changeEmail}
                        />
                    </Grid>
                    <Grid item xs={12} pt={2} textAlign={'center'}>
                        <TextField
                            label="Password"
                            error={passwordError}
                            variant="outlined"
                            placeholder='Password'
                            helperText="Forgot your password?"
                            value={user.password}
                            type='password'
                            onChange={changePassword}
                            onKeyDown={e => {
                                if (e.key === "Enter") {
                                    logIn();
                                }
                            }}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    textAlign: 'right',
                                    mr: 0
                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} textAlign={'right'} mt={'auto'}>
                        <Button
                            variant="contained"
                            onClick={logIn}
                            sx={{
                                py: 1.5,
                                mt: 10,
                                width: '100%',
                                maxWidth: 48,
                                backgroundColor: 'success.dark',
                                "&:hover": {
                                    backgroundColor: 'success.main'
                                }
                            }}>
                            <ArrowForwardIcon sx={{ color: 'black' }} />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
})

export default Login