// 함수 calc()선언과 구현을 하고 있다.
function calc() {
    const currentYear = 2024;
    const birthYear = prompt("태어난 년도를 입력하세요", "YYYY");
    let age = 0;
    // 실제 나이를 구하기 위한 코드
    age = currentYear - birthYear + 1;
    // document(DOM) 는 현재 웹브라우저의 페이지를 의미 , querySelector()는 id가 result인 웹요소 (div)를 의미한다.
    // innerHTML은 대입한 값으로 html문서에 대체하시오라는 의미
    document.querySelector("#result").innerHTML
        = "당신의 나이는" + age + "세 입니다.";
}