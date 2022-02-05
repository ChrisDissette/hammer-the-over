import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Router } from '@reach/router'
import { ThemeProvider } from '@mui/material/styles';
import Home from './views/Home'


let theme = createTheme({
  palette: {
    primary: {
      main: '#1DB614',
    },
    secondary: {
      main: '#000000'
    }
  },
  typography: {
    h1: {
      fontSize:85
    },
    h3: {
      fontSize:"2.5rem"
    }
  },
    typography: {
      fontFamily: "'Ubuntu', sans-serif"
    }
});

theme = responsiveFontSizes(theme)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Home path = '/' />
        {/* <Community path='/community' />
        <Roadmap path='/roadmap' />
        <Token path='/token' />
        <Team path='/team' /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
