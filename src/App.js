import React from 'react'
// import logo from './logo.svg';
// import './App.css';

/* App 이라는 컴포넌트를 만들어 준다.
   함수에서 반환하는 내용은 HTML이 아니라 JSX이다.
   * JSX란
     : 자바스크립트의 확장 문법이며 XML과 매우 비슷하게 생김.
     : 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환.
*/
function App() {
  const name = '뤼액트'
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

    // </div>
    // <>{name ==='리액트' && <h1>리액트입니다.</h1>}</>
    <>{name ==='리액트' ? <h1>리액트입니다.</h1> : null}</>
  );
}

export default App;