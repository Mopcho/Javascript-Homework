function solve(x,y,z) {
    let first=Math.floor((x+y+z)/60);

    let seconds = (x+y+z)-(first*60);

    if(seconds==0) {
        console.log(`${first}:00`);
    }
    
    else {
    console.log(`${first}:${seconds}`);
    }
}

solve(10,10,40);