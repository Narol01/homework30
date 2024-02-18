import { useState } from "react";
import EmployeeList from "./components/listEmpl/EmployeeList";
import { Employee } from "./type/employee";
import AddEmployee from "./components/addEmpl/AddEmployee";
import "./style.css"


function App() {
  
  const employees:Employee[] = [
  { id: 1, name: "John", age: 30, salary: 50000 },
  { id: 2, name: "Alice", age: 35, salary: 60000 },
  { id: 3, name: "Bob", age: 25, salary: 45000 }
  ];

const [employee , setEmployee ] = useState<Employee[]>(employees);

const removeEmpl =(value:number):void => setEmployee(employee.filter(({id})=>id!==value));
const handlers={removeEmpl};
const addEmployee=(employees:Employee):void => {
  employee.push(employees);
  setEmployee([...employee]);
}

  return (
    <div >
    <AddEmployee addEmployee={addEmployee}/>
     <EmployeeList employee={employee} {...handlers}/>
    </div>
  );
}

export default App;
