import React, { useContext, useState } from 'react'
import { DataContext } from "../DataProvider";

const InputForm = () => {
    const [todos,setTodods] = useContext(DataContext);
    const [todoname, setTodoname] = useState('');
    const addTolist=(e)=>{
        e.preventDefault();
        setTodods([...todos,{ 
            text: todoname,
            completed: false}])
            setTodoname('')
    }
    return (
        <div>
            <h1>TO DO LIST</h1>
            <form onSubmit={addTolist}>
            <input type='text' name ='todos' value={todoname} placeholder='Write your plan here'
            onChange={(e)=>{
                setTodoname(e.target.value)
                
            }}/>
            <button>Add</button>
            </form>
        </div>
    )
}

export default InputForm
