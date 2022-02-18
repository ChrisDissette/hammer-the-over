import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Router } from '@reach/router'
import { ThemeProvider } from '@mui/material/styles';
import Home from './views/Home'


let theme = createTheme({
  palette: {
    primary: {
      main: '#06bcfb',
    },
    secondary: {
      main: '#000000'
    }
  },
    typography: {
      fontFamily: "'Comfortaa', cursive",
      h1: {
        fontSize:100
      },
      h2: {
        fontSize:75
      },
      h4: {
        fontSize: 50      
      }
    }
});

theme = responsiveFontSizes(theme)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Home path = '/' />
      </Router>
    </ThemeProvider>
  );
}

export default App;
