import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Employee } from '../../type/employee';
import s from "./style.module.css"
type FormData ={
    name:string
    age:number
    salary:number
}
type Props = {addEmployee:Function}

export default function AddEmployee({addEmployee}: Props) {
const [employee,setEmployee] = useState<FormData>({name: "",age:0,salary:0})
const [counterId, setCounterId] = useState<number>(4);

const changeHandler = (event:ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = event.target;
        setEmployee({
            ...employee,
            [name]:value
        });
    }
    
const formHandler =(event:FormEvent)=>{
        event.preventDefault();
        const newEmployee:Employee={...employee, id:counterId}
        console.log(newEmployee);
        addEmployee(newEmployee);
        setCounterId(prevId => prevId + 1)
    }
  return (
        <form onSubmit={formHandler} className={s.form} >
            {/* <p>id</p>
            <input value={employee.id} name='id' onChange={changeHandler}/> */}
            <div className={s.inp}>
            <div>
            <p>Имя:</p>
            <input value={employee.name} type="text" name='name' onChange={changeHandler}/>
            </div>
            <div>
            <p>Возраст:</p>
            <input value={employee.age} type="number" name='age' onChange={changeHandler}/>
            </div>
            <div>
            <p>Зарплата:</p>
            <input value={employee.salary} type="number" name='salary' onChange={changeHandler}/>
            </div>
            </div>
            <div className={s.but}>
            <button>Добавить</button>
            </div>
        </form>
  )
}