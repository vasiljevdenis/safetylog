import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InboxIcon from '@mui/icons-material/Inbox';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

function Footer() {

  const navigator = useNavigate();

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
        >
          <BottomNavigationAction onClick={() => navigator('/')} sx={{color: '#18181a'}} label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction onClick={() => navigator('/inbox')} sx={{color: '#18181a'}} label="Inbox" icon={<InboxIcon />} />
          <BottomNavigationAction onClick={() => navigator('/profile')} sx={{color: '#18181a'}} label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
  )
}

export default Footer