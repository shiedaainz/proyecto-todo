import { Appui } from './AppUi';
import './App.css';
import React from 'react';
import { TodoProvider } from '../TodoContext';

function App() {
  return(
    <TodoProvider>
      <Appui/> 
    </TodoProvider>
   
  )
}
export default App;
