import './App.css';
import About from './components/About/About';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
