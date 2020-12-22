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
            <form onSubmit={addTolist}>
            <input type='text' name ='todos' value={todoname}
            onChange={(e)=>{
                setTodoname(e.target.value)
                
            }}/>
            <button>Add</button>
            </form>
        </div>
    )
}

export default InputForm
