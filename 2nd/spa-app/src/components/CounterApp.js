
import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Számláló: {count}</h2>
      <button onClick={() => setCount(count + 10)}>Növel 10-zel</button>
      <button onClick={() => setCount(count + 1)}>Növel</button>
      <button onClick={() => setCount(count - 1)}>Csökkent</button>
      <button onClick={() => setCount(count - 10)}>Csökkent 10-zel</button>
      <button onClick={() => setCount(0)}>Nulláz</button>
      <button onClick={() => setCount(Math.floor(Math.random() * 101))}>Random 0-100</button>
    </div>
  );
}

export default CounterApp;

