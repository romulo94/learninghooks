import React from 'react';

import State from './useState';

import Effect from './useEffect';
import Callback from './useCallback';
import Memo from './useMemo';
import Context from './useContext';
import Ref from './useRef';
import LayoutEffect from './useLayoutEffect';
import Reducer from './useReducer';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <State />
        {/* <Effect></Effect>
     <Callback></Callback>
     <Memo></Memo>
     <Context></Context>
     <Ref></Ref>
     <LayoutEffect></LayoutEffect>
     <Reducer></Reducer> */}
      </header>
    </div>
  );
}

export default App;
