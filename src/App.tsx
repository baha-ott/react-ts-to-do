import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

import { Todo } from "./todo.model";
import { v4 as uuidv4 } from "uuid";

const App: React.FC = () => {
  // FC: Function component
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todos);

  function addTodo(text: string) {
    setTodos((prev) => [...prev, { id: uuidv4(), text }]);
  }

  function onDelete(todoId: string) {
    setTodos((prev) => [...prev.filter((t) => t.id !== todoId)]);
  }

  return (
    <>
      <NewTodo onAddTodo={addTodo} />
      <TodoList items={todos} onDelete={onDelete} />
    </>
  );
};

export default App;
