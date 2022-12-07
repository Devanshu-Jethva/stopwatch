let hr = document.querySelector('.hour')
let min = document.querySelector('.minute')
let sec = document.querySelector('.second')
let mss = document.querySelector('.ms')
const playpause = document.querySelector('.playpause-btn')
const reset = document.querySelector('.reset-btn')

let hour = 0;
let minute = 0;
let second = 0;
let ms = 0;


let stopwatch = () => {
    ms++;
    // console.log(ms);
    mss.innerText = `${ms.toString().padStart(2,'0')}`
    if(ms==10){
        ms=0;
        second++;
    }
    sec.innerText = `${second.toString().padStart(2,'0')}`
    if(second==60){
        second=0;
        minute++;
    }
    min.innerText = `${minute.toString().padStart(2,'0')}`
    if(minute==60){
        minute=0;
        hour++;
    }
    hr.innerText = `${hour.toString().padStart(2,'0')}`
}

let timerbehaviour = 'stopped'
let intervalID

playpause.addEventListener('click',()=>{
    if(timerbehaviour === 'stopped'){
        timerbehaviour = 'running'
        playpause.classList.remove('fa-play')
        playpause.classList.add('fa-pause')
        intervalID =  setInterval(stopwatch,100)
    }
    else{
        clearInterval(intervalID)
        timerbehaviour = 'stopped'
        playpause.classList.add('fa-play')
        playpause.classList.remove('fa-pause')
    }
})

reset.addEventListener('click',()=>{
    hour = 0;
    minute = 0;
    second = 0;
    ms = 0;
    mss.innerText = `${ms.toString().padStart(2,'0')}`
    sec.innerText = `${second.toString().padStart(2,'0')}`
    min.innerText = `${minute.toString().padStart(2,'0')}`
    hr.innerText = `${hour.toString().padStart(2,'0')}`

})