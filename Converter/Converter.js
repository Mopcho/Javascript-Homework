function conver(numb,from,to) {
    let final;
    if(from=="mm") {
        if (to=="cm") {
            final = numb/10;
        }
        else if(to=="m") {
            final = numb/1000;
        }
    }
    else if(from=="cm") {
        if (to=="mm") {
            final=numb*10;
        }
        else if(to=="m") {
            final=numb/100;
        }
    }
    else if(from=="m") {
        if (to=="cm") {
            final = numb*100;
        }
        else if(to=="mm") {
            final=numb*1000;
        }
    }
    console.log(final);
}

conver(150,"m","cm");