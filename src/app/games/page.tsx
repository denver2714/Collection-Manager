import Link from "next/link";
import { format } from "date-fns";
import * as gamesService from "../../services/gamesService";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Plus } from "lucide-react";

const Games = async () => {
  const games = await gamesService.getAllGames();

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Games</h1>
              <p className="text-sm text-muted-foreground">
                {games.length} {games.length === 1 ? "game" : "games"} in your
                collection
              </p>
            </div>
          </div>
          <Button asChild>
            <a href="/games/new">
              <Plus className="h-4 w-4 mr-2" />
              Add Game
            </a>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {games.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No games yet. Add your first game!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {games.map((game) => (
              <Link href={`/games/${game.id}`} key={game.id}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src={game.image}
                      alt={game.name}
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold truncate">{game.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {game.genre}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {format(new Date(game.releaseDate), "MMM d, yyyy")}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Games;
