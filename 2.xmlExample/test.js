let name = 'Jenna' // 가변변수
const age = 28 // 고정변수
name = 'Jungeun'

function testCallback(){
    console.log('finish')
}

function testCallback2(){
    console.log('finish2')
}

function testMethod(getText, callback) {
    console.log("getText : ",getText)
    callback()
}

testMethod(name, testCallback)
// testMethod(age)

