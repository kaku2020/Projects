
import logo from './amazon.png';
import './App.css';
import Header from './Header.js';
import Home from './Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Checkout from './Checkout.js';



function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
      <Route path = "/" element={[<Header />, <Home />]} />;
      <Route path="/checkout" element={[<Header />, <Checkout />]} />
      </Routes>
        
      </div>
</Router>
  );
}

export default App;
