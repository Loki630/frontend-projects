let clockText = document.getElementById("clock-text");
const twelveHourBtn = document.getElementById("change-format-12");
const twentyFourHourBtn = document.getElementById("change-format-24");



function twelveHourFormat(){
    clearInterval(twentyFourHourInterval);
    twelveHourInterval = setInterval(function(){
    const now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if(hour > 12){ hour %= 12}
    if( hour < 10) hour = `0${hour}`;
    if( minutes < 10) minutes = `0${minutes}`;
    if( seconds < 10) seconds = `0${seconds}`;
    clockText.innerText = `${hour}:${minutes}:${seconds}`;
    },1000);
}

function twentyfourHourFormat(){
    clearInterval(twelveHourInterval);
    twentyFourHourInterval = setInterval(function(){
    const now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if( hour < 10) hour = `0${hour}`;
    if( minutes < 10) minutes = `0${minutes}`;
    if( seconds < 10) seconds = `0${seconds}`;
    clockText.innerText = `${hour}:${minutes}:${seconds}`;
},1000);
}

twentyFourHourInterval = setInterval(function(){
    const now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if( hour < 10) hour = `0${hour}`;
    if( minutes < 10) minutes = `0${minutes}`;
    if( seconds < 10) seconds = `0${seconds}`;
    clockText.innerText = `${hour}:${minutes}:${seconds}`;
},1000);