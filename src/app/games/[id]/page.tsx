import { format } from "date-fns";
import Link from "next/link";
import * as gamesService from "../../../services/gamesService";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Pencil } from "lucide-react";
import DeleteGameButton from "@/components/DeleteGameButton";

const GameId = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const gameId = Number(id);
  const game = await gamesService.getGame(gameId);

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Game not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/games">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold tracking-tight">Game Details</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <CardHeader className="p-0 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-md">
                    {game.genre}
                  </span>
                </div>
                <CardTitle className="text-3xl">{game.name}</CardTitle>
                <CardDescription className="text-base mt-2">
                  Released on {format(game.releaseDate, "MMMM d, yyyy")}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-0 pt-6">
                <div className="flex gap-3">
                  <Button asChild>
                    <Link href={`/games/${id}/edit`}>
                      <Pencil className="h-4 w-4 mr-2" />
                      Edit
                    </Link>
                  </Button>
                  <DeleteGameButton id={id} />
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default GameId;
