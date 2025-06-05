
let milliSec = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timer = false;

function start(){
    if(timer === true) return;
    timer = true;
    myFun();
}

function stop(){
    timer = false;
    myFun();
}

function reset(){
    location.reload(); //It’s a method of the location object that reloads the current page.

}
//location is a built-in object in JavaScript that contains information about the current URL of the page
function myFun(){
    if(timer == true){
        milliSec = milliSec + 1;
        if(milliSec == 100){
            sec = sec + 1;
            milliSec = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1;
            min = 0
        }
         
        let getSec = sec;
        let getMin = min;
        let getHr = hr;

        if(sec < 10){
            getSec = "0" + sec;
        }
        if(min < 10){
            getMin = "0" + min;
        }
        if(hr < 10){
            getHr = "0" + hr;
        }

        setTimeout("myFun()", 10)
        document.getElementById("millisec").innerHTML = milliSec;
        document.getElementById("sec").innerHTML = getSec;
        document.getElementById("min").innerHTML = getMin;
        document.getElementById("hr").innerHTML = getHr;
    }
}