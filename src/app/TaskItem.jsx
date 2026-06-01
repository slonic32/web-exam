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
      <span
        className={
          task.completed
            ? "ml-2 w-full line-through text-gray-500"
            : "ml-2 w-full"
        }
      >
        {task.title}
      </span>
    </li>
  );
}
