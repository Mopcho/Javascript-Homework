function solve(moneyPM,averageGrade,minimumWage) {
    let money;
    if (averageGrade>=5.50) {

        money = averageGrade * 25;

        let socialMoney = minimumWage * (35/100);

        if(money>socialMoney) {
            console.log(`You get a scholarship for excellent results ${money} BGN`);
        }
        else {
            console.log(`You get a scholarship for excellent results ${socialMoney} BGN`);
        }
    }
    else if(moneyPM<minimumWage && averageGrade>=4.50) {

        money = minimumWage * (35/100);

        console.log(`You get a Social scholarship ${money} BGN`);

    }
    else {

        console.log("You cannot get a scholarship!");
    }
}

solve(300,5.65,420);