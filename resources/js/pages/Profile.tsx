import { Avatar, Box, Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import PortraitIcon from '@mui/icons-material/Portrait';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { observer } from 'mobx-react-lite';
import appState from '../store/appState';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = observer(() => {

    const [store] = useState(appState);
    const navigator = useNavigate();

    const logOut = () => {
        localStorage.removeItem('isAuth');
        store.logInOut();
        navigator('/');
    }

    useEffect(() => {
        store.toggleProfile(true);
        return () => store.toggleProfile(false);
    }, []);

    return (
        <Grid container sx={{ minHeight: 'calc(100vh - 70px)' }} pt={1} px={4}>
            <Grid item xs={12}>
                <Button onClick={() => navigator('/')} variant="text" sx={{
                    py: 5,
                    color: '#080a0b',
                    fontSize: '30px'
                }}><ArrowBackIcon sx={{ fontWeight: 700, fontSize: 30 }} />&nbsp;&nbsp;&nbsp;Profile</Button>
            </Grid>
            <Grid item xs={12} textAlign={'center'}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Avatar sx={{
                        width: '64px',
                        height: '64px',
                    }}>A</Avatar>
                    <Typography variant='h5' component='h2' ml={2} fontWeight={700}>Admin</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} textAlign={'center'} pt={2}>
                <List
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                    component="nav"
                >
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end">
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <LanguageIcon />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Language"
                        />
                    </ListItem>
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end">
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <PortraitIcon />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Account settings"
                        />
                    </ListItem>
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end">
                                <ToggleOnIcon />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <NightsStayIcon />
                        </ListItemAvatar>
                        <ListItemText
                            primary="White / Dark Mode"
                        />
                    </ListItem>
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end">
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <SupportAgentIcon />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Help center"
                        />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={12} textAlign={'center'}>
                <Button onClick={logOut} variant="contained" sx={{ py: 1.5, mt: 10, width: '100%', maxWidth: 335 }}>Log out</Button>
            </Grid>
        </Grid >
    )
})

export default Profile