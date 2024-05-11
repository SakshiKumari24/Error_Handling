class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}
const emp = new Employee("Radhe Shyam", "Software Engineer", 80000);
console.log(emp.getSalary());
