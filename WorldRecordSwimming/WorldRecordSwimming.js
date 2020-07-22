function solve(recordTime,recordMeters,metersPerSecond) {

    let newTime = (recordMeters*metersPerSecond)+((recordMeters/15)*12.5);

    if (newTime> recordTime) {
        console.log(`No, he failed! He was ${newTime-recordTime} seconds slower.`);
    }

    else {
        console.log(`Yes, he succeeded! The new world record is ${newTime} seconds.`);
    }
    
}

solve(55555.67,3017,5.03);