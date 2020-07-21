function calc(budget,statistsCount,price) {

    budget = budget - budget * (10/100);

    let moneyLeft;

    if (statistsCount>150) {
        moneyLeft =budget - ((statistsCount * price) - (statistsCount * price) * (10/100));
    }
    
    else {
        moneyLeft = budget - statistsCount*price;
    }

    if (moneyLeft<=0) {
        console.log(`Not enough money!\r\n
    Wingard needs ${Math.abs(moneyLeft)} leva more.`)
    }
    
    else {
    console.log(`Action\r\n
    Wingard starts filming with ${moneyLeft} leva left.`)
    }

}

calc(9587.88,222,55.68);