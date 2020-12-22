import React from 'react'
import './App.css';
import { DataProvider } from './DataProvider';
import Todoitems from './components/Todoitems';
import InputForm from './components/InputForm';
//import Form from './components/Form';

function App() {
  return (
    <DataProvider>
      <InputForm/>
      <Todoitems/>
    </DataProvider>

  );
}

export default App;
