const findTheOldest = function (people) {
    const oldestPerson = people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest);
        const currentAge = getAge(current);
        return oldestAge < currentAge ? current : oldest;
    });
    return oldestPerson;

};
function getAge(person) {
    if (!person.yearOfDeath) {
        return new Date().getFullYear() - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
}
// Do not edit below this line
module.exports = findTheOldest;
