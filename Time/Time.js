function solve(hour,minute) {
    if (minute+15 > 60) {
        hour++;
        minute=(minute+15)-60;
    }
    else {
        minute+=15;
    }
    if(hour==24) {
        hour=0;
    }
    if(minute<10) {
        console.log(`${hour}:0${minute}`);
    }
    else {
        console.log(`${hour}:${minute}`);
    }
}

solve(12,49);