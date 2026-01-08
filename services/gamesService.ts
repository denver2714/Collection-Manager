import prisma from "../lib/prisma";

export async function getAllGames() {
  const games = await prisma.game.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return games;
}

export async function createGame(game: {
  name: string;
  image: string;
  genre: string;
  releaseDate: string;
}) {
  if (!game.name || !game.image || !game.genre || !game.releaseDate)
    throw { status: 400, message: "Missing required fields" };

  const exists = await prisma.game.findFirst({
    where: { name: game.name },
  });

  if (exists) throw { status: 409, message: "Game already exists" };

  const createGame = await prisma.game.create({
    data: {
      name: game.name,
      image: game.image,
      genre: game.genre,
      releaseDate: new Date(game.releaseDate),
    },
  });

  return createGame;
}
