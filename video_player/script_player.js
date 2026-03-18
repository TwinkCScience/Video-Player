const video = document.getElementById("video_main");
const btn_pause = document.getElementById("pause_btn");
const current_time = document.getElementById("currently_time");
const end_time = document.getElementById("end_time");
const range = document.getElementById("range_btn");
const speed = document.getElementById("speed");
const mute = document.getElementById("mute");
const volume = document.getElementById("volume_btn");
const full_btn = document.getElementById("full_btn");
const inp = document.getElementById("in_pause")
const player = document.getElementById("player-container")

let value;


function pauseButton(){
    if (video.paused) {
        video.play();
        btn_pause.textContent = "❚❚";
    }
    else {
        video.pause();
        btn_pause.textContent = "▶";
    }
}

function getTime() {

    const current = Math.floor(video.currentTime);

    const minutes = Math.floor(current / 60);
    const seconds = (current % 60).toString().padStart(2, "0");

    const timeString = `${minutes}:${seconds}`;

    current_time.textContent = timeString;
}

function endTime() {

    const duration = Math.floor(video.duration);

    const minutes = Math.floor(duration / 60);
    const seconds = (duration % 60).toString().padStart(2, "0");

    const timeString = `${minutes}:${seconds}`;

    end_time.textContent = timeString;
}

range.addEventListener('input', function(){
    video.playbackRate = range.value;
    speed.textContent = range.value;
})

function muteSilence(){
    if(video.volume == 1){
        video.volume = 0;
        mute.textContent = "🔇";
    }
    else {
        video.volume = 1;
        mute.textContent = "🔊";
    }
}

volume.addEventListener('input', function(){
    video.volume = volume.value;
})

full_btn.addEventListener('click', function(){
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }
    else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }
})

video.addEventListener('contextmenu', function(e){
    e.preventDefault();
})