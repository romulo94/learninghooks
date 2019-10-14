import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${count} vezes.`;
  }, [count]);

  useEffect(() => {
    alert('Executa uma única vez');
  }, []);

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

// import { useState, useEffect } from 'react';

// const getViewportWidth = () =>
//   Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

// export default function useWidth() {
//   const [width, setWidth] = useState(getViewportWidth());
//   function listenResize() {
//     setWidth(getViewportWidth());
//   }
//   useEffect(() => {
//     window.addEventListener('resize', listenResize);
//     return () => {
//       window.removeEventListener('resize', listenResize);
//     };
//   }, []);
//   return [width];
// }
