//Declarations
let sec =0;
let min = 50;
let secField = document.getElementById("seconds");
let minField = document.getElementById("minutes");
const newTimeButton = document.querySelector("button#newTime");
const modal = document.getElementById("modal");

//Function set up the timer
function count(){
    if ((min>0)&&(sec==0)){
        min--;
        minField.innerHTML=min;
        sec = 59;
        secField.innerHTML=sec;
    }else if(sec>0){
        sec--;
        secField.innerHTML=sec;
    }else if((min==0)&&(sec==0)){
        alert("Acabou o tempo")
        clearInterval(Interval)
    }
}
//Function to start the timer
function start(){
    Interval = setInterval(count,1000)
}

function stopAlert(){
    clearInterval(Interval)

}
//Function to stop the timer
function stop(){
    clearInterval(Interval)

}
//Function to reset the timer
function reset(){
    stop
    minField.innerHTML=50
    secField.innerHTML=0
    min=50
    sec=0
}

//Begin New Time Button Script
const timebutton = document.getElementById('newTime');

//Button to open the dialog
function open_modal(){
    modal.showModal();
}


newTimeButton.addEventListener('click',open_modal);

//New time dialog and button
const conf_btn = document.getElementById('confirmTime');


function newTime(){
    sec = document.getElementById('sec').value;
    min = document.getElementById('min').value;

    if ((sec==null)||(sec==NaN)||(sec=="")){
        sec = 0
    }
    if ((min==null)||(min==NaN)||(min=="")){
        min = 0
    }
    

    secField.innerHTML=sec;
    minField.innerHTML=min;
    modal.close();
}

conf_btn.addEventListener('click',newTime);