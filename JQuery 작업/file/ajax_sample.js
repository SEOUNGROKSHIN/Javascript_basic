function apiRequestFile(url, method, param, async, successCallback, errorCallback){

    const data = param == null ? {} : param;

    return $.ajax({
        type: method,
        url: url,
        enctype: "multipart/form-data",
        processData: false,  // 필수: 데이터 처리 방식을 false로 설정
        contentType: false,  // 필수: 컨텐츠 타입을 false로 설정
        data: data,
        async: async,
        success: successCallback,
        error: errorCallback
    });
}
