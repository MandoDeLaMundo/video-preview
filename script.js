console.log("page loaded...");

var x = document.getElementById("vid");

function over(){
    x.play();
}

function out(){
    x.pause();
    x.currentTime = 0;
}

