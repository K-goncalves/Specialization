import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState("");

  function stopRefresh(e) {
    e.preventDefault();
  }

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
      completed: false,
    };

    //Add todo to list
    setList([...list, newTodo]);

    //Clear input box for new todo
    setInput("");
  };

  //Delete a Todo
  function deleteTodo(id) {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  }

  //Checkbox complete todo
  function completeTodo(id) {
    const newList = list.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setList(newList);
  }

  //Submit the edit todo
  function submitEdit(id) {
    const newList = list.map((todo) => {
      if (todo.id === id) {
        todo.todo = editText;
      }
      return todo;
    });
    setList(newList);
    setEdit(null);
    setEditText("");
  }

  return (
    <div className="todoDiv">
      <h1>Todo List</h1>
      <form onSubmit={stopRefresh}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addTodo(input)}>Add New Item</button>
      </form>
      <ul className="ab">
        {list.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              onChange={() => completeTodo(todo.id)}
              checked={todo.completed}
            />

            {edit === todo.id ? (
              <input
                type="text"
                onChange={(e) => setEditText(e.target.value)}
                value={editText}
              />
            ) : (
              <>{todo.todo}</>
            )}

            <button onClick={() => deleteTodo(todo.id)}>&times;</button>

            {edit === todo.id ? (
              <button onClick={() => submitEdit(todo.id)}>Submit Edit</button>
            ) : (
              <button onClick={() => setEdit(todo.id)}>Edit Todo</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
