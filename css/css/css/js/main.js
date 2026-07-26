let progress = 0;

const bar = document.getElementById("loadingProgress");

const loading = document.getElementById("loadingScreen");

const menu = document.getElementById("mainMenu");

const play = document.getElementById("playBtn");

const timer = setInterval(()=>{

progress+=2;

bar.style.width=progress+"%";

if(progress>=100){

clearInterval(timer);

loading.style.display="none";

}

},30);

play.onclick=()=>{

menu.style.display="none";

alert("Welcome to DSC Alpha v0.1");

};
