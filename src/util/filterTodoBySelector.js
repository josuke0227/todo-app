export function filterTodoBySelector(todos, selected) {
  if (selected === "active") {
    return todos.filter((todo) => todo.isActive === true);
  }

  if (selected === "completed") {
    return todos.filter((todo) => todo.isActive === false);
  }

  return todos;
}
