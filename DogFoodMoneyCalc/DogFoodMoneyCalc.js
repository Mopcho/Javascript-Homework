function calcMoneyForFood(dogsCount,otherDogsCpount) {

    let totalMoney = dogsCount * 2.50;

    totalMoney += (otherDogsCpount*4);
    
    console.log(`${totalMoney} lv.`);
}

calcMoneyForFood(5,4);