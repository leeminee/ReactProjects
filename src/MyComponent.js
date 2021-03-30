import React from 'react'

const MyComponent = () => {
    return <div>나의 새롭고 멋진 컴포넌트</div>;
};

function BlackDog() {
    this.name = '흰둥이';
    return {
        name: '검둥이',
        bark: function() { // 일반함수는 자신이 종속된 객체를 this로 가리킨다.
            console.log(this.name + ': 멍멍'); // 흰둥이: 멍멍
        }
    }
}

const blackDog = new BlackDog();
blackDog.bark();

function WhiteDog() {
    this.name = '흰둥이';
    return {
        name: '검둥이',
        bark: () => { // 화살표 함수는 자신이 종속된 인스턴스를 가리킨다.
            console.log(this.name+': 멍멍!'); // 검둥이 : 멍멍!
        }
    }
}

const whiteDog = new WhiteDog();
whiteDog.bark();

export default MyComponent;
