function calc(days,cooksCount,cakeCount,wafflesCount,pancakesCount) {   
    let totalMoney = (((cakeCount*45 + wafflesCount*5.80 + pancakesCount*3.20)*days)*cooksCount);
    let moneyAtTheEnd = totalMoney - (totalMoney * (1/8));
    console.log(moneyAtTheEnd);
}

calc(23,8,14,30,16);