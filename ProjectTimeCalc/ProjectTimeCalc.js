function calculateTimeNeeded(name,projects) {
    if(projects>100) {
        throw new Error("Projects cant be more than 100");
    }
    console.log(`The architect ${name} will need ${projects*3} hours to complete ${projects} project/s.`)
}

calculateTimeNeeded("Geaorge",5);