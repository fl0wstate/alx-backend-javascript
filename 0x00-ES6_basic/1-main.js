import createEmployeesObject from "./11-createEmployeesObject";
import createReportObject from "./12-createReportObject";
import createIteratorObject from "./100-createIteratorObject";
import iterateThroughObject from "./101-iterateThroughObject";
import getFullBudgetObject from "./9-getFullBudget";

// import appendToEachArrayValue from './10-loops';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log("Getting full Budget in Dollars and Euores");
console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

const employees = {
  ...createEmployeesObject("engineering", ["Bob", "Jane"]),
  ...createEmployeesObject("marketing", ["Sylvie"]),
};

const report = createReportObject(employees);
// Accessing allEmployees array
console.log("All Employees:");
const { workers } = report.allEmployees;
console.log(workers);
console.log(report.allEmployees);

// Accessing individual employees
console.log("Individual Employees: Using deconstructor method");
const { first, second } = report.allEmployees;
console.log(first); // First employee
console.log(second); // Second employee

// Calling the getNumberOfDepartments method
const numberOfDepartments = report.getNumberOfDepartments(report.allEmployees);
console.log("Number of Departments:");
console.log(numberOfDepartments);

// const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
  console.log(item);
}

console.log(iterateThroughObject(reportWithIterator));
// console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));
// const fullBudget = getFullBudgetObject(20, 50, 10);
//
// console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));
// console.log(fullBudget.getIncomeInDollars(fullBudget.income));
// console.log(fullBudget.getIncomeInEuros(fullBudget.income));
