export function TaskItem({ task, tasksUpdateMutation }) {
  return (
    <li key={task.id} className="flex items-center">
      <input
        className="ml-2 mr-4"
        type="checkbox"
        checked={task.completed}
        onChange={() =>
          tasksUpdateMutation.mutate({
            id: task.id,
            completed: !task.completed,
          })
        }
      />
      <span className="ml-2 w-full">{task.title}</span>
    </li>
  );
}
