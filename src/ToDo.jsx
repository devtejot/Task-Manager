import { useState } from "react";

function TodosPage() {
  const [userId, setUserId] = useState("");
  const [todos, setTodos] = useState([]);

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleGetTodosClick = () => {
    const data = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;

    fetch(data)
      .then((response) => response.json())
      .then((todos) => setTodos(todos))
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <h1 className="title">Todos</h1>
      <div className="form">
        <label htmlFor="user-id" className="label">
          User ID:
        </label>
        <input
          type="text"
          id="user-id"
          value={userId}
          onChange={handleUserIdChange}
          className="input"
        />
        <button onClick={handleGetTodosClick} className="button">
          Get Todos
        </button>
      </div>
      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.title} {todo.completed ? "✓" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodosPage;
