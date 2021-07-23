const audio=document.querySelector("audio");
const play=document.getElementById("play");
const img=document.querySelector("img");
const forward=document.getElementById("forward");
const reverse=document.getElementById("reverse");
const images=document.getElementById("images");
const title=document.getElementById('nam');
let playing=false;
const playMusic= () =>{
    playing=true;
audio.play();
play.classList.replace("fa-play","fa-pause");
img.classList.add("anime");}
;
const pauseMusic= () =>{
    playing=false;
audio.pause();
play.classList.replace("fa-pause","fa-play");
img.classList.remove("anime");}
;
play.addEventListener('click',() =>{
    if(playing){
        pauseMusic();
    }else{
    playMusic();
    }
});
const songs=[
    {
        name:"sunita-1",
        title:"ON"

    },

    {
        name:"sunita-2",
        title:"Pied-Peper",

    },

    {
        name:"sunita-3",
        title:"Fake-Love",

    }
];
const loadsong=(songs)=>{
    title.textContent=songs.title;
    audio.src="song/"+songs.name+".mp3";
    img.src="images/"+songs.name+".jpg";
};
let songIndex=0;
const nextsong=()=>
{
    songIndex=(songIndex+1)%songs.length;
    loadsong(songs[songIndex]);
    playMusic();
}
const prevsong=()=>
{
    songIndex=(songIndex-1+songs.length)%songs.length;
    loadsong(songs[songIndex]);
    playMusic();
}
forward.addEventListener('click',nextsong);
reverse.addEventListener('click',prevsong);
