import logo from './logo.svg';
import './App.css';
import mvpGreen from './assets/mvp_tee_grn.png';
import StripeContainer from './components/StripeContainer';
import { useState } from 'react';

function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      <h2>dombui.com</h2>
      <h4>Minimum Viable Product Tee</h4>
      {showItem ? <StripeContainer/> : <><h3>$30.00</h3><img src={mvpGreen} alt="mvpGreen" /><button onClick={() => setShowItem(true)}>Purchase</button><p>Powered by Stripe</p></>}
    </div>
  );
}

export default App;
