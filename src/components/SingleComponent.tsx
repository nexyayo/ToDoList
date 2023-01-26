import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './styles.css'
import ToDoList from './toDoList'
import { Draggable } from 'react-beautiful-dnd'


type Props = {
    todo: Todo,
    todos: Todo[],
    index: number,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const SingleComponent = ({index, todo, todos, setTodos}: Props) => {

  const [edit, setEdit ] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id:number) => {
    setTodos(todos.map((todo) => todo.id ===id?{...todo, isDone: !todo.isDone} : todo ))
  }

  const handleEdit = (e:React.FormEvent, id:number) => {
    e.preventDefault();

    setTodos(todos.map((todo) => todo.id === id?{...todo,todo:editTodo} : todo));

    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>

      {
        (provided) => (
          <form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)} {...provided.draggableProps} {...provided.draggableProps} ref={(provided.innerRef)}>
          {
             edit ? (
               <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} ref={inputRef} className='todos__input__single--test'/>
             ) : (
               todo.isDone ? (
                 <s className="todos__single--text">{todo.todo}</s>
               ): (
                 <span className="todos__single--text">{todo.todo}</span>
               )
             )
          } 
           <div>
               <span className="icon" onClick={() => {if (!edit && !todo.isDone) {
                 setEdit(!edit)
               }}}>
                   <AiFillEdit />
               </span>
               <span className="icon" onClick={() => handleDelete(todo.id)}>
                   <AiFillDelete />
               </span>
               <span className="icon" onClick={() => handleDone(todo.id)}>
                   <MdDone />
               </span>
           </div>
           </form>
        )
      }
    </Draggable>
  )
}

export default SingleComponent
