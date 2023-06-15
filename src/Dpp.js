// Todo list projext

import React, { Component, useEffect, useRef, useState } from "react";
import "./App.css";

const Dpp = () => {
  const refcut = useRef("");
  const reffocus = useRef("");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? ( t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Math.random()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  const markDone = (id) => {
    let newTask = todos.map( task => {
      if( task.id === id ) {
         refcut.current.classList = "bg"
      }
      return task;
      setTodos(newTask)
    })
  
  }
  console.log(todos);

  useEffect(()=>{
      reffocus.current.focus();
  },[todo])

  return (
    <div className="App">
      <div className="container">
        <h1>React - Todolist</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
         <input
        type="text"
        ref={reffocus}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
         />
         <button type="submit"> {editId ? "Edit" : "Add"}</button>
         </form>

         <ul className="allTodos">
      {todos.map((t , index) => (
        <li className="singleTodo" key={index}>
          <span ref={refcut} className="todoText" >
            {t.todo}
          </span>
          <button className="Edit" onClick={() => handleEdit(t.id)}>Edit</button>
          <button  onClick={() => markDone(t.id)}>Done</button>
          <button  onClick={() => handleDelete(t.id)}>Delete</button>
          
        </li>
      ))}
    </ul> 

   
      </div>
 
    </div>

  );
};

export default Dpp;

// todo list end