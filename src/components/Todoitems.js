import React,{useContext} from 'react'
import Todo from './Todo'
import {DataContext} from '../DataProvider'



const Todoitems = () => {
 const [todos,setTodos] = useContext(DataContext)

 const changetocompleted = (id) =>{
     const newTodos = [...todos]

     //yeta explain koro foreach
     newTodos.forEach((todo,index)=>{
         if (index===id) {
             todo.completed=!todo.completed
         }
     })
     setTodos(newTodos)
 }

//  using map
// |
//  const changetocompletedUsMap = (id) => {
//     const updatedTodos = todos.map((todo, index)=>{
//         if (index === id) {
//             const updatedTodo = {...todo, completed: !todo.completed};
//             return updatedTodo;
//         } 
//         return todo;
//      })
//      setTodos(updatedTodos)
//  }

    return (
        <ul className='listyle'>
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
