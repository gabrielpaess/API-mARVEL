import  { ThemeProvider } from '@material-ui/core';
import Home from './pages/home/index.js';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App;