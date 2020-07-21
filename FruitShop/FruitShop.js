function calc(strawberryPrize,bananasKilo,orangesKilo,raspberryKilo,strawberryKilo) {
    let raspberryPrize = strawberryPrize * (50/100);
    let orangesPrize = raspberryPrize - (raspberryPrize*(40/100));
    let bananasPrize = raspberryPrize - (raspberryPrize*(80/100));
    let totalMoney = strawberryPrize*strawberryKilo + bananasKilo*bananasPrize + orangesKilo*orangesPrize + raspberryKilo*raspberryPrize;
    console.log(totalMoney);
}

calc(63.5,3.57,6.35,8.15,2.5);