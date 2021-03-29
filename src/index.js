import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* ReactDOM.render
   : 컴포넌트를 페이지에 렌더링하는 역할을 하며, react-dom 모듈을 불러와 사용할 수 있다.
     첫번째 파라미터 -> 페이지에 렌더링 할 내용을 JSX 형태로 작성
     두번째 파라미터 -> 해당 JSX를 렌더링 할 document 내부 요소를 설정
   React.StrictMode
   : 리액트 프로젝트에서 리액트의 레거시 기능들을 사용하지 못하게 하는 기능이다.
     이를 사용하면 문자열 ref, componentWillMount 등 나중에는 완전히 사라지게 될 옛날 기능을 사용했을 때 경고를 출력.
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // id가 root 인 요소 안에 렌더링을 하도록 설정
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
