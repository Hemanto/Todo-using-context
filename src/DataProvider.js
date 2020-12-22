import React, { createContext, useEffect, useState } from 'react'
import todosData from './todosData';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const TodoStore = JSON.parse(localStorage.getItem('TodoStore'))
        if (TodoStore) {
            setTodos(TodoStore)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('TodoStore',JSON.stringify(todos))
    }, [todos])
    return (
        <DataContext.Provider value={[todos,setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}





