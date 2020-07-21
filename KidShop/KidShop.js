function solve(tripMoney,puzzleCount,talkingDollsCount,teddyBearsCount,minionsCount,trucksCount) {
    let dollsCount = puzzleCount + talkingDollsCount + teddyBearsCount +  minionsCount;
    let totalMoney=puzzleCount*2.60 + talkingDollsCount*3 + teddyBearsCount*4.10 + minionsCount*8.20 + trucksCount*2;
    if (dollsCount>=50) {
        totalMoney = totalMoney - totalMoney * (25/100);
    }
    else {

    }
    totalMoney = totalMoney - totalMoney * (10/100);
    if (tripMoney<=totalMoney) {
        console.log(`Yes! ${totalMoney-tripMoney} lv left.`)
    }
    else {
        console.log(`Not enough money! ${tripMoney-totalMoney} lv needed.`)
    }
}
solve(320,8,2,5,5,1);