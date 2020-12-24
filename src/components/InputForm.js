import React, { useContext, useEffect, useState } from 'react'
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
     const inputRef = React.createRef()
    
     useEffect(() => {
         inputRef.current.focus()
        console.log(inputRef);
        
     }, [])
    return (
        <div>
            <h1>TO DO LIST</h1>
            <form onSubmit={addTolist}>
            <input ref={inputRef} type='text' name ='todos' required value={todoname} placeholder='Write your plan here'
            onChange={(e)=>{
                setTodoname(e.target.value)
                
            }}/>
            <button>ADD</button>
            </form>
        </div>
    )
}

export default InputForm
