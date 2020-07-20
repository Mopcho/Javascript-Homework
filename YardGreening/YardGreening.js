 function calcMoney(squareKm) {
    let discount = (squareKm * 7.61)*18/100;
    let totalMoney = squareKm * 7.61;
    let moneyWithDiscount = totalMoney - discount;
    console.log(`The final price is: ${moneyWithDiscount} lv. The discount is: ${discount} lv.`);
 }

 calcMoney(550);