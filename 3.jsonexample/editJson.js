const example = require('./json.json')
// JSON파일 불러오기

console.log('example :', example)

example.Name = 'change'
example["gender"] = 'Male' // 두개 다 똑같이 불러오는 방식

console.log('changed example : ', example)


// example = 3 

// console.log('changed example : ', example)

//안에 들어가는 value값만 변경할 수 있음
