import React, {Component} from 'react';
import PropTypes from 'prop-types';


class MyComponent extends Component {
    static defaultProps = {
        name:'기본 이름'
    };
    
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };
    
    render() {
        const {name, favoriteNumber, children} = this.props; // 비구조화 할당
        return (
            <div>
        안녕하세요. 제 이름은 {name}입니다. <br/>
        children 값은 {children}
        입니다.
        <br/>
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
        </div>
        );
    }   
}

// function BlackDog() {
//     this.name = '흰둥이';
//     return {
//         name: '검둥이',
//         bark: function() { // 일반함수는 자신이 종속된 객체를 this로 가리킨다.
//             console.log(this.name + ': 멍멍'); // 흰둥이: 멍멍
//         }
//     }
// }

// const blackDog = new BlackDog();
// blackDog.bark();

// function WhiteDog() {
//     this.name = '흰둥이';
//     return {
//         name: '검둥이',
//         bark: () => { // 화살표 함수는 자신이 종속된 인스턴스를 가리킨다.
//             console.log(this.name+': 멍멍!'); // 검둥이 : 멍멍!
//         }
//     }
// }

// const whiteDog = new WhiteDog();
// whiteDog.bark();

// 이 코드는 다른 파일에서 이 파일을 import 할때, 위에서 선언한 MyComponent 클래스를 불러오도록 설정.
export default MyComponent;
