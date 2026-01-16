"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type idType = {
  id: string;
};

const DeleteGameButton = ({ id }: idType) => {
  const gameId = Number(id);
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/games/${gameId}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error(error);
    }

    router.refresh();
    router.back();
  };

  return (
    <Button onClick={handleDelete} variant="destructive">
      Delete
    </Button>
  );
};

export default DeleteGameButton;
