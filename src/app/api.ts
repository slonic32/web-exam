export async function updateTask(updatedTask: {
  id: number;
  completed: boolean;
}) {
  const res = await fetch(`/api/tasks/${updatedTask.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed: updatedTask.completed }),
  });
  return res.json();
}

export async function getTasks() {
  const res = await fetch("/api/tasks");
  return res.json();
}

export async function completeTask(newTask: { title: string }) {
  const res = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  return res.json();
}
