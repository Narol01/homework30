import React from 'react'
import { Employee } from '../../type/employee'
import EmployeeTitle from '../tileEmpl/EmployeeTitle';
import s from "./style.module.css" 

type Props = {
    employee:Employee[];
    removeEmpl:Function;
}

export default function ({employee, removeEmpl}: Props) {
    const handlers = {removeEmpl}
  return (
    <div className={s.card}>
        {
            employee.map((employee)=> <EmployeeTitle  key={employee.id}  {...employee} {...handlers}/>)
        }
    </div>
  )
}