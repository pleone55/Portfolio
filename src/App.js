import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter} from 'react-router-dom';

import './App.css';
import theme from './components/Theme';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <ThemeProvider theme={theme}>      
      <BrowserRouter>
        <Header />
        <About/>
        <Skills/>
        <Projects />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
