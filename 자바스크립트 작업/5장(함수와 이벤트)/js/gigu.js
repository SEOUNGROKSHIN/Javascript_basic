// 전역변수로 선언
let $gigu = null;

$(document).ready(function () {
    initialize();
    event();

});
// 지구본 찾기
// let $gigu = $("#gigu");

$(document).ready(function() {
    initialize();
    event();
});
// 전역변수를 초기화
function initialize() {
    // 지구본 찾기
    $gigu = $("#gigu");
}
// 이벤트와 관련된 내용을 함수로 등록
function event() {
    // 버튼에 이벤트 등록
    $("#btnStart").click(function () {
        // 지구본이 움직이기
        // 지구본 위치 값 구하기
        let x = parseInt($("#txtX").val());
        let y = parseInt($("#txtY").val());
        moveGigu(x , y);
    });
}

function moveGigu(x, y) {

    if ((x >= 0 && x <= 500) && (y >= 0 && y <= 300)) {
        $gigu.css({
            left: x,
            top: y
        });
    }
    else
        alert("입력된 값이 범위를 벗어남");
}
