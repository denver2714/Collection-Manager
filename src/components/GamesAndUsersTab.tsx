import Link from "next/link";
import { Button } from "@/components/ui/button";

const GamesAndUsersTab = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Collection Manager
          </h1>
          <p className="text-muted-foreground">
            Manage your games and users in one place.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/games">Browse Games</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/users">Browse Users</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GamesAndUsersTab;
