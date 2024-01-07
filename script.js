let audioElement = new Audio('songs/3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let vBar =document.getElementById('vBar');
let muteButton = document.getElementById('muteButton');
let startTime= document.getElementById('startTime');
let endTime= document.getElementById('endTime');
let masterSongName = document.getElementById('masterSongName');
let masterSongArtist = document.getElementById('masterSongArtist');
let card= Array.from(document.getElementsByClassName('card'));
let songIndex =2;
let songThumbnail= document.getElementById('songThumbnail');
let songPrevious= document.getElementById('songPrevious');
let songNext= document.getElementById('songNext');
let forSeek= document.getElementById('forSeek');
let backSeek= document.getElementById('backSeek');
let songs = [
    {songName: "Perfect",songArtist:"ED_SHEERAN", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg"},
    {songName: "Until I Found Her",songArtist:"STEPHAN SANCHEZ", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Make You Mine",songArtist:"PUBLIC", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg"},
    {songName: "Deja-vu",songArtist:"OLIVIA RODRIGO", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg"}
]



Array.from(document.getElementsByClassName('songItems')).forEach(element => {
    element.addEventListener('click',(e)=>{
        songIndex=parseInt(e.target.id);
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML=songs[songIndex].songName;
        masterSongArtist.innerHTML=songs[songIndex].songArtist;
        songThumbnail.style.backgroundImage=`url('covers/${songIndex+1}.jpeg')`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
});

songPrevious.addEventListener('click',()=>{
    if(songIndex==0){
        songIndex=3;
    }
    else{
        songIndex--;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML=songs[songIndex].songName;
        masterSongArtist.innerHTML=songs[songIndex].songArtist;
        songThumbnail.style.backgroundImage=`url('covers/${songIndex+1}.jpeg')`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
songNext.addEventListener('click',()=>{
    if(songIndex==3){
        songIndex=0;
    }
    else{
        songIndex++;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML=songs[songIndex].songName;
        masterSongArtist.innerHTML=songs[songIndex].songArtist;
        songThumbnail.style.backgroundImage=`url('covers/${songIndex+1}.jpeg')`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
backSeek.addEventListener('click',()=>{
    audioElement.currentTime -=5;
    
})
forSeek.addEventListener('click',()=>{
    audioElement.currentTime +=5;
    
})






masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
       
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
audioElement.addEventListener('timeupdate', ()=>{ 
        endTime.firstChild.innerHTML=("0" + parseInt(audioElement.duration/60)).slice(-2);
        endTime.lastChild.innerHTML=("0" + parseInt(audioElement.duration%60)).slice(-2);
        
        progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
        myProgressBar.value = progress;

        startTime.firstChild.innerHTML=("0" + parseInt(audioElement.currentTime/60)).slice(-2);
        startTime.lastChild.innerHTML=("0" + parseInt(audioElement.currentTime%60)).slice(-2);
        
})

audioElement.addEventListener('volumechange',()=>{
    vBar.value=audioElement.volume*100;
    if(vBar.value == 0){
        muteButton.classList.remove('fa-volume-high');
        muteButton.classList.add('fa-volume-xmark');
    }
    else{
        muteButton.classList.remove('fa-volume-xmark');
        muteButton.classList.add('fa-volume-high');
        
    }
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

vBar.addEventListener('change', ()=>{
    audioElement.volume= vBar.value/100;

})

muteButton.addEventListener('click', ()=>{
    if(audioElement.volume != 0){
        audioElement.volume = 0;
        muteButton.classList.remove('fa-volume-high');
        muteButton.classList.add('fa-volume-xmark');
        
    }
    else{
        audioElement.volume = 0.1;
        muteButton.classList.remove('fa-volume-xmark');
        muteButton.classList.add('fa-volume-high');
        
    }
})



document.onkeydown = function(e) {
    if (e.which== 77) {
        audioElement.currentTime +=5;
    }
    else if (e.which== 78) {
        audioElement.currentTime -=5;
    }
    else if (e.which== 76) {
        audioElement.volume += 0.1;
    }
    else if (e.which== 75) {
        audioElement.volume -= 0.1;
    }
    else if (e.which== 32) {
        if(audioElement.paused){
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');

        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
        }
    }
};