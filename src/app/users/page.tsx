import { getAllUser } from "@/services/usersService";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Plus } from "lucide-react";

const Users = async () => {
  const users = await getAllUser();

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
              <h1 className="text-2xl font-bold tracking-tight">Users</h1>
              <p className="text-sm text-muted-foreground">
                {users.length} {users.length === 1 ? "user" : "users"} in your
                collection
              </p>
            </div>
          </div>
          <Button asChild>
            <a href="/users/new">
              <Plus className="h-4 w-4 mr-2" />
              Add User
            </a>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {users.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No users yet. Add your first user!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {users.map((user) => (
              <Link href={`/users/${user.id}`} key={user.id}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold truncate">{user.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {user.description}
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

export default Users;
