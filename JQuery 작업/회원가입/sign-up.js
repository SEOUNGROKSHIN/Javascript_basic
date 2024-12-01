const fileInput = document.getElementById('profileImage');
const file = fileInput.files[0];

// 파일을 FormData로 추가
const formData = new FormData();
formData.append('file', file);

$.ajax({
    url: '/upload',   // 파일을 업로드할 서버 엔드포인트
    type: 'POST',     // HTTP 요청 메서드
    data: formData,
    processData: false, // 데이터 처리 방식을 false로 설정
    contentType: false, // 파일 전송을 위한 설정
    success: function(response) {
        // 서버로부터 파일 URL을 받았다면 로컬 저장소에 URL 저장
        localStorage.setItem('profileImageUrl', response.fileUrl);
    },
    error: function(error) {
        console.error('파일 업로드 실패', error);
    }
});
