import React, { useState } from 'react'
import { Employee } from '../../type/employee'
import s from "./style.module.css"

type Props = Employee & {removeEmpl:Function;}



export default function EmployeeTitle({id , name, age, salary,removeEmpl}: Props) {

    return (
    <div className={s.item}>
        <p>name:{name}</p>
        <p>age:{age}</p>
        <p>salary:{salary}</p>
        <button onClick={()=>removeEmpl(id)}>Удалить</button>
    </div>
  )
}