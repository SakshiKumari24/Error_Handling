function getPerson(personObj) {
    try {
        if (typeof personObj !== 'object' || personObj === null || !('name' in personObj) || !('age' in personObj)) {
            throw new Error("Invalid parameter type");
        }
        const name = personObj.name;
        const age = personObj.age;
        return `Name: ${name}, Age: ${age}`;
    } catch (error) {
        return error.message;
    }
}
const validPerson = { name: "Radhe", age: 30 };
const invalidPerson = { firstName: "Shyam", age: 25 };

console.log(getPerson(validPerson));
console.log(getPerson(invalidPerson));
