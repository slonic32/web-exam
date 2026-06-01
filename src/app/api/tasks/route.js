import { prisma } from "../../../lib/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany();

  return Response.json(tasks);
}

export async function POST(request) {
  const { title } = await request.json();

  const newTask = await prisma.task.create({
    data: {
      title,
    },
  });

  return Response.json(newTask);
}
