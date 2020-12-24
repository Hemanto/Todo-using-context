import React,{useContext} from 'react'
import {DataContext} from '../DataProvider'
//yeta keno use korlam 
const Todo = ({item,id,markCompleted}) => {
    const [todos,setTodos] = useContext(DataContext)

    const getSytle = {
         textDecoration: item.completed ? "line-through" : "none"
      };
      const deletehandler = (id)=>{
          const delTodos = [...todos]
          console.log(delTodos);
          delete delTodos[id]
          console.log('delete',id);
          setTodos(delTodos)
      }
    return (
        <li className='' style={getSytle}>
            <label htmlFor={id}>
                <input type='checkbox' id={id}
                onChange={()=>markCompleted(id)}
                checked={item.completed} 
                />
                 {'  '}
                {item.text}
            </label>
            <button onClick={()=>deletehandler(id)}>Delete</button>
        </li>
    )
}

export default Todo
