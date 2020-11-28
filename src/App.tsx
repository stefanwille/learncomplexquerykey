/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './App.css';
import { useQuery } from 'react-query'

function App() {
  const [counter, setCounter] = useState(0)
  const a = [1,2,3];
  const o = { area: 'portfolio'}
  useQuery(['hello', 'world', a, o], async (...queryKeys: any[]) => {
    console.log("useQuery", queryKeys)
    return "some-result"
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
         onClick={() => {
           setCounter(counter + 1);
         }}
        >
          Count!
        </a>
        Counter: {counter}
      </header>
    </div>
  );
}

export default App;
