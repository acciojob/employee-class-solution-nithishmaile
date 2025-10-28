/*function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype.giveRaise = function(amount) {
  this.salary += amount;
}

function Manager(name, salary, department) {
  Employee.call(this, name, salary);
  this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.giveRaise = function(amount) {
  Employee.prototype.giveRaise.call(this, amount);
  console.log(`New salary for ${this.name} in ${this.department}: ${this.salary}`);
}*/

class Employee{
	constructor(name,salary){
		this.name=name;
		this.salary=salary
	}

	giveRaise(amount){
		this.salary=salary+amount;
	}
}

class Manager extends Employee{
	constructor(name,salary,department){
		super(name,salary)
		this.department=department
	}
}

let employee = new Employee("John Doe", 50000);
employee.giveRaise(5000);
console.log(employee.salary); // 55000

let manager = new Manager("Jane Smith", 80000, "Sales");
manager.giveRaise(10000); // New salary for Jane Smith in Sales: 90000
