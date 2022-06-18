
import logo from './amazon.png';
import './App.css';
import Header from './Header.js';
import Home from './Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Checkout from './Checkout.js';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe("pk_test_51LBlDJSDkv6GyhL4LIIeLzGoGUDgD0ZUTsMjcWxLRv8FoGOLzQREMbiEwdnDq6PkEQFxhqo7xssTMHT1qgfuMgVr00vKuB7y0y");

function App() {
  const [{},dispatch] = useStateValue();
  
  useEffect(() => {
    //it is only going to run onces
  auth.onAuthStateChanged(authUser =>{
    console.log("the User is >>>>>>", authUser);
    if(authUser){
      //The User just Logged In/Or the User was Logged in
      dispatch({
        type:'SET_USER',
        user: authUser
      })

    }else{
      //User is logged out

      dispatch({
        type:'SET_USER',
        user: null
      })
    }
  })
  }, [])
  

  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
      <Route path = "/" element={[<Header />, <Home />]} />;
      <Route path="/checkout" element={[<Header />, <Checkout />]} />
      <Route path="/payment" element={[<Header />,<Elements stripe={promise}><Payment/></Elements>]} />
      <Route path="/login" element={[<Login />]} />
      </Routes>
        
      </div>
</Router>
  );
}

export default App;
