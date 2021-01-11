const http = require('http')
// const 변수 선언 - type 상관 없음
// http 모듈 : http 프로토콜을 사용할 수 있게 만들어둔 모듈
// 모듈을 호출할 땐 일반적으로 모듈과 같은 name 사용

const hostname = '127.0.0.1'
//본인 pc에 접속 하려면 무조건 위의 IP 주소 또는 localhost

const port = 3000;
// Port : 서버로 접속할 수 있게해주는 창구
// 3000은 오픈 포트
// http:80 / https:443

const server = http.createServer((req,res) => {
    // request : client의 요청, response : 서버의 응답
    //웹 서버 생성 - 클라이언트에서 호출될 때 마다 실행되야 하므로 꺼지면 안됨
    res.statusCode = 200;
    res.setHeader('Contenet-Type', 'text/plain') // header : 전송하는 데이터의 타입등을 규정하는 부분, 보내려는 정보가 text임
    res.end('Hello World\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})