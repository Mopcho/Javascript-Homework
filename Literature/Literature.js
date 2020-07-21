function calc(totalPages,pagesPerHour,timeNeeded) {
    let timePerDay = (totalPages / pagesPerHour)/timeNeeded;
    console.log(timePerDay);
}

calc(212,20,2);