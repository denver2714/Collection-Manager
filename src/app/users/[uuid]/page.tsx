import * as usersService from "@/services/usersService";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";
import DeleteUserComponent from "@/components/DeleteUserComponent";

const UserId = async ({ params }: { params: Promise<{ uuid: string }> }) => {
  const { uuid } = await params;
  const user = await usersService.getUser(uuid);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">User not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/users">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold tracking-tight">User Profile</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600" />

          <div className="relative px-6 pb-6">
            <div className="absolute -top-16 left-6">
              <img
                src={user.image}
                alt={user.name}
                className="w-32 h-32 rounded-full border-4 border-background shadow-lg object-cover"
              />
            </div>

            <div className="pt-20">
              <CardTitle className="text-2xl">{user.name}</CardTitle>
              <CardDescription className="mt-4 text-base">
                {user.description || "No description provided."}
              </CardDescription>

              <div className="mt-6 flex gap-3">
                <Button asChild>
                  <Link href={`/users/${user.id}/edit`}>
                    <Pencil className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Link>
                </Button>
                <DeleteUserComponent uuid={user.id} />
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default UserId;
