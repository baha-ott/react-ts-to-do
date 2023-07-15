import React from "react";
import "./TodoList.css";

interface Todo {
  id: string;
  text: string;
}

interface TodoListProps {
  items: Todo[];
  onDelete: (todoId: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onDelete }) => {
  function handleDeleteTodo(e: any) {
    const itemId = e.target.dataset.id;

    onDelete(itemId);
  }
  return (
    <ul>
      {items.map((t) => (
        <li key={t.id}>
          <span>{t.text}</span>
          <button onClick={handleDeleteTodo} data-id={t.id}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
