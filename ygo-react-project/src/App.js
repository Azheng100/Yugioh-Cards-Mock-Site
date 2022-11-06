
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import { CartProvider} from './CartContext'


function App() {
 
  return (
    <div className="App">
      <CartProvider>
     <div>
    <Header/>
     </div>

   
    <div>
    
    <Main/>
    
  
    </div>
    </CartProvider>
    
  <div>
    <Footer/>
  </div>
    </div>
  );
}

export default App;
