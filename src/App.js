import React from 'react';
import Display from './Display';
import { Add, Subtract } from './Button';

function App() {
  return (
    <div className="App">
      <Display />
      <Subtract>&minus;</Subtract>
      <Add>+</Add>
    </div>
  );
}

export default App;
