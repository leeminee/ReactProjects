// import React,{useState, useEffect} from 'react';
import React, { useState, useEffect, useCallback } from "react";
import customAxios from "./auto/customAxios";
import "./App.css";
import axios from "axios";
import TableList from "./auto/TableList";

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

// const App = () => {
//   return <Average />;
// };

function App() {
  // IP 주소 변수 선언
  const [ip, setIp] = useState("");
  const [alarm, setAlarm] = useState();
  const [table, setTable] = useState([
    {
      id: 1,
      service: "알람유형별",
      tableName: "STAT_ALARM_CATEGORY",
      checked: true,
    },
    {
      id: 2,
      service: "알람등급별",
      tableName: "STAT_ALARM_SEVERITY",
      checked: true,
    },
    {
      id: 3,
      service: "FAULT유형별",
      tableName: "STAT_FAULT_CATEGORY",
      checked: false,
    },
  ]);

  const getAlarmColumn = () => {
    axios.get("http://localhost:28747/api/alarm").then((response) => {
      setAlarm(response.data);
    });
  };

  // IP 주소값을 설정
  function callback(data) {
    setIp(data);
  }

  // 첫번째 렌더링을 다 마친 후 실행
  useEffect(() => {
    // 클라이언트의 IP 주소를 알아내는 백엔드의 함수를 호출
    customAxios(callback);
  }, []);

  return (
    <TableList>
      <div>
        <h1>통계 테이블 생성 {ip} </h1>
        <div>
          <table border="1">
            <tbody>
              <tr>
                <td>TableName</td>
                <td>Column</td>
                <td>Type</td>
                <td>where</td>
                <td>group by</td>
                <td>order by</td>
              </tr>
              <tr>
                <td>Column</td>
              </tr>
              <tr>
                <td>Type</td>
              </tr>
              <tr>
                <td>where</td>
              </tr>
              <tr>
                <td>group by</td>
              </tr>
              <tr>
                <td>order by</td>
              </tr>
            </tbody>
          </table>
          <button onClick={getAlarmColumn}>Alarm테이블 컬럼</button>
        </div>
      </div>
    </TableList>
  );
}

export default App;
