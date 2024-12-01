$(document).ready(function () {
    $('#upload-button').on('click', function () {
        const fileInput = $('#file-input')[0];
        if (fileInput.files.length === 0) {
            alert('파일을 선택하세요!');
            return;
        }

        const formData = new FormData();
        formData.append('file', fileInput.files[0]);

        // AJAX 요청
        $.ajax({
            url: '/upload', // 서버의 업로드 엔드포인트
            type: 'POST',
            data: formData,
            processData: false, // 필수: 데이터를 쿼리 문자열로 변환하지 않음
            contentType: false, // 필수: 브라우저가 적절한 Content-Type을 설정하도록 함
            xhr: function () {
                const xhr = new XMLHttpRequest();
                xhr.upload.addEventListener('progress', function (e) {
                    if (e.lengthComputable) {
                        const percentComplete = (e.loaded / e.total) * 100;
                        $('#progress-container').show();
                        $('#progress-bar').val(percentComplete);
                        $('#progress-text').text(`${percentComplete.toFixed(2)}%`);
                    }
                }, false);
                return xhr;
            },
            success: function (response) {
                $('#result').html('<p>업로드 성공!</p>');
            },
            error: function (error) {
                $('#result').html('<p>업로드 실패: ' + error.statusText + '</p>');
            }
        });
    });
});
