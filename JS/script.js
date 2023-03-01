let sec = 0;
let min = 50;
let hrs = 0;
let i = 0;
let secField = document.getElementById("seconds");
let minField = document.getElementById("minutes");
let hrsField = document.getElementById("hours");
const Interval = setInterval(count,1000)
clearInterval(Interval)

//Função para contar segundos
//function count(){
//    if (secField.textContent>0){
//        sec--
//        secField.innerHTML=sec;
//    } else{
//        clearInterval(count)
//        start()
//    }
//}

//function start(){
    //if ((minField.textContent!==0)&&(secField.textContent==0)){
        //min--;
        //minField.innerHTML = min;
        //sec = 60;
        //secField.innerHTML = sec;

    //}
    //if (secField.textContent>0){
        //setInterval(count, 1000)
        //sec--
        //secField.innerHTML = sec
    //}




//}


function count(){
    if((hrsField.textContent!==0)&&(minField.textContent==0)&&(secField.textContent==0)){
        hrs--;
        hrsField.innerHTML=hrs;
        min = 59;
        minField.innerHTML=min;
        sec = 59;
        secField.innerHTML=sec;
    }else if ((hrsField.textContent==0)&&(minField.textContent!==0)&&(secField.textContent==0)){
        min--;
        minField.innerHTML=min;
        sec = 59;
        secField.innerHTML=sec;
    }else if(secField.textContent!==0){
        sec--;
        secField.innerHTML=sec;
    }else if((hrsField.textContent==0)&&(minField.textContent==0)&&(secField.textContent==0)){
        alert("Acabou o tempo")
        clearInterval(Interval)
    }
}

function start(){
    setInterval(count, 1000)
}

function stopAlert(){
    clearInterval(Interval)

}

function stop(){
    clearInterval(Interval)

}
function reset(){
    stop
    hrsField.innerHTML=0
    minField.innerHTML=50
    secField.innerHTML=0
    hrs=0
    min=50
    sec=0
}


