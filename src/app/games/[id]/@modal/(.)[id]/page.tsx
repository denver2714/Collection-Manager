import prisma from "../../../../../../lib/prisma";
import { format } from "date-fns";

const GameIdIntercepted = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const gameId = Number(id);
  const specificGame = await prisma.game.findUnique({
    where: { id: gameId },
  });

  if (!specificGame) {
    return (
      <div className=" flex min-h-screen items-center justify-center ">
        <div className="text-gray-500 font-medium">Game not found</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center p-6 bg-black/60">
      <div className=" group w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-gray-100">
        <div className="relative h-96 w-full overflow-hidden bg-gray-200">
          <img
            src={specificGame?.image}
            alt={specificGame?.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-indigo-700">
              {specificGame?.genre}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 leading-tight">
            {specificGame?.name}
          </h3>

          <div className="mt-4 flex items-center text-sm text-gray-500">
            {/* Date with a slight visual separation */}
            <span className="font-medium text-gray-400 mr-2">
              Release Date:
            </span>
            <span>
              {format(new Date(specificGame?.releaseDate), "MMMM do, yyyy")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameIdIntercepted;
