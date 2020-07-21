function solve(figure,x,y) {
    if(figure=="square") {
        console.log(x*x);
    }
    else if(figure=="rectangle") {
        console.log(x*y);
    }
    else if(figure=="circle") {
        console.log(Math.PI*(Math.pow(x,2)));
    }
    else if(figure=="triangle") {
        console.log((x*y)/2);
    }
}

solve("circle",6,6);