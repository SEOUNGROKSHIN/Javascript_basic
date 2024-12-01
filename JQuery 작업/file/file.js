$(document).ready(function () {
    $('#file-input').on('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            // 파일 읽기 완료 후 실행
            reader.onload = function (e) {
                $('#preview').attr('src', e.target.result); // 미리보기 이미지 설정
            };

            reader.readAsDataURL(file); // 파일 읽기
        } else {
            $('#preview').attr('src', ''); // 파일이 없으면 미리보기 초기화
        }
    });
});
