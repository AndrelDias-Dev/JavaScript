const btnPlay = document.querySelector('#play')
const btnNext = document.querySelector('#next')
const btnPrev = document.querySelector('#previous')
const capa = document.querySelector('.player-img')
const song = document.querySelector('audio')
const nameSong = document.querySelector('.player-name')
const nameBand = document.querySelector('.player-band')
const progressBar = document.querySelector('.player-progress')
const progressContainer = document.querySelector('.player-caixa')


const playList = [
    {id:1, capa: 'neblina.webp' , song:'neblina.mp3' , name:'Constelações em Fogo', band:'Neblina' },
    {id:2, capa:'los capi.jpg' , song:'Los Capi - Ritmo Urbano.mp3' , name: 'Ritmo Urbano', band:'Los Capi' },
    {id:3, capa:'aurora.jpg' , song:'aurora.mp3' , name:'Aurora' , band:'Aurora Selvagem' },
    {id:4, capa:'Sepultura - Roots.png' , song:'Roots Bloody Roots - Sepultura.mp3' , name:'Roots Bloody Roots', band:'Sepultura'},
]

let isSong = false;
let index = 0;

function playSong() {
    btnPlay.querySelector('i').classList.remove('fa-circle-play')
    btnPlay.querySelector('i').classList.add('fa-circle-pause')
    song.play()
    isSong = true
}
function pauseSong() {
    btnPlay.querySelector('i').classList.remove('fa-circle-pause')
    btnPlay.querySelector('i').classList.add('fa-circle-play')
    song.pause()
    isSong = false
}
function decisionSong() {
    if (isSong === true) {
        pauseSong()
    } else {
        playSong()
    }
}
function inicializeSong() {
    capa.src = `imagens/${playList[index].capa}`;
    song.src = `musicas/${playList[index].song}`;
    nameSong.innerText = playList[index].name;
    nameBand.innerText = playList[index].band;
}

function passarMúsica() {
    index++

    if (index > playList.length - 1) {
        index = 0
    }

    inicializeSong();
    playSong()
}

function voltarMúsica() {
    index--

    if (index < 0) {
        index = playList.length - 1
    }
    
    inicializeSong();
    playSong()
}

function updateBar() {
    const barWidth = (song.currentTime/song.duration)*100
    progressBar.style.setProperty('--progress', `${barWidth}%`)
}


inicializeSong();

btnPlay.addEventListener('click', decisionSong)
btnNext.addEventListener('click', passarMúsica)
btnPrev.addEventListener('click', voltarMúsica)
song.addEventListener('timeupdate', updateBar)



