const { DH_NOT_SUITABLE_GENERATOR } = require('constants')
const fs = require('fs')
// fs : nodejs에서 제공하는 파일을 읽고 쓸 수 있는 모듈
const xml2js = require('xml2js') 
// xml2js : xml파일을 읽고 파싱하는 모듈, npm에서 다운로드
// npm에서 모듈을 다운받기 전에 모듈을 관리해주는 package.json이란 파일을 생성한다.
// termianl 창에서 npm init 을 실행해서 package.json 파일 생성 가능

// npm에서 찾은 패키지 설치 : npm i package-name
// 설치한 패키지를 저장해서 관리하고 싶으면 npm i package-name --save
// 해당 폴더에 node-modules라는 폴더가 생기고 그 안에 설치한 패키지 정보를 확인할 수 있다.
// pacage.json에 설치한 패키지 관련 정보가 업데이트 된다.


const parser = new xml2js.Parser()
// xml2js의 xml 파싱 모듈 불러오기

console.log('__dirname : ',__dirname)
// 현재 폴더 directory 확인

fs.readFile(__dirname + '/example.xml', function(err, data) {
    // xml 데이터 읽음, 콜백 함수 활용
    console.log('data:', data)

    parser.parseString(data, function (err, result) {
        // xml파일을 String으로 parsing
        console.log('result : ', result)
        console.log('result.ORDER_LIST :', result.ORDER_LIST)
        console.log('result.ORDER_LIST.HEADER :',result.ORDER_LIST.HEADER)
        console.log('Done')
    })
})