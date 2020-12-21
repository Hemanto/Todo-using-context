import React from 'react'
//import { UserConsumer } from './userContext';



const Todoitems = (props) => {

    const getsytle = () => {
        if (props.todo.completed) {
            return {
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }
    }

    const mark = (marking) => {
        console.log('mark', props);
        marking={props}
    }
    return (
        <div className='border' style={getsytle()}>
            <input onChange={mark} type='checkbox' />
            {' '}
            {props.todo.text}
        </div>
    )
    
}

export default Todoitems
