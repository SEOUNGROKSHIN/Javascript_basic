$(document).ready(function () {
    // 지구 웹요소(노드) 찾아서 저장
    let $gigu = $("#gigu");
    // 버튼에 이벤트 등록.
    // 버튼을 클릭하면 콜백함수가 실행됨
    $("#btnStart").click(function () {
        $gigu.animate({
            left : "480px"
        }, 5000);
    })
})