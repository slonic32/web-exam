"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeTask } from "./api";
export function AddTask() {
  const queryClient = useQueryClient();

  const tasksMutation = useMutation({
    mutationFn: completeTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  function handleAddTask(e) {
    e.preventDefault();

    const title = e.target.title.value;
    tasksMutation.mutate({ title });
    e.target.reset();
  }
  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        name="title"
        placeholder="Enter task title"
        className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Task
      </button>
    </form>
  );
}
