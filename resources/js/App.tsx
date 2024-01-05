import { CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import { useState } from 'react';
import Preview from './pages/Preview';
import Login from './pages/Login';
import Notification from './components/Notification';
import { observer } from 'mobx-react-lite';
import appState from './store/appState';
import appTheme from './settings/appTheme';
import Inbox from './pages/Inbox';
import Profile from './pages/Profile';

const App = observer(() => {

  const [store] = useState(appState);

  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Notification />
        {!store.isAuthenticated ? (
          <Routes>
            <Route path='/' element={<Preview />} />
            <Route path='/login' element={<Login />} />
            <Route path="*" element={<Login />} />
          </Routes>
        ) : (
          <>
            {store.isProfileStatus ? (<></>) : (
              <Header />
            )}
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/inbox' element={<Inbox />} />
              <Route path='/profile' element={<Profile />} />
              <Route path="*" element={<Main />} />
            </Routes>
            <Footer />
          </>
        )}
      </ThemeProvider>
    </BrowserRouter>
  )
})

export default App