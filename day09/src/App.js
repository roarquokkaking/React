import React from 'react';
import Color from './components/Color';
import Count from './components/Count';
import CountProvider from './contexts/CountContext';
import ColorProvider from './contexts/ColorContext';
import ChangeColorProvider from './contexts/ChangeColorContext';
import ChangeColor from './components/ChangeColor';
import CntCountProvider from './contexts/CntCountContext';
import CntCount from './components/CntCount';

const App = () => {
  return (
    <div>
      {/* Context 를 사용할 컴포넌트의 상위컴포넌트에서 Provider 로 감싸줘야 한다.
          Provider 의 모든 하위컴포넌트가 얼마나 깊이 위치해 있는지 상관없이 Context의 데이터를 읽을 수 있다. */}
          {/* <CountProvider>
            <Count/>
          </CountProvider> */}
          {/* <ColorProvider>
           <CountProvider>
            
            <Color/>
          </CountProvider> 
          </ColorProvider> */}
          <ChangeColorProvider>
              <ChangeColor/>
            <CntCountProvider>
              <CntCount/>
            </CntCountProvider>
          </ChangeColorProvider>
          
          
    </div>
  );
};

export default App;