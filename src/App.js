import React from 'react';
import CounterButton from './PureCompo/CounterButton';
import withCounter from './HOCcomponent/Counter';
import './App.css';

const EnhancedCounterButton = withCounter(CounterButton);

function App() {
  return (
    <div className="app">
      <h2>Counter App</h2>
      <EnhancedCounterButton />
    </div>
  );
}

export default App;
