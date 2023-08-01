function TodoListItem({ todo }) {
  console.log(todo.id);
  return <div>{todo.text}</div>;
}

export default TodoListItem;
