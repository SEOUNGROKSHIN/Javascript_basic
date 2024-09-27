$(document).ready(function () {
    init();
    initEvent();
});

let $images = null;

function init() {
    // 배열로 이미지들을 받고 있다.
    $images = $("#container1 img");
}

function initEvent() {
    $("#btnStart").click(function () {
        showImage();
    });
}

function showImage() {
    let click = $("#btnStart").click(function () {
        // 이미지의 개수 구하기
        let length = $images.length;

        // 이미지 나열하기
        for (let i = 0; i < length; i++) {
            // eq()를 이용 인덱스에 맞는 이미지를 저장하고 있다.
            let $img = $images.eq(i);
            // 위치의 값을 구하기
            let x = 100 + ((i % 3) * 200);
            let y = 100 + (parseInt(i / 3) * 200);

            // 이미지의 위치를 설정하는 부분
            $img.css({
                left: x,
                top: y
            });
        }
    }); // 여기에 괄호가 빠져있었습니다.
}