import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/inputField';
import ToDoList from './components/toDoList';
import { Todo } from './model';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

const App: React.FC = () => {
  const [todo, setTodo ] = useState<string>("");
  const [todos, setTodos ] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([
        ...todos,{id: Date.now(), todo, isDone: false}
      ]);
      setTodo("")
    }
  };

  const onDragEnd = (result:DropResult) => {
    console.log(result);
  }

  return (
      <DragDropContext onDragEnd={() => {}}>
        <div className="App">
        <span className="heading">Taskify</span>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
          <ToDoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
        </div>
      </DragDropContext>
  );
}

export default App;
