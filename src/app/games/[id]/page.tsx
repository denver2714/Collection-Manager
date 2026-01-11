import prisma from "../../../../lib/prisma";
import { format } from "date-fns";
import BackButtonComponent from "@/components/BackButtonComponent";

const getGame = async (id: string) => {
  const game = await prisma.game.findUnique({
    where: {
      id: Number(id),
    },
  });

  return game;
};

const GameId = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const game = await getGame(id);

  if (!game) {
    return <div className="p-10 text-center text-xl">Game not found</div>;
  }

  return (
    <div>
      <BackButtonComponent />
      <div className="min-h-screen  flex justify-center p-10 items-center">
        <div className="w-full max-w-4xl rounded-2xl hover:shadow-lg shadow-xs duration-200 p-6 space-y-6 ">
          {/* Top Section */}
          <div className="flex gap-6">
            <img
              src={game.image}
              alt={game.name}
              className="w-120 h-90 object-cover rounded-xl border border--800"
            />

            <div className="flex flex-col justify-between">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold">{game.name}</h1>
                <p className="text-2xl text-zinc-400">{game.genre}</p>
                <p className="text-lg text-zinc-500">
                  Released: {format(game.releaseDate, "MMMM do, yyyy")}
                </p>
              </div>

              <div className="flex gap-2 pt-4">
                <button className="px-5 py-2 rounded-xl border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition font-bold cursor-pointer">
                  Edit
                </button>
                <button className="px-5 py-2 rounded-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition font-bold cursor-pointer">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameId;
