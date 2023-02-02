import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './interfaz/Interfaz'

function App() {
  return (
    <TodoList name={'Gregorio Y. Zara'} theme={{
      backgroundColor: 'black',
      color: 'pink'
    }}/>
  );
}

export default App;
