const TodoList = ({ todos, onUpdateTodo }) => {
  return (
    <ul className="list-group" id="demo1">
      {todos.map((todo) => (
        <li
          id="items"
          key={todo.id}
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          {todo.title}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onUpdateTodo(todo)}
          />
        </li>
      ))}
    </ul>
  );
};
<code></code>;
export default TodoList;
