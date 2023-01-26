import React, { useRef } from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent)=>void;
}


const InputField = ({ todo, setTodo, handleAdd} : Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
      <form action="" className="input" onSubmit={(e) => {handleAdd(e); inputRef.current?.blur();} }>
        <input value={todo} ref={inputRef} onChange={(e) => setTodo(e.target.value)}type="input" placeholder="Enter a task!" className='input__box'/>
        <button className='input__submit' type="submit">
          ADD
        </button>
      </form>
  )
}

export default InputField
