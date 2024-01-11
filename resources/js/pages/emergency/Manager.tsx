import { Avatar, Box, Card, CardActionArea, CardContent, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import support from '../../../images/support.png';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useNavigate } from 'react-router-dom';

const Manager = () => {

  const navigator = useNavigate();

    return (
        <Grid container sx={{ my: 'auto', pb: '70px', px: { xs: 2, sm: 4 } }} pt={5}>
            <Grid item xs={12} textAlign={'center'} py={1}>
                <Typography variant='h4' component='p' fontWeight={700}>Chat with Site Management</Typography>
            </Grid>
            <Grid item xs={12} py={2} textAlign='center'>
                <Card sx={{
                    maxWidth: 345,
                    mx: 'auto',
                    backgroundColor: '#f7f5ff',
                    borderRadius: '16px',
                    border: '1px solid #aa93f3',
                    boxShadow: 'none'
                }}>
                    <CardActionArea onClick={() => navigator('/inbox')}>
                        <CardContent>
                            <List
                                sx={{ width: '100%', bgcolor: 'transparent' }}
                                component="nav"
                            >
                                <ListItem
                                sx={{borderTop: 'none !important'}}
                                    disablePadding
                                >
                                    <ListItemAvatar>
                                        <Avatar src={support} alt='Elena'></Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Elena from support"
                                        secondary={<><TimelapseIcon sx={{fontSize: '14px'}} />&nbsp;Response time: 1 min.</>}
                                    />
                                </ListItem>
                            </List>
                            <Typography variant='h6' component='p' fontWeight={700}>Hi there! How can I help?</Typography>
                            <Box sx={{
                                padding: '12px 8px',
                                border: '1px solid #aa93f3',
                                borderRadius: '8px',
                                color: '#aa93f3',
                                width: '100%',
                                mt: 2,
                                textAlign: 'left',
                                position: 'relative'
                            }}>
                                {"Type your own question..."}
                                <TelegramIcon sx={{position: 'absolute', top: 7, right: 10}} />
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Manager