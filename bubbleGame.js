var timer = 60;
var score = 0;
var hitrn = 0;

function getnewhit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector('#newhit').textContent = hitrn;
}

function getnewscore(){
    score += 10
    document.querySelector('#newScore').textContent = score;
}

function makebubble() {
  var clutter = "";

  for (var i = 1; i <= 162; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".pnlbtm").innerHTML = clutter;
}

function runtimer() {
    var settimer = setInterval(function () {
        if(timer>0){
            timer--;
            document.querySelector("#Timeval").textContent = timer;
        }else{
            clearInterval(settimer)
            document.querySelector('.pnlbtm').innerHTML = `<h1>Game Over</h1> <button id="restartBtn" >Restart </button>`
            document.querySelector('#restartBtn').addEventListener('click', restartGame);

        }
    }, 1000);
}

document.querySelector('.pnlbtm')
.addEventListener('click',function(dets){
    var clickednum = Number(dets.target.textContent)
    if(clickednum === hitrn){
        getnewscore();
        getnewhit();
        makebubble();
    }

})

function restartGame(){
    timer = 60;
    score = 0;
    document.querySelector("#Timeval").textContent = timer;
    document.querySelector("#newScore").textContent = score;
    getnewhit();
    makebubble();
    runtimer();
}

function startCountdown() {
    let count = 3;
    document.querySelector(".pnlbtm").innerHTML = `<h1>${count}</h1>`;
    
    let countdownInterval = setInterval(function () {
        count--;
        if (count > 0) {
            document.querySelector(".pnlbtm").innerHTML = `<h1>${count}</h1>`;
        } else {
            clearInterval(countdownInterval);
            document.querySelector(".pnlbtm").innerHTML = `<h1>Go!</h1>`;
            setTimeout(() => {
                makebubble();
                runtimer();
                getnewhit();
            }, 500);
        }
    }, 1000);
}


// makebubble();
// runtimer();
// getnewhit();

startCountdown();

