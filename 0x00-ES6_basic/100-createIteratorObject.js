export default function createIteratorObject(report) {
  const { allEmployees } = report;
  console.log(allEmployees);
  const employeeList = [];

  for (const department in allEmployees) {
    if (Object.hasOwn(allEmployees, department)) {
      employeeList.push(...allEmployees[department]);
    }
  }
  console.log(employeeList);

  return {
    [Symbol.iterator]() {
      let currentIndex = 0;

      return {
        next() {
          if (currentIndex < employeeList.length) {
            const iter = { value: employeeList[currentIndex], done: false };
            currentIndex += 1;
            return iter;
          }
          return { done: true };
        },
      };
    },
  };
}
