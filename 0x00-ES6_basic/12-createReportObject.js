export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: employeesList,
    getNumberOfDepartments(dep) {
      return Object.keys(dep).length;
    },
  };

  return obj;
}
