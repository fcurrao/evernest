
  
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Buybar from './components/Buybar/Buybar';
import Contactbar from './components/Contactbar/Contactbar';
import Navigationbar from './components/Navigationbar/Navigationbar'; 

import Footer from './pages/Footer'; 

// import { CartContext } from './context/CartContext';
// import CartProvider from './context/CartContext';  

 
import './App.css';
import Home from './pages/Home';

function App() {
  return (
   <>
      {/* <CartProvider > */}
        <BrowserRouter>
              {/* <Buybar /> */}
              <Contactbar />
              <Navigationbar />
              <Routes>
              
              <Route path="/" element={<Home />} />
              </Routes>
              <Footer /> 
            </BrowserRouter>
          {/* </CartProvider> */}

        </>
        );
}

        export default App;
