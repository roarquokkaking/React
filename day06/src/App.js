import logo from './logo.svg';

import Test01 from './components/Test01';
import Test02 from './components/Test02';
import Test03 from './components/Test03';
import Test04 from './components/Test04';
import Test05 from './components/Test05';

function App() {
  return (
    <div >
      <Test05/>
      {/* <Test04/> */}
      {/* <Test03/> */}
      {/* <Test02/> */}
      {/* <Test01/> */}
    </div>
  );
}

export default App;

/*
useReducer()
React에서 컴포넌트의 상태 관리를 위해서 useState를 사용해서 상태를 업데이트를 하는데,
useReducer를 사용하게 되면 컴포넌트와 상태 업데이트 로직을 분리하여 컴포넌트 외부에서도 상태 관리를 할 수 있다.
즉, 현재 컴포넌트가 아닌 다른 곳에 state를 저장하고 싶을 때 유용하게 사용할 수 있다. 

[사용법]
const [state, dispatch] = useReducer(reducer, initialState);

state : 현재 상태
dispatch : action을 발생시키는 함수
reducer : state와 action를 받아 새로운 state를 반환하는 함수
initialState : 초기값
*/