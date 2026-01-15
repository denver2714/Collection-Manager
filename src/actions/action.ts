"use server";

import * as usersService from "../services/usersService";

export async function createUser(formData: FormData) {
  const name = formData.get("name")?.toString() || "";
  const description = formData.get("description")?.toString() || "";
  const image = formData.get("image")?.toString() || "";

  /*Only for validation i forgot, note: if the fields are empty, but i feel like we dont need this
    because the react-hook-forms already handles this but imma put this anyway
    */
  if (!name || !description || !image) return;

  await usersService.createUser({ name, description, image });
}

export async function editUser(formData: FormData, id: string) {
  const name = formData.get("name")?.toString() || "";
  const description = formData.get("description")?.toString() || "";
  const image = formData.get("image")?.toString() || "";

  if (!name || !description || !image) return;

  await usersService.editUser({ name, description, image }, id);
}
