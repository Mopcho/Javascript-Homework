function solve(points) {
    let bonus;

    if (points<=100) {
        bonus=5;
    }
    else if(points>100 && points<1000) {
        bonus=points*(20/100);
    }
    else if(points>1000) {
        bonus=points*(10/100);
    }
    
    if (points%2==0) {
        bonus+=1
    }
    else if(points%5==0) {
        bonus+=2;
    }
    
    points+=bonus;
    console.log(`${bonus} ${points}`);
}

solve(15875);