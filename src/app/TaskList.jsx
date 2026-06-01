'use client";';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { TaskItem } from "./TaskItem";
import { getTasks, updateTask } from "./api";

export function TaskList() {
  const queryClient = useQueryClient();

  const tasks = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  const tasksUpdateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return (
    <ul className="list-disc">
      {tasks.data?.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          tasksUpdateMutation={tasksUpdateMutation}
        />
      ))}
    </ul>
  );
}
