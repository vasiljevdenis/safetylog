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
                <Route path='/metrics' element={<Metrics />} />
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