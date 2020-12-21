import React from 'react'
import Todoitems from './Todoitems'
import {UserConsumer} from './userContext';

const Todo = (props) => {
   
    return (
        <div className='back-color'>
            {/* {props.todos.map((item)=>(
                <Todoitems key={item.id} todo={item}/>
            ))} */}
            <UserConsumer>
                {(Todos)=>{
                    Todos.map((item)=><Todoitems key={item.id} todo={item}/>)
                   console.log(Todos); 
                }}
            </UserConsumer>
        </div>
    )
}

export default Todo
