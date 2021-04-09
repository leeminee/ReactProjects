import React from 'react';
import Average from './Average';

/* App 이라는 컴포넌트를 만들어 준다.
   함수에서 반환하는 내용은 HTML이 아니라 JSX이다.
   * JSX란
     : 자바스크립트의 확장 문법이며 XML과 매우 비슷하게 생김.
     : 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환.
*/
// function App() {
//   const name = '리액트'
//   return (
//     <>
//       {/* 주석작성하는 방법 */}
//       <div className="react">{name}</div>
//       <input />
//     </>
//   );
// }

// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//   state = {
//     color: '#000000'
//   }

//   handleClick = () => {
//     this.setState({
//       color:getRandomColor()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤색상</button>
//         <ErrorBoundary>
//         <LifeCycleSample color={this.state.color}/>
//         </ErrorBoundary>
//       </div>
//     );
//   }
// };

const App = () => {
  return <Average/>
};

export default App;