import { describe } from "node:test";
import prisma from "../../lib/prisma";
import { revalidatePath } from "next/cache";

type UserType = {
  name: string;
  description: string;
  image: string;
};

export async function getAllUser() {
  return await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createUser(user: UserType) {
  return await prisma.user.create({
    data: {
      name: user.name,
      description: user.description,
      image: user.image,
    },
  });
  revalidatePath(`/users`);
}

export async function editUser(user: UserType, id: string) {
  return await prisma.user.update({
    where: { id },
    data: {
      name: user.name,
      description: user.description,
      image: user.image,
    },
  });
  revalidatePath(`/users`);
}

export async function getUser(id: string) {
  return await prisma.user.findUnique({
    where: { id },
  });
}

export async function deleteUser(uuid: string) {
  return await prisma.user.delete({
    where: {
      id: uuid,
    },
  });

  revalidatePath(`/users`);
}
