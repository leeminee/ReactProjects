import React, {useState} from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username:'',
        message:''
    });
    const [username, message] = form;
    const onChange = e => { // Form 요소에서 값이 변하면 발생하는 이벤트
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value // 원하는 값을 덮어씌우기
        }
    }
    const onClick = () => {
        alert(username+' : '+message);
        setForm({
            username:'',
            message:''
        });
    };
    const onKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>       
            <input
            type='text'
            name='username'
            placeholder='사용자명'
            value={username}
            onChange={onChange}
            />
            <input
            type='text'
            name='message'
            placeholder='아무거나 입력해 보세요'
            value={message}
            onChange={onChange}
            onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
}

// class EventPractice extends Component {
//     state = {
//         username:'',
//         message:''
//     }

//     // constructor(props) {
//     //     super(props);
//     //     this.handleChange = this.handleChange.bind(this);
//     //     this.handleClick = this.handleClick.bind(this);
//     // }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value // 객체안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제값이 key 값으로 사용된다.
//         });
//     }

//     handleClick = () => {
//         alert(this.state.username+' : '+this.state.message);
//         this.setState({
//             username:'',
//             message:''
//         });
//     }

//     handleKeyPress = (e) => {
//         if(e.key === 'Enter') {
//             this.handleClick();
//         }
//     }

//     render() {
    // return (
    //     <div>
    //         <h1>이벤트 연습</h1>       
    //         <input
    //         type='text'
    //         name='username'
    //         placeholder='사용자명'
    //         value={this.state.username}
    //         onChange={this.handleChange}
    //         />
    //         <input
    //         type='text'
    //         name='message'
    //         placeholder='아무거나 입력해 보세요'
    //         value={this.state.message}
    //         onChange={this.handleChange}
    //         onKeyPress={this.handleKeyPress}
    //         />
    //         <button onClick={this.handleClick}>확인</button>
    //     </div>
    // );
//     }
// }

export default EventPractice;