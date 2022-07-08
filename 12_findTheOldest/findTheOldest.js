const findTheOldest = function(arrayOfPeople) {
    const oldestMan = arrayOfPeople.reduce((oldest, person) => {
        let age;
        let ageOfOldest;

        if (oldest.yearOfDeath) {
            ageOfOldest = oldest.yearOfDeath - oldest.yearOfBirth;
        } else {
            let currentYear = (new Date()).getFullYear();
            ageOfOldest = currentYear - oldest.yearOfBirth;
        }

        if (person.yearOfDeath) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            let currentYear = (new Date()).getFullYear();
            age = currentYear - person.yearOfBirth;
        }

        return (ageOfOldest <= age) ? person : oldest;
    }, arrayOfPeople[0]);
    return oldestMan;
};

// Do not edit below this line
module.exports = findTheOldest;
