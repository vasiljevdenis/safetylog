import { createTheme } from "@mui/material";
import * as style from '../../sass/app.scss';

const appTheme = createTheme({
    palette: {
      primary: {
        main: '#178fdd',
      },
      success: {
        main: '#56ec56bd',
        light: '#c3f2cb',
        dark: '#6dcd01'
      },
      error: {
        main: '#ff0000',
        light: '#ff3b30b5'      
      }
    },
    typography: {
      fontFamily: "'Poppins', sans-serif"
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: style,
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&": {
              borderRadius: 12
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: '#178fdd'
            },
            "& input::placeholder": {
              verticalAlign: 'middle'
            }
          }
        }
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            "&": {
              borderRadius: '12px',
              boxShadow: 'none',
              textTransform: 'none',
              fontWeight: 600
            }
          }
        }
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            "&": {
              height: 80,
              borderTop: '1px solid #f0f0f0'
            }
          }
        }
      },
      MuiListItemText: {
        styleOverrides: {
          root: {
            "& .MuiTypography-root": {
              fontWeight: 700
            }
          }
        }
      }
    }
  });

  export default appTheme