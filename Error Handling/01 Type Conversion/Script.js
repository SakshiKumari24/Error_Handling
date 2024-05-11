function convertToNumber(str) {
    try {
        const number = Number(str);
        if (isNaN(number)) {
            throw new Error("Invalid number");
        }
        return number;
    } catch (error) {
        return "Invalid number";
    }
}
console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));