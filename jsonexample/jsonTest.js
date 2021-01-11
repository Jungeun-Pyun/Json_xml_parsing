let jsonObject = {
    "Name":"Jungeun",
    "gender":"female",
    "hobbies": [
        {
            "name":"soccer",
            "level":1
        },
        {
             "name":"jogging",
             "level":2
         },
         {
             "name":"driving",
             "level":0
         }
    ] 
}
console.log('jsonObject : ',jsonObject)
console.log('typeof(jsonObject):',typeof(jsonObject))
// JSON형태로 출력됨


let stJson = JSON.stringify(jsonObject) 
// let은 변경 가능한 변수 선언, const는 변경 불가능한 변수 선언
// JSON.stringify : JSON파일 문자화 함수

console.log('stJson : ', stJson)
console.log('typeof(stJson) : ', typeof(stJson))
// string형태로 출력됨



let jsonObjectAgain = JSON.parse(stJson)
// string값을 다시 json데이터로 변경하는 명령어

