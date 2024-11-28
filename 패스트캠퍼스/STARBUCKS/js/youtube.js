// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
        videoId: 'erzgOS8mctI', // 최초 재생할 유튜브 영상 ID https://www.youtube.com/watch?v=erzgOS8mctI
        playerVars: {
            autoplay: true, // 자동재생
            loop: true, // 반복재생유무
            playlist: 'erzgOS8mctI' // 반복 재생할 유튜브 영상 ID 목록
        },
        events: {
            onReady: function (event) {
                console.dir(event.target);
                event.target.mute() // 음소거
            }
        }
    });
}