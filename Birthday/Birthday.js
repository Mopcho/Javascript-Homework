function calc(rent) {
    let cake = rent * (20/100);
    let beverages = cake - cake*(45/100);
    let animator = rent * (1/3);
    let totalMoney = cake + beverages + animator + rent;
    console.log(totalMoney);
}

calc(2250);