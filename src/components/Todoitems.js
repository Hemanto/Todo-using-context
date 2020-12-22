import React,{useContext} from 'react'
import Todo from './Todo'
import {DataContext} from '../DataProvider'



const Todoitems = () => {
 const [todos,setTodos] = useContext(DataContext)

 const changetocompleted = (id) =>{
     const newTodos = [...todos]
     newTodos.forEach((todo,index)=>{
         if (index===id) {
             todo.completed=!todo.completed
         }
     })
     setTodos(newTodos)
 }
    return (
        <ul>
            {
                todos.map((item,index)=>
                    <Todo key={index} item={item} id={index}
                    markCompleted={changetocompleted}
                    />
                )
                
            }
        </ul>
    )
    
}

export default Todoitems
