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

  const onInsert = () => {
    setTodos(
      todos.concat({
        id: 4,
        text: "입력테스트",
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
