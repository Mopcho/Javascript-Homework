function calc(length,width,height,percent) {
    let waterSpace = (length*width*height)-((length*width*height)*(percent/100));
    console.log(waterSpace);
}

calc(105,77,89,18.5);
