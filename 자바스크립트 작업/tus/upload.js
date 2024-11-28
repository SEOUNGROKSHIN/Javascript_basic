document.getElementById('uploadButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    function validation() {
    if (!file) {
        alert('파일을 선택하세요.');
        return false;
    }
}


    // Create a progress bar element
    const progressBar = document.getElementById('progress');
    const status = document.getElementById('status');

    // Configure the tus upload
    const upload = new tus.Upload(file, {
        endpoint: 'https://tusd.tusdemo.net/files/', // Replace with your tus server URL
        metadata: {
            filename: file.name,
            filetype: file.type,
        },
        chunkSize: 5242880, // Optional: Chunk size in bytes (5MB here)
        onError: function (error) {
            console.error('Upload failed:', error);
            status.textContent = 'Upload failed: ' + error;
        },
        onProgress: function (bytesUploaded, bytesTotal) {
            const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
            progressBar.style.width = `${percentage}%`;
            progressBar.textContent = `${percentage}%`;
            status.textContent = `Uploading: ${percentage}%`;
        },
        onSuccess: function () {
            console.log('Upload complete:', upload.url);
            progressBar.style.width = '100%';
            progressBar.textContent = '100%';
            status.textContent = 'Upload complete! File URL: ' + upload.url;
        },
    });

    // Start the upload
    validation()
    upload.start();
});
