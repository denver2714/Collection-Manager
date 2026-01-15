"use client";
import { format } from "date-fns";

type HoverGameComponentProps = {
  game: {
    name: string;
    image: string;
    genre: string;
    releaseDate: string | Date;
  };
};

const HoverGameComponent = ({ game }: HoverGameComponentProps) => {
  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.reload();
  };

  return (
    <div
      onClick={handleCardClick}
      className="group w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-gray-100"
    >
      <div className="relative h-96 w-full overflow-hidden bg-gray-200">
        <img
          src={game.image}
          alt={game.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-indigo-700">
            {game.genre}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 leading-tight">
          {game.name}
        </h3>

        <div className="mt-4 flex items-center text-sm text-gray-500">
          <span className="font-medium text-gray-400 mr-2">Release Date:</span>
          <span>{format(game.releaseDate, "MMMM do, yyyy")}</span>
        </div>
      </div>
    </div>
  );
};

export default HoverGameComponent;
