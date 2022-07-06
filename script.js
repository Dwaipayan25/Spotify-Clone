console.log("Welcome To Spotify")


//initialise the variables
let songsongIndex=1;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');
// audioElement.play();

let songs=[
     {songName: "look what you made me do", filePath:"songs/1.mp3", coverPath: "covers/c1.jpeg"},
     {songName: "Blank Space", filePath:"songs/2.mp3", coverPath: "covers/c2.jpeg"},
     {songName: "love story", filePath:"songs/3.mp3", coverPath: "covers/c3.jpeg"},
     {songName: "shake it off", filePath:"songs/4.mp3", coverPath: "covers/c4.jpeg"},
     {songName: "wildest dreams", filePath:"songs/5.mp3", coverPath: "covers/c5.jpeg"},
     {songName: "me", filePath:"songs/6.mp3", coverPath: "covers/c6.jpeg"},
     {songName: "enchanted", filePath:"songs/7.mp3", coverPath: "covers/c7.jpeg"},
     {songName: "ready for it", filePath:"songs/8.mp3", coverPath: "covers/c8.jpeg"},
     
]

//set cover and song name
songItems.forEach((element,i)=>{
     console.log(element,i);
     element.getElementsByClassName("coverPic")[0].src=songs[i].coverPath;
     element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})


//handle play pause
masterPlay.addEventListener('click',()=>{
     songIndex=0;
     if(audioElement.paused || audioElement.currentTime<=0){
          audioElement.play();
          masterPlay.classList.remove('fa-circle-play');
          masterPlay.classList.add('fa-circle-pause');
          gif.style.opacity=1;
     }
    else{
          audioElement.pause();
          masterPlay.classList.remove('fa-circle-pause');
          masterPlay.classList.add('fa-circle-play');
          gif.style.opacity=0;
     }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
     console.log('timeupdate');
     //update seekbar
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
     console.log(progress);
     myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
     audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
//make all play
const makeAllPlays=()=>{
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
          element.classList.add('fa-circle-play');
     })
}


// song Item Play form menu
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.addEventListener('click',(e)=>{
          songIndex=parseInt(e.target.id);
          console.log(e.target);
          makeAllPlays();
          e.target.classList.remove('fa-circle-play');
          e.target.classList.add('fa-circle-pause');
          audioElement.src=`songs/${songIndex}.mp3`;
          audioElement.currentTime=0;
          audioElement.play();
          masterSongName.innerHTML=songs[songIndex-1].songName;
          masterPlay.classList.remove('fa-circle-play');
          masterPlay.classList.add('fa-circle-pause');
          gif.style.opacity=1;
          
     })
})

document.getElementById('next').addEventListener('click',()=>{
     // songIndex=parseInt(e.target.id);
     if(songIndex>7)
          songIndex=1;
     else
          songIndex++;
          audioElement.src=`songs/${songIndex}.mp3`;
          audioElement.currentTime=0;
          audioElement.play();
          masterSongName.innerHTML=songs[songIndex-1].songName;
          masterPlay.classList.remove('fa-circle-play');
          masterPlay.classList.add('fa-circle-pause');
          gif.style.opacity=1;
         
})
document.getElementById('previous').addEventListener('click',()=>{
     // songIndex=parseInt(e.target.id);
     if(songIndex>1)
          songIndex--;
     else
          songIndex=8;

          audioElement.src=`songs/${songIndex}.mp3`;
          audioElement.currentTime=0;
          audioElement.play();
          masterSongName.innerHTML=songs[songIndex-1].songName;
          masterPlay.classList.remove('fa-circle-play');
          masterPlay.classList.add('fa-circle-pause');
          gif.style.opacity=1;
         
})