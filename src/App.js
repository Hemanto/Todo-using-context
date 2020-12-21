import React from 'react'
import './App.css';
import Todo from './components/Todo';
import {  useState } from 'react';
import { UserProviver } from './components/userContext';
import todosData from './todosData'

function App() {

  const [Todos, setTodos] = useState(todosData)


  return (
    <div className="App">
      <UserProviver value={Todos}>
        <Todo/>
      </UserProviver>  
     
    </div>
  );
}

export default App;
