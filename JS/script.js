let sec =0;
let min = 50;
let secField = document.getElementById("seconds");
let minField = document.getElementById("minutes");


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

function start(){
    Interval = setInterval(count,1000)
}

function stopAlert(){
    clearInterval(Interval)

}

function stop(){
    clearInterval(Interval)

}
function reset(){
    stop
    minField.innerHTML=50
    secField.innerHTML=0
    min=50
    sec=0
}

//Begin New Time Button Script
const timebutton = document.getElementById('newTime');
// const modal = document.querySelector("dialog");

// function show(){
//     modal.show()
// }
// function closePop(){
//     modal.close()
// }

// timebutton.addEventListener('click',show);

// const confirmButton = document.getElementById('confirmTime');

// confirmButton.addEventListener('click',closePop)

function newtime(){
    sec = prompt("Novo tempo segundos")
    min = prompt("Novo tempo minutos")

    secField.innerHTML = sec
    minField.innerHTML = min
}









timebutton.addEventListener('click',newtime);

