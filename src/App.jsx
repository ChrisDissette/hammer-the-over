import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Router } from '@reach/router'
import { ThemeProvider } from '@mui/material/styles';
import Home from './views/Home'


let theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#000000'
    }
  },
    typography: {
      fontFamily: "'Fuzzy Bubbles', cursive",
      h1: {
        fontSize:75
      },
      h3: {
        fontSize:"2.5rem"
      }
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
