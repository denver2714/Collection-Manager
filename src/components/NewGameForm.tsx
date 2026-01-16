"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface GameForm {
  name: string;
  image: string;
  genre: string;
  releaseDate: string;
}

const NewGameForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<GameForm>();

  const onSubmit = async (data: GameForm) => {
    const res = await fetch("/api/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    router.refresh();
    router.back();
  };

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
            <h1 className="text-2xl font-bold tracking-tight">Add New Game</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-lg">
        <Card>
          <CardHeader>
            <CardTitle>Game Details</CardTitle>
            <CardDescription>
              Fill in the details below to add a new game to your collection.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter game name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  {...register("image", { required: "Image URL is required" })}
                />
                {errors.image && (
                  <p className="text-sm text-destructive">
                    {errors.image.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="genre">Genre</Label>
                <Input
                  id="genre"
                  placeholder="e.g., Action, RPG, Strategy"
                  {...register("genre", { required: "Genre is required" })}
                />
                {errors.genre && (
                  <p className="text-sm text-destructive">
                    {errors.genre.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="releaseDate">Release Date</Label>
                <Input
                  id="releaseDate"
                  type="date"
                  {...register("releaseDate", {
                    required: "Release date is required",
                    validate: (value) =>
                      new Date(value) <= new Date() ||
                      "Date cannot be in the future",
                  })}
                />
                {errors.releaseDate && (
                  <p className="text-sm text-destructive">
                    {errors.releaseDate.message}
                  </p>
                )}
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => router.back()}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Adding..." : "Add Game"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default NewGameForm;
