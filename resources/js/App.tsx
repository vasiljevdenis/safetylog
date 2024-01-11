import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import { useMemo, useState } from 'react';
import Preview from './pages/Preview';
import Login from './pages/Login';
import Notification from './components/Notification';
import { observer } from 'mobx-react-lite';
import appState from './store/appState';
import appTheme from './settings/appTheme';
import Inbox from './pages/Inbox';
import Profile from './pages/Profile';
import Language from './pages/profile/Language';
import ColorModeContext from './settings/themeMode';
import Metrics from './pages/Metrics';
import Induction from './pages/Induction';
import SiteSpecific from './pages/induction/SiteSpecific';
import MwhtPass from './pages/induction/MwhtPass';
import Issue from './pages/Issue';
import SignIn from './pages/SignIn';
import Emergency from './pages/Emergency';
import Manager from './pages/emergency/Manager';
import FirstAider from './pages/emergency/FirstAider';

const App = observer(() => {

  const [store] = useState(appState);

  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        ...appTheme,
        palette: {
          ...appTheme.palette,
          mode: mode
        },
      }),
    [mode],
  );

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
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
              {!store.headerShowStatus ? (<></>) : (
                <Header />
              )}
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/inbox' element={<Inbox />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/induction' element={<Induction />} />
                <Route path='/induction/site-specific' element={<SiteSpecific />} />
                <Route path='/induction/mwht-passport' element={<MwhtPass />} />
                <Route path='/metrics' element={<Metrics />} />
                <Route path='/issue' element={<Issue />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/emergency' element={<Emergency />} />
                <Route path='/emergency/manager' element={<Manager />} />
                <Route path='/emergency/first-aider' element={<FirstAider />} />
                <Route path='/profile/language' element={<Language />} />
                <Route path="*" element={<Main />} />
              </Routes>
              {!store.footerShowStatus ? (<></>) : (
                <Footer />
              )}
            </>
          )}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  )
})

export default App