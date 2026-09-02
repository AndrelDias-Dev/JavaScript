const buttonPlay = document.querySelector('#play');
const song = document.querySelector('.player-song');
let ifSong = false;
let index = 0;


function playSong() {
    buttonPlay.querySelector('i').classList.remove('fa-circle-play');
    buttonPlay.querySelector('i').classList.add('fa-circle-pause');
    song.play()
    ifSong = true;
}

function pauseSong() {
    buttonPlay.querySelector('i').classList.remove('fa-circle-pause');
    buttonPlay.querySelector('i').classList.add('fa-circle-play');
    song.pause()
    ifSong = false;
}

function decisionSong() {
    if (ifSong) {
        pauseSong()
    } else {
        playSong()
    }

}




buttonPlay.addEventListener('click', decisionSong)


