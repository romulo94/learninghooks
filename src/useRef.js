import React, { useRef } from 'react';

export default function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" style={{ width: 250, height: 60 }} />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
