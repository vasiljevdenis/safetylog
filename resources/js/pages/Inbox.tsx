import { Avatar, Box, Button, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import SmsIcon from '@mui/icons-material/Sms';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import appState from '../store/appState';
import stringToColor from '../helpers/stringToColor';

const Inbox = observer(() => {

  const [store] = useState(appState);

  const navigator = useNavigate();

  useEffect(() => {
    store.toggleHeader(false);
    return () => store.toggleHeader(true);
}, []);

  return (
    <Grid container sx={{ pb: '70px', minHeight: '100vh' }} pt={5} px={4}>
      <Grid item xs={12}>
      <Typography variant='h5' component='h1' ml={2} fontWeight={700}>Hi Admin</Typography>
      <Divider sx={{backgroundColor: '#f0f0f0'}} />
      </Grid>
      <Grid item xs={12} textAlign={'center'} pt={2}>
        <List
          sx={{ width: '100%', bgcolor: 'background.paper' }}
          component="nav"
        >
          <ListItem
            disablePadding
            sx={{
              backgroundColor: '#ccd5e357', 
              borderRadius: '12px', 
              mb: 1.5,
              "& .MuiListItemText-secondary": {
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }
            }}
            secondaryAction={
              <IconButton edge="end">
              </IconButton>
            }
          >
            <ListItemButton sx={{ height: '100%' }}>
              <ListItemAvatar>
              <Avatar sx={{bgcolor: stringToColor('Scott')}}>S</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Scott"
                secondary={"Hi. I want to ask you how much the site will cost."}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              backgroundColor: '#ccd5e357', 
              borderRadius: '12px', 
              mb: 1.5,
              "& .MuiListItemText-secondary": {
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }
            }}
            secondaryAction={
              <IconButton edge="end">
              </IconButton>
            }
          >
            <ListItemButton sx={{ height: '100%' }}>
              <ListItemAvatar>
              <Avatar sx={{bgcolor: stringToColor('Jennifer')}}>J</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Jennifer"
                secondary={"Hi. I want to ask you how much the site will cost."}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              backgroundColor: '#ccd5e357', 
              borderRadius: '12px', 
              "& .MuiListItemText-secondary": {
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }
            }}
            secondaryAction={
              <IconButton edge="end">
              </IconButton>
            }
          >
            <ListItemButton sx={{ height: '100%' }}>
              <ListItemAvatar>
              <Avatar sx={{bgcolor: stringToColor('Den')}}>D</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Den"
                secondary={"Hi. I want to ask you how much the site will cost."}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} pt={5} textAlign={'right'} mt={"auto"}>
        <Button
          variant="contained"
          onClick={() => navigator('/')}
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
          <SmsIcon sx={{ color: 'black' }} />
        </Button>
      </Grid>
    </Grid>
  )
})

export default Inbox