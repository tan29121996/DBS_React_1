import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Transactions from './components/Transactions';
import ScheduledTransactions from './components/ScheduledTransactions';

function App() {
  const [toggleState, setToggleState] = useState(1);

  return (
    <div className="App" style={{ width: '100%', height: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', width: 300 }}>
        <div style={{ width: 100, height: 10, background: 'grey' }} onClick={() => setToggleState(1)}>Scheduled</div>
        <div style={{ width: 100, height: 10, background: 'grey' }} onClick={() => setToggleState(2)}>Scheduled</div>
      </div>
      <Transactions {...{ setToggleState, toggleState }} />
      <ScheduledTransactions {...{ setToggleState, toggleState }} />
    </div>
  );
}

export default App;
-