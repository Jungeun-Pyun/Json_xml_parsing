var fs = require('fs') 
// fs : nodejs에서 제공하는 파일을 읽고 쓸 수 있는 모듈
xml2js = require('xml2js') 
// xml2js : xml파일을 읽고 파싱하는 모듈, npm에서 다운로드
// npm에서 모듈을 다운받기 전에 모듈을 관리해주는 package.json이란 파일을 생성한다.
// termianl 창에서 npm init 을 실행해서 package.json 파일 생성 가능

// npm에서 찾은 패키지 설치 : npm i package-name
// 설치한 패키지를 저장해서 관리하고 싶으면 npm i package-name --save
// 해당 폴더에 node-modules라는 폴더가 생기고 그 안에 설치한 패키지 정보를 확인할 수 있다.
// pacage.json에 설치한 패키지 관련 정보가 업데이트 된다.

var parser = new xml2js.Parser();
// xml2js의 xml 파싱 모듈 불러오기

const http = require('http'); 
// const 변수 선언 - type 상관 없음
// http 모듈 : http 프로토콜을 사용할 수 있게 만들어둔 모듈
// 모듈을 호출할 땐 일반적으로 모듈과 같은 name 사용

const hostname = '127.0.0.1';
// hostname : 서버 ip 주소
// 해당 서버는 내 pc의 ip 주소 
// 본인 pc에 접속 하려면 무조건 위의 IP 주소 또는 localhost

const port = 3000;
// Port : 서버로 접속할 수 있게해주는 창구
// 3000은 오픈 포트
// http:80 / https:443

const server = http.createServer((req,res) => { 
    // 웹 서버 생성 - 클라이언트에서 호출될 때 마다 실행되야 하므로 꺼지면 안됨
    // request : client의 요청, response : 서버의 응답
    // request에 url정보가 있음
    console.log('change')
    res.statuscode = 200;
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    // header : 전송하는 데이터의 타입등을 규정하는 부분
    // Access control * 는 모든 사용자(도메인) 접근 허용
    res.setHeader('Content-Type', 'text/plain');
    // 보내려는 정보가 text임
    const url = require('url').parse(req.url, true);
    console.log('url : ',url)
    // url........?????

    if(url.pathname === '/xml') {
        // http://127.0.0.1:3000/xml
        fs.readFile(__dirname + '/example.xml', function(err,data) { 
            //__dirname : 절대경로를 불러오는 것
            // console.log('__dirname : ',__dirname)
            // 현재 폴더 directory 확인
            parser.parseString(data,function(err,result) {
                // parseString은 결과값을 JSON으로 출력
                // result는 JSON 형태
                console.log('xml data : ', data)
                console.log('xml result : ', result)

                let json = JSON.stringify(result)
                // result를 string형태로 변환
                res.write(json)
                res.end()
            });
        });
    } else if (url.pathname === '/json') {
        // http://127.0.0.1:3000/json
        fs.readFile(__dirname + '/json.json', function(err,data) {
            let json = JSON.parse(data)
            res.write(JSON.stringify(json))
            res.end()
        });
    } else {
        res.end('Hello World\n');
    }
});

server.listen(port, hostname, () => { 
    //listen method로 서버 실행
    console.log(`Server running at http://${hostname}:${port}/`);
});


// ------------참고-------------
// == : 값 일치 여부 확인
// === : 타입 일치 여부까지 확인

//let one = null //키에 값이 없음
//let two = undefined // 정의가 안되어 있음
// one == two : true 
// one === two : false 
