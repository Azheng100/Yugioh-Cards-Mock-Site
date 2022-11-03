
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
     <div>
    <Header/>
     </div>

    <div>
    <Main/>
    </div>
  
  <div>
    <Footer/>
  </div>
    </div>
  );
}

export default App;
