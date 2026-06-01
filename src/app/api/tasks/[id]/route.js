import { prisma } from "../../../../lib/prisma";

export async function PUT(request, { params }) {
  const { id } = await params;
  const { completed } = await request.json();

  // Update the task in the database
  const updatedTask = await prisma.task.update({
    where: { id: parseInt(id) },
    data: { completed },
  });

  return Response.json(updatedTask);
}
