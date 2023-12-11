
const API_KEY = 'YOUR_API_KEY';
let player;

function loadVideo() {
    const videoId = document.getElementById('videoIdInput').value;

    if (videoId.trim() !== '') {
        if (player) {
            player.loadVideoById(videoId);
        } else {
            createPlayer(videoId);
        }
    }
}

function createPlayer(videoId) {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    
}
