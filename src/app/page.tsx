"use client";
import { TaskList } from "./TaskList";
import { AddTask } from "./AddTask";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <main className="flex w-full flex-1 flex-col items-center  text-center">
        <h1 className="text-3xl font-bold">List of tasks!</h1>
        <TaskList />
        <AddTask />
      </main>
    </div>
  );
}
