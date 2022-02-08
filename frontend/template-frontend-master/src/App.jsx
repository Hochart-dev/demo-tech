import './resetCSS.css';
import Header from './components/Header/Header';
import Contact from './components/ContactUs/Contact';
import Footer from './components/Footer/Footer';
import Members from './components/Members/Members';

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <Members />
      <Footer />
    </div>
  );
}

export default App;
