import React from 'react'
//import { UserConsumer } from './userContext';



const Todoitems = ({todo, ...props}) => {

    const getsytle = () => {
        if (todo.completed) {
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
            {todo.text}
        </div>
    )
    
}

export default Todoitems
