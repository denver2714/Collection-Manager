import prisma from "../lib/prisma";

export const gamesService = {
  async getAllGames() {
    return prisma.game.findMany({
      orderBy: { createdAt: "desc" },
    });
  },

  async getGame(gameId: number) {
    return prisma.game.findUnique({
      where: { id: gameId },
    });
  },

  async createGame(game: {
    name: string;
    image: string;
    genre: string;
    releaseDate: string;
  }) {
    if (!game.name || !game.image || !game.genre || !game.releaseDate) {
      throw new Error("Missing required fields");
    }

    const exists = await prisma.game.findFirst({
      where: { name: game.name },
    });

    if (exists) {
      throw new Error("Game already exists");
    }

    return prisma.game.create({
      data: {
        name: game.name,
        image: game.image,
        genre: game.genre,
        releaseDate: new Date(game.releaseDate),
      },
    });
  },

  async editGame(
    game: {
      name: string;
      image: string;
      genre: string;
      releaseDate: string;
    },
    id: number
  ) {
    return prisma.game.update({
      where: { id },
      data: {
        name: game.name,
        image: game.image,
        genre: game.genre,
        releaseDate: new Date(game.releaseDate),
      },
    });
  },

  async deleteGame(id: number) {
    const game = await prisma.game.findUnique({ where: { id } });
    if (!game) return null;

    await prisma.game.delete({ where: { id } });
    return game;
  },
};
