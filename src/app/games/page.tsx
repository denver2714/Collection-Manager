import Link from "next/link";
import { format } from "date-fns";
import { getAllGames } from "../../../services/gamesService";

const Games = async () => {
  const games = await getAllGames();

  return (
    <div className="p-8 md:p-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold text-gray-900">Games</h1>
        <Link
          href={"/games/new"}
          className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-6 py-2 rounded-lg transition duration-200"
        >
          New Game
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <Link
            href={`/games/${game.id}`}
            key={game.id}
            className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition transform hover:scale-105"
          >
            <img
              className="h-48 w-full object-cover"
              src={game.image}
              alt={game.name}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {game.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{game.genre}</p>
              <p className="text-gray-700 text-sm">
                Release Date:{" "}
                <span className="font-semibold">
                  {format(new Date(game.releaseDate), "PP")}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Games;
