import React, { useState, useMemo, useCallback } from 'react';

export default function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const handleAddA = useCallback(() => {
    setCountA(countA + 1);
  }, [countA]);

  const handleAddB = useCallback(() => {
    setCountB(countB + 1);
  }, [countB]);

  const calc = useMemo(() => {
    const res = countA * 100;

    return res;
  }, [countA]);

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
          <button onClick={handleAddA}>+</button>
          <button onClick={handleAddB}>-</button>
        </div>
        <h2>Meu número A é: {countA}</h2>
        <h2>Meu número B é: {countB}</h2>
        <h2>Resultado: {calc}</h2>
      </div>
    </>
  );
}
