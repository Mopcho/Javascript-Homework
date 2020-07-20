function calcDepo(deposited,depositExpireDate,yearInterest) {
    let sum = deposited + depositExpireDate * ((deposited*yearInterest)/12);
    console.log(sum);
}

calcDepo(200,3,5.7);