import './resetCSS.css';
import Header from './components/Header/Header';
import AdMember from './components/AdMember/AdMember';
import Footer from './components/Footer/Footer';
import Members from './components/Members/Members';

function App() {
  return (
    <div className="App">
      <Header />
      <AdMember />
      <Members />
      <Footer />
    </div>
  );
}

export default App;
