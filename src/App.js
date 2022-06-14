
import logo from './amazon.png';
import './App.css';
import Header from './Header.js';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Checkout from './Checkout';


function App() {
  return (
    //BEM
    <Router>
      <div className="app">
      <Header />
      <Switch>
        
      <Route path="/checkout">
            <Checkout />
            <h1>I AM A CHECKOUT, SMASH THE LIKE  BUTTON</h1>
        </Route>
        <Route path="/">
            
            <Home />
        </Route>
        {/*default rooout is always at the bottom*/}
      {/*Header*/}
      {/*Home*/}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a>
          </header> */}
        </Switch>
        </div>
    </Router>
  );
}

export default App;
