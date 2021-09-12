import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './Home'
import Portfolio from'./Portfolio'

function App() {
  const [step, setStep] = useState(1);

  const PortfolioHandler=()=>{
    setStep(2);
  }

  const HomeHandler=()=>{
    setStep(1);
  }

  return (
    <div>
      {step === 1 && <Home port={PortfolioHandler}/>}
      {step === 2 && <Portfolio home={HomeHandler}/>}
    </div>
    
  );
}

export default App;
