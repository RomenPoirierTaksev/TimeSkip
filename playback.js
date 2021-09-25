const videoPlayer = document.querySelector('video');
var ready = false;
if (videoPlayer != null) {
            videoPlayer.addEventListener('loadeddata', function() {
                ready = true;
            });
        }

chrome.runtime.onMessage.addListener((msg,sender,response) =>{

    if(msg.name == "sendTime" && ready){
        minutes = parseInt(msg.data[0].toString().substring(0,1));
        seconds = parseInt(msg.data[0].toString().substring(2,4));
        //console.log(msg.data)
        //console.log(minutes, seconds);
        videoPlayer.currentTime = minutes * 60 + seconds;
    }
});



