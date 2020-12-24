import React, { useContext } from 'react'
//yeta keno use korlam 
const Todo = ({item,id,markCompleted}) => {
    const getSytle = {
        textDecoration: item.completed ? "line-through" : "none"
      };
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
        </li>
    )
}

export default Todo
