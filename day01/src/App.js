// import React from 'react';

// const App 

// = () => {
//     return (
//         <div>
//            dd
//         </div>
//     );
// };

// export default App;


import Dog from './components/Dog';
import Test01 from './components/Test01';
import Test02 from './components/Test02';
import Test03 from './components/Test03';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://kr.object.ncloudstorage.com/bitcamp-6th-bucket-102/miniproject/02a17bcc-efd4-4776-a61c-90afc4d5b2d2" className="App-logo" alt="logo" />
        <>
        <p>
          <Dog/> 
          {/* 최상단에는 반드시 <div></div>로 감싸주어야한다. */}
          <hr/>
          <Dog/>
          <Test01/>
          <hr/>
          <Test02/>
          <hr/>
          <Test03/>
        </p>
        </>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
