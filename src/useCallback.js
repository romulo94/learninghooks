import React, { useState, useEffect, useCallback } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const handleAdd = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleLess = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  useEffect(() => {
    document.title = `Você clicou ${count} vezes.`;
  }, [count]);

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
          <button onClick={handleAdd}>+</button>
          <button onClick={handleLess}>-</button>
        </div>
        <h2>Meu número é: {count}</h2>
      </div>
    </>
  );
}
