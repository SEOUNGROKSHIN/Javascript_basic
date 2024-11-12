let user = {
    name : "Rocky",
    age : 20,

};

// 함수 선언
function helloShin() {
    console.log("hello");
}

// 함수 실행
console.log("일반함수 실행");
helloShin();

// 리턴함수
function helloReturn() {
    return "Shin";
}
let hello = helloReturn();
console.log("리턴함수 사용")
console.log(hello);

// 익명함수
let world = () => {
    console.log("Hello anonym")
}
console.log("익명함수")
world();

// 객체 데이터
const Rocky = {
    name: "SHIN",
    age : 20,
    // 메소드(Method) [함수의 표현]
    getName: () => {
        return "My real Name is SEOUNGROKSHIN";
    }
}
const myName = Rocky.getName();

console.log("내이름은")
console.log(Rocky.getName());

