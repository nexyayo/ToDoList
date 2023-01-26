import React from 'react'
import './styles.css';
import { Todo } from '../model';
import SingleComponent from './SingleComponent';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {
          (provided) => (
            <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todos__heading" id="todo__heading--in-progress ">
                Active Tasks
              </span>
              {
                todos.map((todo, index) => <SingleComponent todo={todo} index={index} todos={todos} key={todo.id} setTodos={setTodos}/>)
              }
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {
          (provided) => (
            <div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todos__heading" id="todo__heading--completed">
                  Completed Tasks
                </span>
                {
                  completedTodos.map((todo, index) => <SingleComponent todo={todo} index={index} todos={completedTodos} key={todo.id} setTodos={setCompletedTodos}/>)
                }
                {provided.placeholder}
            </div>
          )
        }
      </Droppable>
    </div>
  )
}

export default ToDoList
