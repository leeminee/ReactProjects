import axios from 'axios';

export default function customAxios(url, callback) {
    axios(
        {
            url:'/api'+url,
            method: 'post',

            /**
             * 개발환경에서의 크로스 도메인 이슈를 해결하기 위한 코드로
             * 운영환경에 배포할 경우에는 아래메소드 주석처리하자.
             * 💡 크로스 도메인 이슈: 브라우저에서 다른 도메인으로 url 요청을 하는 경우 나타나는 보안문제
             */
            baseURL: 'http://localhost:8080',
            withCredentials:true,
        }
    ).then(function (response) {
        callback(response.data);
    });
}