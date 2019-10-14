import React, { useState } from 'react';

export default function App() {
  // console.log("render")
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          flexDirection: 'column',
        }}
      >
        <h1>React Hooks</h1>
        <div>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
        <h2>Meu número é: {count}</h2>
      </div>
    </>
  );
}
