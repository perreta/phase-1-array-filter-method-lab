// Code your solution here
function findMatching(drivers, name){
    const newDrivers = drivers.filter(drivers => drivers.toLowerCase() === name.toLowerCase())
    return newDrivers;
}

function fuzzyMatch(drivers, name){
    return drivers.filter(function(el) {
        return el.toLowerCase().indexOf(name.toLowerCase()) == 0 
    })
}
    
function matchName(drivers, name){
    return drivers.filter(function (hometown) {
        return hometown.name === name})
}
