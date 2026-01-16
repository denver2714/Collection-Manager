"use client";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <Card
      onClick={handleCardClick}
      className="w-full max-w-2xl overflow-hidden cursor-pointer"
    >
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img
          src={game.image}
          alt={game.name}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">{game.name}</CardTitle>
          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-md">
            {game.genre}
          </span>
        </div>
        <CardDescription>
          Released on {format(game.releaseDate, "MMMM d, yyyy")}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default HoverGameComponent;
