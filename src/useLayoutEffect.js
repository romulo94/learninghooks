import React, { useLayoutEffect, useEffect } from 'react';

export default function App() {
  useEffect(() => {
    console.log('useEffect done');

    // alert("Executa uma única vez");
  }, []);

  useLayoutEffect(() => {
    async function x() {
      setTimeout(() => {
        document.title = 'Eu mudo aqui';
      }, 2000);
    }
    x();
    console.log('useLayoutEffect done');
    // alert("Executa uma única vez");
  }, []);

  console.log('render');

  return <></>;
}
