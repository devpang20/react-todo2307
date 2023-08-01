import { useState } from "react";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "공부",
      checked: true,
    },
    {
      id: 2,
      text: "운동",
      checked: true,
    },
    {
      id: 3,
      text: "명상",
      checked: false,
    },
  ]);

  const onInsert = (text) => {
    setTodos(
      todos.concat({
        id: 4,
        text: text,
        checked: false,
      })
    );
  };

  return (
    <div>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
