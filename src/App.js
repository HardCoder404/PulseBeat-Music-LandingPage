import Download from './components/Download';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Search from './components/Search';
import GoToTop from './components/GoToTop';
import theme from './components/Theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App text-white overflow-hidden ">
        <Header/>
        <Hero/>
        <Experience/>
        <Search/>
        <Download/>
        <Footer/>
        <GoToTop />
    </div>
    </ThemeProvider>
  )
}

export default App;
