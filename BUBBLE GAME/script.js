var timer = 60;
var score = 0;
var hitrn = 0;

// jispe click karoge vo particular element par event raise hoga aur event listner na milne par event element k parent pe listner mileg aur waha bhi nhi milne par parent k parent k parent par istner dhoodega 

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
   hitrn =  Math.floor(Math.random() *10);
   document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble(){
    var clutter = "";

for (var i = 1; i <= 70; i++) {
   var rn= Math.floor(Math.random() * 10) // math.floor() number k baad ka decimal value remove kr deta hai aur math.random() hume 0 se 1 k beech ki value deta hai aur agr math.random() ko 10 se multiply kr dene to vo 0 se 10 ki beech ki value dega decimal k saath    == math.floor(math.random()*10) ye hume 0 se 10 k beech ki value dega vo bhi without decimal place 
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm"). innerHTML = clutter;
}
function runTimer(){
  var timerint=  setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent =timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML =`<h1>Game Over </h1>`;
        }
       
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    var  clickednum = Number(details.target.textContent);
    if(clickednum===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})
runTimer();
makeBubble();
getNewHit();
