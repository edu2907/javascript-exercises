const findTheOldest = function (people) {
    const findAge = person => {
        if(typeof person.yearOfDeath != "number") {
            person.yearOfDeath = new Date().getFullYear(); 
        }
        return person.yearOfDeath - person.yearOfBirth
    }
    const compareAges = (previousOlderAge, currentAge) => {
        if (currentAge > previousOlderAge) return currentAge;
        else return previousOlderAge;
    }
    let peopleAges = people.map(findAge) 
    let oldestAge = peopleAges.reduce(compareAges, 0)
    let oldestAgeIndex = peopleAges.indexOf(oldestAge)
    return people[oldestAgeIndex]
};

// Do not edit below this line
module.exports = findTheOldest;

