import React, {useState} from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username:'',
        message:''
    });
    const [username, message] = form;
    // const [message, setMessage] = useState('');
    // const onChangeUsername = e => setUsername(e.target.value);
    // const onChangeMessage = e => setMessage(e.target.value);
    const onChange = e => {
        const nextForm = {
            
        }
    }
    const onClick = () => {
        alert(username+' : '+message);
        setUsername('');
        setMessage('');
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
            onChange={onChangeUsername}
            />
            <input
            type='text'
            name='message'
            placeholder='아무거나 입력해 보세요'
            value={message}
            onChange={onChangeMessage}
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